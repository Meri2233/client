import React from 'react'
import { useEffect } from 'react';
import io from "socket.io-client"
const url = "http://127.0.0.1:4001";

const socket = io(url);

export default function Rooms() {
  useEffect(() => {
    socket.on('connect', (data) => {
      console.log("Client Connected", data)
    })
  })


  return (
    <div>
      
    </div>
  )
}
