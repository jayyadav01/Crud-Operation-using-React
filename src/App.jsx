import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Edit from './Edit'
import Add from './Components/Add'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add' element={<Add/>} ></Route>
            <Route path='/edit' element={<Edit/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
