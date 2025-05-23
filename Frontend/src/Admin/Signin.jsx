import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import '../../src/style/LoginPage.css'
import '../../src/style/entry.css'

export default function Adminsign(){
    const [AdminId,setadminid] = useState(0);
    const [Password,setpassword] = useState('');
    const navigate = useNavigate()

    const postadmin = ()=>{
        axiosinstance.post('http://localhost:8000/sign-up',{AdminId,Password}).then(res=>{
            
        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postadmin()
        setadminid('');
        setpassword('');
        navigate('/Admin')


    }
    return<> 
    <div className="row" style={{height:"100vh"}}>
        <div className="col-md-6 mt-5" style={{textAlign:"center"}}>
        <h2>ADMIN SIGN UP</h2>
        <form onSubmit={onsubmit} className="mt-5" class="login-form">
            <label>ADMIN ID</label>
            <input class="login-form input" onChange={e=>{setadminid(e.target.value)}} value={AdminId} type="Number" placeholder="Enter AdminId" /><br/><br/>
            <label>PASSWORD</label>
            <input class="login-form input" onChange={e=>{setpassword(e.target.value)}} value={Password} type="password" placeholder="Enter Password"/><br/><br/>
            <button type="submit">SIGN-UP</button><br/><br/>
        </form>
        </div>
        <div className="col-md-6 image-section_second">

        </div>
    </div>
    </>
}