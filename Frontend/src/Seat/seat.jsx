import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'

export default function Seat(){
    const [Seat_class,setseat] = useState('')
    const [Code,setcode] = useState();
    const [SeatNumbers,setnumber] = useState();

    const createseat = ()=>{
        axiosinstance.post('http://localhost:8000/seat',{Seat_class,Code,SeatNumbers}).then(res=>{

        })
    }

    const onsubmit = e=>{
        e.preventDefault();
        createseat();
        setseat('')
        setcode('')
        setnumber('')

    }
    return <div>
        <form onSubmit={onsubmit}>
            <label>Seat class</label>
            <input onChange={e=>{setseat(e.target.value)}} value={Seat_class} /><br/><br/>
            <label>Code</label>
            <input onChange={e=>{setcode(e.target.value)}} value={Code} type="Number" /><br/><br/>
            <label>No of seats</label>
            <input onChange={e=>{setnumber(e.target.value)}} value={SeatNumbers} type="Number"/><br/><br/>
            <button type="submit">Add</button>
        </form>
    </div>
}