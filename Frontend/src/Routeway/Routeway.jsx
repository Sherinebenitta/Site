import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/LoginPage.css'
import { useNavigate } from "react-router-dom";

export default function Routeway(){
    const [Routeway,setrouteway] = useState('');
    const navigate = useNavigate();

    const postroute = ()=>{
        axiosinstance.post('http://localhost:8000/route',{Routeway}).then(res=>{

        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postroute();
        setrouteway('')
        navigate('/Entryadmin')
    
    }
    return <div class="login-container_way">
        <div class="login-form">
        <form onSubmit={onsubmit}>
            <label>Travel Route</label><br/>
            <input onChange={e=>{setrouteway(e.target.value)}} value={Routeway} /><br/>
            <button>Add Routeway</button>
        </form>
        </div>
    </div>
}