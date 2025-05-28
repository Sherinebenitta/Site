import { useState } from "react";
import { Link } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useNavigate } from "react-router-dom";
import '../../src/style/LoginPage.css'

export default function Admin(){
    const [AdminId,setadminid] = useState();
    const [Password,setpassword] = useState('');
    const navigate = useNavigate(); 

    const postadmin = ()=>{
        axiosinstance.post('http://localhost:8000/login-admin',{AdminId,Password}).then(res=>{
            navigate('/Entryadmin')
            axiosinstance.defaults.headers['createtoken'] = res.data?.createtoken;
            localStorage.setItem('Admin',res.data?.createtoken);
            axiosinstance.defaults.headers['Admin'] = res.data?.Admin;
            localStorage.setItem('Admin_ID',res.data?.Admin?._id)
        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postadmin();
        setadminid('');
        setpassword('')
    }
    return <div className="login-container_second">
    <form onSubmit={onsubmit} className="login-form">
        <input onChange={e=>{const val = e.target.value; if (/^\d{0,6}$/.test(val)) {setadminid(val);}}} min={'0'} value={AdminId} type="Number" placeholder="Enter AdminId" /><br/><br/>
        <input onChange={e=>{setpassword(e.target.value)}}  value={Password} type="password" placeholder="Enter Password"/><br/><br/>
        <button type="submit">Login</button><br/><br/>
        <Link to={'/Adminsign'}>New Admin</Link>
    </form>
    </div>
}