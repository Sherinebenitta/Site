import {Link,useNavigate} from 'react-router-dom'
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/LoginPage.css'
import { useEffect, useState } from 'react'


export default function Entryadmin(){
    const navigate = useNavigate()
    const [adminget,setadmin] = useState([])
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

    useEffect(()=>{
        getadmin();
    },[])
    return <div>
        <div class="sidebar">
        <h4 style={{color:'white'}}>MENU</h4>
        <Link to={'/Train'}>TRAIN</Link>
        <Link to={'/Routes'}>ROUTE</Link>
        <Link to={'/Seat'}>SEAT</Link>
        <Link  to={'/Station'}>STATION</Link>                               
        <button onClick={logout} class="realtime-button">LOGOUT</button>
        </div>
        <div class="content mt-5 pt-3">
            <div className="image-section_admin"></div>
            <h4 className='text-center'>WELCOME ADMIN {adminget?.AdminId} </h4>
        </div>
</div>
}