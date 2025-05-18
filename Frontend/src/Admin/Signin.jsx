import { useState } from "react";
import { Link } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";

export default function Adminsign(){
    const [AdminId,setadminid] = useState(0);
    const [Password,setpassword] = useState('');

    const postadmin = ()=>{
        axiosinstance.post('http://localhost:8000/sign-up',{AdminId,Password}).then(res=>{
            
        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postadmin()
        setadminid('');
        setpassword('');


    }
    return <>
    <form onSubmit={onsubmit}>
        <input onChange={e=>{setadminid(e.target.value)}} value={AdminId} type="Number" placeholder="Enter AdminId" /><br/><br/>
        <input onChange={e=>{setpassword(e.target.value)}} value={Password} type="password" placeholder="Enter Password"/><br/><br/>
        <button type="submit">Sign-Up</button><br/><br/>
        <Link to={'/Admin'}>Admin</Link>
    </form>
    </>
}