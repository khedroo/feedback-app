import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState, useContext } from "react"

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackAdd from  "./components/FeedbackAdd"
import FeedbackStats from './components/FeedbackStats'
import AboutLink from "./components/AboutLink"

import AboutPage from "./pages/AboutPage"
import {FeedbackProvider} from "./context/FeedbackContext"


function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <>
                                    <FeedbackAdd /> 
                                    <FeedbackStats className='d-flex' />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutLink />
            </Router>
        </FeedbackProvider>
        
    )
}
export default App