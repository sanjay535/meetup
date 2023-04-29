import React from 'react'
import classes from './MeetupDetail.module.css';
function MeetupDetail({meetupData}) {
  console.log('meetupData=', meetupData);
  return (
    <div className={classes.detail}>
        <img src={meetupData.image} alt={meetupData.title} />
        <h1>{meetupData.title}</h1>
        <address>{meetupData.address}</address>
        <p>{meetupData.description}</p>
    </div>
  )
}

export default MeetupDetail