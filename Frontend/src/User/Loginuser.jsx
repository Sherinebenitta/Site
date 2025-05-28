import { useState } from "react"
import { Link } from "react-router-dom"
import axiosinstance from "../axiosInstance/axiosinstance"
import { useNavigate } from "react-router-dom"
import '../../src/style/LoginPage.css'
export default function User(){
    const [Username,setusername] = useState('')
    const [Password,setpassword] = useState('')
    const navigate = useNavigate()
    const loginuser = ()=>{
        axiosinstance.post('http://localhost:8000/login-user',{Username,Password}).then(res=>{
          navigate('/Ticket') 
          axiosinstance.defaults.headers['token'] = res.data?.token ;
          localStorage.setItem('User',res.data?.token)
          axiosinstance.defaults.headers['User'] = res.data?.User;
          localStorage.setItem('ID',res.data?.User?._id)
        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        loginuser();
        setusername('');
        setpassword('')
    }
    return <div className="login-container">
    <form onSubmit={onsubmit} className="login-form">
        <input onChange={e=>{setusername(e.target.value)}} value={Username} placeholder="Enter username" required/><br/><br/>
        <input onChange={e=>{setpassword(e.target.value)}} value={Password} placeholder="Enter password" type="password" required/><br/><br/>
        <button type="submit">Login</button><br/><br/>
        <b><p className="text-white">Become a Member</p></b>
        <Link to={'/Usersignin'} class="signup-link a">SIGN-UP</Link>
    </form>
    </div>
}