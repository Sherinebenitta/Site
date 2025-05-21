import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
export default function Routeway(){
    const [Routeway,setrouteway] = useState('');

    const postroute = ()=>{
        axiosinstance.post('http://localhost:8000/route',{Routeway}).then(res=>{

        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        postroute();
        setrouteway('')
    }
    return <div>
        <form onSubmit={onsubmit}>
            <label>Travel Route</label><br/>
            <input onChange={e=>{setrouteway(e.target.value)}} value={Routeway} /><br/>
            <button>Add Routeway</button>
        </form>
    </div>
}