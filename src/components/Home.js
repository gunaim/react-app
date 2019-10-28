import React from 'react'
import {Link} from 'react-router-dom'
import {buttonStyle} from "../helpers/styleHelpers";

export default function Home() {
    return (
        <div>
            <h1 style={buttonStyle}>Home</h1>
            <Link to='/increments'>Increment</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    )
}
