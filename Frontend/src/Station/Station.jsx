import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'

export default function Station(){
    const [Name,setname] = useState('');
    const [Code,setcode] = useState();
    const [Location,setlocation] = useState('')

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

    }
    return <div>
        <form onSubmit={onsubmit}>
            <label>Station</label>
            <input onChange={e=>{setname(e.target.value)}} value={Name} placeholder="Station Name" /><br/><br/>
            <label>Station Code</label>
            <input onChange={e=>{setcode(e.target.value)}} value={Code} placeholder="Code" /><br/><br/>
            <label>Location</label>
            <input onChange={e=>{setlocation(e.target.value)}} value={Location} placeholder="Location" /><br/><br/>
            <button type="submit">Add Station</button>
        </form>
    </div>
}