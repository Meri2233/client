import React from 'react'
import { useEffect } from 'react';

export default function Rooms({joinRoom}) {

  return (
    <div className='container'>
      <input onKeyUp={(e) => joinRoom(e)} type="text" name='rooms' className='rooms'/>
    </div>
  )
}
