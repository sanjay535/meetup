/* /api/new-meetup */
import {MongoClient} from 'mongodb';

async function handler(req, res){
    if(req.method==='POST'){
        // it run if /api/new-meetup have POST request
        const data=req.body;
        // const {title, image, address, description}=data;
        const uri = "mongodb+srv://sanjay:sanjay535@cluster0.s8i0unm.mongodb.net/meetups?retryWrites=true&w=majority";
       const client=await MongoClient.connect(uri);
       const db=client.db();
       const meetupCollection=db.collection('meetups');
       const result=  meetupCollection.insertOne(data);
       console.log(result);
       client.close();
       res.status(201).json({message:'Meetup inserted'})
    }
}

export default handler;