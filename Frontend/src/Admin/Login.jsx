import { useState } from "react";
import { Link } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useNavigate } from "react-router-dom";

export default function Admin(){
    const [AdminId,setadminid] = useState(0);
    const [Password,setpassword] = useState('');
    const navigate = useNavigate(); 

    const postadmin = ()=>{
        axiosinstance.post('http://localhost:8000/login-admin',{AdminId,Password}).then(res=>{
            navigate('/Train')
            axiosinstance.defaults.headers['createtoken'] = res.data?.createtoken;
            localStorage.setItem('Admin',res.data?.createtoken);
            axiosinstance.defaults.headers['Admin'] = res.data?.Admin;
            localStorage.setItem('ID',res.data?.Admin?._id)
        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postadmin();
        setadminid('');
        setpassword('')
    }
    return <>
    <form onSubmit={onsubmit}>
        <input onChange={e=>{setadminid(e.target.value)}} value={AdminId} type="Number" placeholder="Enter AdminId" /><br/><br/>
        <input onChange={e=>{setpassword(e.target.value)}} value={Password} type="password" placeholder="Enter Password"/><br/><br/>
        <button type="submit">Login</button><br/><br/>
        <Link to={'/Adminsign'}>New Admin</Link>
    </form>
    </>
}