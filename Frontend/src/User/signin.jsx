import { Link } from "react-router-dom";
import {useState} from 'react';
import axiosinstance from "../axiosInstance/axiosinstance";

export default function Login(){
    const [Username,setusername] = useState('')
    const [Password,setpassword] = useState('');

    const newuser =()=>{ axiosinstance.post('http://localhost:8000/sign-in',{Username,Password}).then(res=>{
        
    })
}
    
    const onsubmit = e=>{
            e.preventDefault();
            newuser();
            setusername('')
            setpassword('')
        }
    return <>
    <form onSubmit={onsubmit}>
    <input onChange={e=>{setusername(e.target.value)}} value={Username} placeholder="Enter username"/><br/><br/>
    <input onChange={e=>{setpassword(e.target.value)}} value={Password} placeholder="Enter password" type="password"/><br/><br/>
    <button>Sign-Up</button><br/>
    <Link to={'/'}>Home</Link>
    </form>
    </>
}