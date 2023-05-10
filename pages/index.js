import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage({ meetups }) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name='description' content='It is React meetups application' />
      </Head>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
}

// this function runs during build
export async function getStaticProps() {
  // fetch data from API
  // fetch can also works in server side code as well

  const uri =
    'mongodb+srv://sanjay:gautam535@cluster0.s8i0unm.mongodb.net/meetup?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetupsList = await meetupCollection.find().toArray();
    const meetups = meetupsList.map((item) => ({
      id: item._id.toString(),
      title: item.title,
      image: item.image,
      address: item.address,
      description: item.description,
    }));
    return {
      props: {
        meetups: meetups,
      }
    };
  } catch (error) {
    console.log(`Error=`, error);
  } finally {
    await client.close();
  }
}

export default HomePage;
