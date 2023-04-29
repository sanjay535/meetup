import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage(props){
    return (
        <MeetupDetail meetupData={props.meetupData}/>
    )
}

export async function getStaticPaths(){
     /*  
     it pregenrate page for each meetup id that mentioned in paths array
     if mulltiple segment dynmic path then array become nested
     fallback=false paths contain all supported value, if we enter value that is not supported
     it through 404 error

     fallback=true  
     then nextJS generate page dynamically for this meetupId

     fallback :true allow us to pregenrate page for some meetupId that are visiting more frequently
     */
     const uri ='mongodb+srv://sanjay:gautam535@cluster0.s8i0unm.mongodb.net/meetup?retryWrites=true&w=majority';
     const client = new MongoClient(uri);
       await client.connect();
       const db = client.db();
       const meetupCollection = db.collection('meetups');
       const meetups = await meetupCollection.find({}, {_id:1}).toArray(); // it return only Id's of object
    client.close();
    return {
        fallback:'blocking',
        paths:meetups.map(meetup=>({params:{meetupId:meetup._id.toString()}}))
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    console.log(meetupId);
    const uri ='mongodb+srv://sanjay:gautam535@cluster0.s8i0unm.mongodb.net/meetup?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
      await client.connect();
      const db = client.db();
      const meetupCollection = db.collection('meetups');
      const selectedMeetup = await meetupCollection.findOne({_id:new ObjectId(meetupId)});
    //   console.log('selectedMeetup = ',selectedMeetup);
      client.close()
    debugger
    return {
        props:{
            meetupData:{
                image:selectedMeetup.image,
                title:selectedMeetup.title,
                address:selectedMeetup.address,
                description:selectedMeetup.description
            }
        }
    }
}

export default MeetupDetailsPage