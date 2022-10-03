import React, { Children } from 'react'
import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"


const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is from feedback context',
            rating: 9
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const cardDelete = (itemId) => {
        if (window.confirm('are u sure that u want to delete this feedback?'))
        {
            setFeedback(feedback.filter((card) => card.id !== itemId))
            console.log(feedback)
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const updateFeedback = (id, upitem) => {
        setFeedback(
            feedback.map((item) => (item.id === id) ? {...item, ...upitem} : item)
        )
        setFeedbackEdit({
            item: {},
            edit: false
        })
      }
    const edit = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return (<FeedbackContext.Provider value={{feedback, feedbackEdit, cardDelete,addFeedback, edit, updateFeedback}}>
                {children}
            </FeedbackContext.Provider>)
}



export default FeedbackContext