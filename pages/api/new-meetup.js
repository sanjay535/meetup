/* /api/new-meetup */

function handler(req, res){
    if(req.method==='POST'){
        // it run if /api/new-meetup have POST request
        const data=req.body;
        const {title, image, address, description}=data;
    }
}