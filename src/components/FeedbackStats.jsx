import React from 'react'

import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    const average = feedback.reduce( (acc, cur) => { return acc + cur.rating}, 0)
    console.log(average)
  return (
    <div className='d-flex justify-content-between'>
        <h4>{feedback.length} reviews</h4>
        <h4>average rating: {average ? (average / feedback.length).toFixed(1) : 0}</h4>
    </div>

  )
}

export default FeedbackStats
