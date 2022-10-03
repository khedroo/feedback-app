import React from 'react'
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackRating({handlerating}) {
    const [select, setselect] = useState(10)
    const handleChange = (e) => {
        setselect(+e.currentTarget.value)
        handlerating(+e.currentTarget.value)}
    const {feedbackEdit} = useContext(FeedbackContext)
    useEffect(() => {
    if (feedbackEdit.edit === true)
    {
        setselect(feedbackEdit.item.rating)
    }
    }, [feedbackEdit])
    
    return (
    <ul className='rating'>
        <li>
            <input type="radio" id='num1' name='rating' value='1' checked={select === 1} onChange={handleChange} />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" id='num2' name='rating' value='2' checked={select === 2} onChange={handleChange} />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" id='num3' name='rating' value='3' checked={select === 3} onChange={handleChange} />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" id='num4' name='rating' value='4' checked={select === 4} onChange={handleChange} />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" id='num5' name='rating' value='5' checked={select === 5} onChange={handleChange} />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" id='num6' name='rating' value='6' checked={select === 6} onChange={handleChange} />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" id='num7' name='rating' value='7' checked={select === 7} onChange={handleChange} />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" id='num8' name='rating' value='8' checked={select === 8} onChange={handleChange} />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" id='num9' name='rating' value='9' checked={select === 9} onChange={handleChange} />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" id='num10' name='rating' value='10' checked={select === 10} onChange={handleChange} />
            <label htmlFor="num10">10</label>
        </li>
    </ul>
  )
}

export default FeedbackRating