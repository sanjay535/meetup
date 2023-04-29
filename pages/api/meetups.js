import { MongoClient } from "mongodb";

async function handler(req, res){
    const uri ='mongodb+srv://sanjay:gautam535@cluster0.s8i0unm.mongodb.net/meetup?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db();
      const meetupCollection = db.collection('meetups');
      const result = await meetupCollection.find().toArray();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({message:'Something went wrong', error:error})
      console.log(`Error=`, error);
    }
    finally{
        await client.close();
    }
}

export default handler;