/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import {useContext} from 'react';
import { UserContext } from '../../context/userContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Success = () => {
const navigate = useNavigate()

  const handleLogout = () => {
    axios.get('/profile')
    .then(res => {
      navigate('/')
      toast.success('Logout successful ✅')
    }).catch(err => console.log(err));
  }

  const {user} = useContext(UserContext)

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }} transition={{ duration : .5 }}
    className='flex flex-col items-center justify-center pt-16 md:p-28 space-y-64 w-full'
    >
    <div className='flex flex-col items-center space-y-2 w-full'>
        <h1 className='text-xl md:text-3xl font-semibold'>Login was successful 🚀</h1>
        {!!user && (<h2 className='text-[#8692A6]'>Welcome <span className='text-slate-300'>{user.name}</span>! 👋</h2>)}
      </div>
        <div  className="w-1/2 py-3 rounded-md bg-blue-600 text-center">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </motion.div>
  )
}

export default Success