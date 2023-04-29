import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage({meetups}){
    return  (
        <Fragment>
        <Head>
            <title>React meetups</title>
            <meta name="description" content="It is React meetups application"/>
        </Head>
    <MeetupList meetups={meetups}/>
    </Fragment>);
}

// this function runs during build
export async function getStaticProps(){
    // fetch data from API
    // fetch can also works in server side code as well
    let meetups;
    try {
        const response= await fetch('/api/meetups'); 
        const meetupsList=await response.json();
         meetups=meetupsList.map(item=>({
         id:item._id.toString(),
         title:item.title,
         image:item.image,
         address:item.address,
         description:item.description
        }))
         
    } catch (error) {
        console.error(error);
    }
    return {
        props:{
            meetups:meetups
        },
        revalidate:1
    } 
   
}

export default HomePage;