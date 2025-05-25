import { useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/LoginPage.css'
import { useNavigate } from "react-router-dom"

export default function Seat(){
    const [Seat_class,setseat] = useState('')
    const [Code,setcode] = useState();
    const [SeatNumbers,setnumber] = useState();
    const navigate = useNavigate()

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
        navigate('/Entryadmin')

    }
    return <div class="login-container_seat">
        <div class="login-form">
        <form onSubmit={onsubmit}>
            <b><label>Seat class</label></b>
            <input onChange={e=>{setseat(e.target.value)}} value={Seat_class} /><br/><br/>
            <b><label>Code</label></b>
            <input onChange={e=>{setcode(e.target.value)}} value={Code} type="Number" /><br/><br/>
            <b><label>No of seats</label></b>
            <input onChange={e=>{setnumber(e.target.value)}} value={SeatNumbers} type="Number"/><br/><br/>
            <button type="submit">Add Seats</button>
        </form>
        </div>
    </div>
}