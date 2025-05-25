import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import axiosinstance from "../axiosInstance/axiosinstance";
import '../../src/style/LoginPage.css'

export default function Login(){
    const [Username,setusername] = useState('')
    const [Password,setpassword] = useState('');
    const navigate = useNavigate()

    const newuser =()=>{ 
        axiosinstance.post('http://localhost:8000/sign-in',{Username,Password}).then(res=>{
        
    })
}
    
    const onsubmit = e=>{
            e.preventDefault();
            newuser();
            setusername('')
            setpassword('')
            navigate('/User')

        }
    return <>
    <div className="row" style={{height:"100vh"}}>
        <div className="col-md-6 mt-5" style={{textAlign:"center"}}>
    <form onSubmit={onsubmit} className="mt-5" class="login-form">
    <h4>USER SIGN-UP</h4>
    <label style={{color:"black"}}>Username</label>
    <input class="login-form input " onChange={e=>{setusername(e.target.value)}} value={Username} placeholder="Enter username"/><br/><br/>
    <label style={{color:"black"}}>Password</label>
    <input class="login-form input " onChange={e=>{setpassword(e.target.value)}} value={Password} placeholder="Enter password" type="password"/><br/><br/>
    <button>Sign-Up</button><br/>
    </form>
    </div>
    <div class="image-section"></div>
    </div>
    </>
}