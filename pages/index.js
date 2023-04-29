import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA=[
{
    id:'m1',
    title:'A first page',
    image:'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    address:'Some address of first meetup',
    description:'meetup desc 1'
},
{
    id:'m2',
    title:'A Second page',
    image:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    address:'some address od 2nd meetup',
    description:'meetup desc 2'
}
];

function HomePage({meetups, loading}){
    if(loading){
        return <h>Loading...</h>
    }
    return  <MeetupList meetups={meetups}/>;
}

// this function runs during build
export async function getStaticProps(){
    // fetch data from API
    // fetch can also works in server side code as well
    let loading;
    let meetups;
    try {
        loading=true;
        const response= await fetch('http://localhost:3000/api/meetups'); 
        const meetupsList=await response.json();
         meetups=meetupsList.map(item=>({
         id:item._id,
         title:item.title,
         image:item.image,
         address:item.address,
         description:item.description
        }))
         
    } catch (error) {
        console.error(error);
    } finally{
        loading=false;
    }
    return {
        props:{
            meetups:meetups,
            loading:loading
        },
        revalidate:1
    } 
   
}

export default HomePage;