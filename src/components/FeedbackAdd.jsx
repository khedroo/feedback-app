import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackRating from './FeedbackRating'

function FeedbackAdd() {
  const [text, setText] = useState('')
  const handleText = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
    if (text.length > 10)
    {
      setdisable(false)
      setmessage(null)
    }
    else {
      setmessage('u must have at least 10 characters')
      setdisable(true)
    }
  }
  const [rating, setrating] = useState(10)
  const handlerating = (item) => setrating(item)
  const [disable, setdisable] = useState(true)
  const [message, setmessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  const submitFeedback = (e) => {
    e.preventDefault()
    const newFeedback = {
      text, rating
    }
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback)
      setText('')
    }
    else {
      addFeedback(newFeedback)
      setText('')
    }
  }
  useEffect(() => {
    if (feedbackEdit.edit === true) {
    setdisable(false)
    setText(feedbackEdit.item.text)
    setrating(feedbackEdit.item.rating)
  }}, [feedbackEdit])
  
  return (
    <Card>
      <h2>how would u like to rate your service with us</h2>
      <FeedbackRating rating={rating} handlerating={handlerating} />
      <form className='input-group' onSubmit={submitFeedback}>
        <input type="text"  value={text} onChange={handleText} />
        <Button type='submit' version='primary' isdisabled={disable}>send</Button>
      </form>
      {message && <p>{message}</p>}
    </Card>
  )
}

export default FeedbackAdd