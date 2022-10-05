import React, { Children } from 'react'
import { createContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"


const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const jsonUrl = 'http://localhost:5000/feedback?_sort=id&_order=desc'
    const updateJson = 'http://localhost:5000/feedback'
    const [feedback, setFeedback] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchAPI()
    }, [])

    const cardDelete = async (itemId) => {
        if (window.confirm('are u sure that u want to delete this feedback?'))
        {
            await fetch(updateJson + `/${itemId}`, {method: 'DELETE'})
            setFeedback(feedback.filter((card) => card.id !== itemId))
            console.log(feedback)
        }
    }
    const addFeedback = async (newFeedback) => {
        const response = await fetch(jsonUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }
    const updateFeedback = async (id, upitem) => {
        const response = await fetch(updateJson + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upitem)
        })
        const data = await response.json()
        setFeedback(
            feedback.map((item) => (item.id === id) ? {...item, ...data} : item)
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
    const fetchAPI = async () => {
        const response = await fetch(jsonUrl)
        const data = await response.json()
        setFeedback(data)
        console.log(feedback)
    }
    return (<FeedbackContext.Provider value={{feedback, feedbackEdit, isLoading, cardDelete,addFeedback, edit, updateFeedback}}>
                {children}
            </FeedbackContext.Provider>)
}



export default FeedbackContext