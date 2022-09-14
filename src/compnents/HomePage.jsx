import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='container'>
            <Link style={{ textDecoration: 'none' }} to={"/joinroom"}><button>Join Room</button></Link>
            <Link style={{ textDecoration: 'none' }} to={"/game"}> <button>Create Room</button></Link>
        </div>
    )
}
