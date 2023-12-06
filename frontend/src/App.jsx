import{Route, Routes} from 'react-router-dom'
import './App.css'
import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/home/Home'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import AddPost from './components/addpost/AddPost'

const App = () => {
  return (
    <>
      
      <Navigation></Navigation>
      <Routes>
        <Route path='/'
        element={<Home/>}
        />
        <Route path='/blog'
        element={<Blog/>}
        />
        <Route path='/contact'
        element={<Contact/>}
        />
        <Route path='/add-post'
        element={<AddPost/>}
        />
      </Routes>
    </>
  )
}

export default App
