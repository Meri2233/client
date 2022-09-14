import React, { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import Game from './Game'
import HomePage from './HomePage'
import Rooms from './Rooms'
import io from "socket.io-client"
const url = "http://localhost:3001";

const socket = io.connect(url);

export default function Main() {
    let [code, setCode] = useState(null);

    let createRoom = () => {
        socket.emit('create', Math.floor(Math.random() * 2000));
        socket.on('room-code', (data) => {
            console.log(data);
            setCode(data);
        })
    }

    function joinRoom(e) {
        let roomnum = document.querySelector('.rooms')
        if (e.key === "Enter") {
            socket.emit('join', roomnum.value);
        }
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<Game createRoom={createRoom} data={code} />} />
            <Route path="/joinroom" element={<Rooms joinRoom={joinRoom} />} />
        </Routes>
    )
}
