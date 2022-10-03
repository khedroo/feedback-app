import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'

import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {cardDelete, edit} = useContext(FeedbackContext)


  return (
    <Card>
      <button className="close" onClick={() => cardDelete(item.id)}><FaTimes color='purple' /></button>
      <button className="edit" onClick={() => edit(item)}><FaEdit color='purple' /></button>
        <div className='num-display'>{item.rating}</div>
        <div className='text'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem