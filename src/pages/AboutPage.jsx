import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this app</h1>
            <p>This is a feedback project where u can rate your service with us</p>
            <p>Version: 4.0.1</p>
            <Link to='/'>Back to home page</Link>
        </div>

    </Card>
  )
}

export default AboutPage