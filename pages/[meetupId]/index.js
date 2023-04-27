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

     fallback allow us to pregenrate page for some meetupId that are visiting more frequently
     */
    return {
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                }
            },
            {
                params:{
                    meetupId:'m2',
                }
            }
        ]
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    console.log(meetupId);
    return {
        props:{
            meetupData:{
                image:'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                id:meetupId,
                title:'First Meetup',
                address:'Some street 5, Some city',
                description:'this is a first meetup'
            }
        }
    }
}

export default MeetupDetailsPage