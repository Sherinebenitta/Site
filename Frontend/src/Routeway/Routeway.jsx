import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
export default function Routeway(){
    const [Startpoint,setstartpoint] = useState('');
    const [Destination,setdestination] = useState('')

    const postroute = ()=>{
        axiosinstance.post('http://localhost:8000/route',{Startpoint,Destination}).then(res=>{

        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postroute();
        setstartpoint('')
        setdestination('')
    }
    return <div>
        <form onSubmit={onsubmit}>
            <label>Pickup Spot</label><br/>
            <input onChange={e=>{setstartpoint(e.target.value)}} value={Startpoint} /><br/>
            <label>Dropping point</label><br/>
            <input onChange={e=>{setdestination(e.target.value)}} value={Destination}/><br/><br/>
            <button>Add Routeway</button>
        </form>
    </div>
}