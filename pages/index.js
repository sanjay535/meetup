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

function HomePage(){
    return  <MeetupList meetups={DUMMY_DATA}/>;
}

export default HomePage;