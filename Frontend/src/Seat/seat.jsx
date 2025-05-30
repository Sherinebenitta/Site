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
            <input onChange={e=>{setseat(e.target.value)}} value={Seat_class} required /><br/><br/>
            <b><label>Code</label></b>
            <input onChange={e=>{const val = e.target.value; if (/^\d{0,3}$/.test(val)) {setcode(val);}}} min={'0'} value={Code} type="Number" required /><br/><br/>
            <b><label>No of seats</label></b>
            <input onChange={e=>{const val = e.target.value; if (/^\d{0,2}$/.test(val)) {setnumber(val);}}} min={'0'} value={SeatNumbers} type="Number" required/><br/><br/>
            <button type="submit">Add Seats</button>
        </form>
        </div>
    </div>
}