/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Success from './pages/Success'
// import Dashboard from './pages/Dashboard'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
// import Profile from './pages/Profile'

axios.defaults.baseURL = 'https://auth-backend-api.vercel.app' //backend url when hosted
// axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

 
const App = () => {
  return (
    
    <UserContextProvider>
      <Navbar />
      <Toaster position="top-center" toastOptions={{duration: 4000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/success' element={<Success />}/>
      </Routes>
      </UserContextProvider>
  )
}

export default App