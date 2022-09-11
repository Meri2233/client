import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Rooms from './Rooms'

export default function Main() {
    let createRoom = (e) => {

    }
    return ( 
        <Routes>
            <Route path="/" element={<HomePage createRoom={createRoom} />} />
            <Route path="/" element={<Rooms />}>
            </Route>
        </Routes>
    )
}
