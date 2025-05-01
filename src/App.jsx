import React from 'react'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Project from './components/Pages/Projects/Pojects'
import Skills from './components/Pages/Skills/Skills'
import About from './components/Pages/About/About'
import PageNotFound from './components/Pages/PageNotFound/PageNotFound'


const App = () => {
  return (
    <>
    {/* <div className='pageAnimation'> */}


    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/about" element = {<About/>}></Route>
      <Route path="/skills" element = {<Skills/>}></Route>
      <Route path="/projects" element = {<Project/>}></Route>
      <Route path="*" element = {<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    
    {/* </div> */}
    </>

  )
}

export default App