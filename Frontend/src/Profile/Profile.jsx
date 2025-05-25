import { Link, useNavigate } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useEffect, useState } from "react";
import '../../src/style/LoginPage.css'

export default function Profile(){
    const navigate = useNavigate();
    const userid = localStorage.getItem('ID');
    const [user,setuser] = useState([])
    const [train,settrain] = useState([])
    const logout = ()=>{
        localStorage.clear();
        navigate('/')
    }

    const getuser = ()=>{
        axiosinstance.get(`http://localhost:8000/getuser/${userid}`).then(res=>{
            setuser(res.data)
        })
    }

    const getticket = ()=>{
        axiosinstance.get(`http://localhost:8000/getbooking/${userid}`).then(res=>{
            settrain(res.data)
        })
    }
    useEffect(()=>{
        getuser()
        getticket()
    },[])
    return <><div class='login-container_profile'>
        <Link class='top-right-link' onClick={logout}>Logout</Link>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Your bookings {user?.Username}</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            {train.map((tr) => <b><tr key={tr._id} value={tr._id}>
                {tr.PassengerName} booked tickets for {tr.Members} Members in {tr?.Train_id?.TrainName} on {tr?.Train_id?.DateAvaliable} at {tr?.Train_id?.JourneyTime}
            </tr></b>)}
            </tr>
            </tbody>
        </table>
        </div></>    
}