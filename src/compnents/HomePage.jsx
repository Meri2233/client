import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage({createRoom}) {
    return (
        <div className='container'>
            <Link style={{ textDecoration: 'none' }} to={"/"}><button>Join Room</button></Link>
            <button onClick={(e) => createRoom(e)}>Create Room</button>
        </div>
    )
}
