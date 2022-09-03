import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './about'
import Contact from './contact'
import Home from './home'

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Main