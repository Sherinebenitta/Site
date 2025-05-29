import {Link,useNavigate} from 'react-router-dom'
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/entry.css'
import '../../src/style/LoginPage.css'
import { useEffect, useState } from 'react'


export default function Entryadmin(){
    const navigate = useNavigate()
    const [adminget,setadmin] = useState([])
    const [train,settrain] = useState([])
    const admin = localStorage.getItem('Admin_ID')
    const logout = ()=>{
        localStorage.clear();      
        navigate('/')
    }
    const getadmin = ()=>{
        axiosinstance.get(`http://localhost:8000/getadmin/${admin}`).then(res=>{
            setadmin(res.data)
        })
    }
    const gettrain = ()=>{
        axiosinstance.get('http://localhost:8000/gettrain').then(res=>{
            settrain(res.data)
        })
    }

    useEffect(()=>{
        getadmin();
        gettrain();
    },[])

    return(
        <div class='login-container_adminin'>
        <div class="sidebar">  
        <h4 style={{color:'white'}}>MENU</h4>
        <Link to={'/Train'}>TRAIN</Link>
        <Link to={'/Routes'}>ROUTE</Link>
        <Link to={'/Seat'}>SEAT</Link>
        <Link  to={'/Station'}>STATION</Link>                               
        <button onClick={logout} class="realtime-button">LOGOUT</button>
        </div>
        <div className='ml-4'>
            <h4 className='text-center'>WELCOME ADMIN {adminget?.AdminId} </h4>
            <table class="styled-table">
        <thead>
            <tr>
                <th>TrainName</th>
                <th>TrainCode</th>
                <th>Date</th>
                <th>Time</th>
                <th>Route</th>
                <th>Station</th>
            </tr>
        </thead>
        <tbody>
            {train.map((tr) =><tr key={tr._id} value={tr._id}>
                <td>{tr.TrainName}</td>
                <td>{tr.TrainCode}</td>
                <td>{tr.DateAvaliable}</td>
                <td>{tr.JourneyTime}</td>
                <td>{tr?.Route_id?.Routeway}</td>
                <td>{tr?.Station_id?.Name}</td>
            </tr>)}
            </tbody>
        </table>
        </div>
</div>
    )
}