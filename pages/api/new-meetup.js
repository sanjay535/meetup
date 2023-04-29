/* /api/new-meetup */
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    // it run if /api/new-meetup have POST request
    console.log('req.body=', req.body);
    const data = req.body;
    // const {title, image, address, description}=data;
    const uri =
      'mongodb+srv://sanjay:gautam535@cluster0.s8i0unm.mongodb.net/meetup?retryWrites=true&w=majority';
    try {
      const client = new MongoClient(uri);
      await client.connect();
      const db = client.db();
      const meetupCollection = db.collection('meetups');
      const result = await meetupCollection.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({ message: 'Meetup inserted' });
    } catch (error) {
      console.log(`Error=`, error);
    }
    
  }
}

export default handler;
