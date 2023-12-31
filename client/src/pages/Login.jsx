/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from 'axios'
import { toast } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import { googleLogo, img1 } from "../assets/images"

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      // Perform your login logic here
      const loginUser = async () => {
        // e.preventDefault()
        const {email, password} = data
        try {
          const {data} = await axios.post('/login',{
            email,
            password
          });
          if(data.error){
            toast.error(data.error)
          } else{
            setData({});
            navigate('/success')
            toast.success('Login successful 🎊🥳')
          }
        } catch (error) {
          console.log(error)
        }
      }
    
      loginUser()
} else {
  toast.error('Please check the box to proceed.');
}
  };

  return (
    <div className="container flex flex-row mx-auto space-x-32 justify-between">
    <div className="w-full md:w-[35%] flex flex-col justify-center py-10 md:py-28">
    <div className="mt-2"> 
      <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
      <p className="text-sm text-slate-400 mt-3">We are happy to have you back</p>
    </div>
      <motion.form initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: .7}}  onSubmit={handleSubmit} className="flex flex-col mt-6 mr-4">
       
        <label className='text-sm pb-2 text-[#8692A6]'>Email address*</label>
          
        <input className="text-slate-500 border border-[#8692A6] bg-[#282A2F] active:border-[#5871EB] duration-300 mb-4 w-full h-10 rounded-md pl-3" type='email' placeholder='E.g - johndoe@gmail.com' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        
        <label className='text-sm pb-2 text-[#8692A6] '>Password*</label>
          <input className="text-slate-500 border border-[#8692A6] bg-[#282A2F] active:border-[#5871EB] duration-300 w-full h-10 rounded-md pl-3 mb-4"  type='password' placeholder='enter password....' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          <div className="flex items-center space-x-3">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
          <p  className="text-base text-[#696F79]">I agree to <Link to="/T&C's">terms & conditions</Link></p>
          </div>
          <button type='submit' className={!isChecked ? "bg-[#32395c] duration-300 text-slate-500 mt-5 py-2 rounded-md" : "bg-[#5871EB] mt-5 py-2 rounded-md duration-300"}>Login</button>
      </motion.form>
      <div className="flex flex-col w-full justify-between items-center pr-3 space-y-3">
      <div className="flex mt-4 mb-3 w-full justify-between items-center">
        <hr className="w-32 md:w-52"/>
        <p className="text-xs md:text-base">Or</p>
        <hr className="w-32 md:w-52"/>
      </div>
        <button className="flex py-2 text-sm space-x-2 justify-center items-center rounded-md bg-black w-full">
      <img src={googleLogo} className="mr-4"/>
        Login with Google 
      </button>
      </div>
    </div>
    <div className="hidden md:flex md:items-center mt-11 md:justify-center md:w-[50%]">
        <img src={img1} className="w-auto" /> 
    </div>
    </div>
  )
}

export default Login