import React from 'react'
import classes from './MeetupDetail.module.css';
function MeetupDetail() {
  return (
    <div className={classes.detail}>
        <img src='https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' alt='title' />
        <h1>Some title</h1>
        <address>Some address</address>
        <p>some description</p>
    </div>
  )
}

export default MeetupDetail