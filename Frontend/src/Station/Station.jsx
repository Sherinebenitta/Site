import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/LoginPage.css'
import { useNavigate } from "react-router-dom";

export default function Station(){
    const [Name,setname] = useState('');
    const [Code,setcode] = useState();
    const [Location,setlocation] = useState('')
    const navigate = useNavigate()

    const poststation = ()=>{
        axiosinstance.post('http://localhost:8000/station',{Name,Code,Location}).then(res=>{
            
        })
    }
    const onsubmit = e=>{
        e.preventDefault();
        poststation();
        setname("")
        setcode("")
        setlocation("")
        navigate('/Entryadmin')

    }
    return <div class="login-container_station">
        <div class="login-form">
        <form onSubmit={onsubmit}>
            <label style={{color:"white"}}>Station</label>
            <input onChange={e=>{setname(e.target.value)}} value={Name} placeholder="Station Name" required/><br/><br/>
            <label style={{color:"white"}}>Station Code</label>
            <input onChange={e=>{const val = e.target.value; if (/^\d{0,3}$/.test(val)) {setcode(val);}}} min={'0'} value={Code} placeholder="Code" required /><br/><br/>
            <label style={{color:"white"}}>Location</label>
            <input onChange={e=>{setlocation(e.target.value)}} value={Location} placeholder="Location" required /><br/><br/>
            <button type="submit">Add Station</button>
        </form>
        </div>
    </div>
}