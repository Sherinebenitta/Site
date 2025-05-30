import { useEffect, useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/LoginPage.css'
import { useNavigate } from 'react-router-dom'

export default function Trains(){
    const [TrainName,settrain] = useState('');
    const [TrainCode,setcode] = useState();
    const [DateAvaliable,setdate] = useState();
    const [JourneyTime,settime] = useState()
    const [Routesway,setroute] = useState([])
    const [Seats,setseat] = useState([])
    const [station,setstation] = useState([])
    const [Routeid,setrouteid] = useState();
    const [seatid,setseatid] = useState();
    const [stationid,setstationid] = useState()
    const navigate = useNavigate()

    const posttrain = ()=>{
        axiosinstance.post('http://localhost:8000/train',{TrainName,TrainCode,DateAvaliable,JourneyTime,Route_id:Routeid,Seat_id:seatid,Station_id:stationid}).then(res=>{

        })
    }
    const getroute = ()=>{
        axiosinstance.get('http://localhost:8000/getroute').then(res=>{
            setroute(res.data)
        })
    }

    const getseat = ()=>{
        axiosinstance.get('http://localhost:8000/getseat').then(res=>{
            setseat(res.data)
        })
    }

    const getstation = ()=>{
        axiosinstance.get('http://localhost:8000/getstation').then(res=>{
            setstation(res.data)
        })
    }
    useEffect(()=>{
        getroute();
        getseat();
        getstation();
    },[])

    const onsubmit = e=>{
        e.preventDefault(); 
        posttrain();  
        settrain('')  
        setcode('')
        setdate('')
        settime('')
        setrouteid('')
        setseatid('')
        setstationid('')
        navigate('/Entryadmin')
    }

    return<div class="login-container_train">
        <div class="login-form">
        <form onSubmit={onsubmit}>
            <label>Train</label>
            <input placeholder="Train name" value={TrainName} onChange={e=>{settrain(e.target.value)}} required /><br/><br/>
            <label>Code</label>
            <input type="Number" value={TrainCode} onChange={e=>{const val = e.target.value; if (/^\d{0,3}$/.test(val)) {setcode(val);}}} min={'0'} placeholder="Train code" required /><br/><br/>
            <label>Date</label>
            <input type="date" value={DateAvaliable} onChange={e=>{setdate(e.target.value)}} required /><br/><br/>
            <label>Time</label>
            <input type="time" onChange={e=>{settime(e.target.value)}} value={JourneyTime} required /><br/><br/>
            <label>Select Route</label>
            <select onChange={e=>{setrouteid(e.target.value)}} value={Routeid}>
            <option>Select</option>
            {
                Routesway.map((way)=><option key={way?._id} value={way?._id}>{way.Routeway}</option>)
            }
            </select><br/><br/>
            <label>Select Seat</label>
            <select onChange={e=>{setseatid(e.target.value)}} value={seatid} required>
            <option>Select</option>
            {
                Seats.map((seat)=><option key={seat?._id} value={seat?._id}>{seat.Seat_class}</option>)
            }
            </select><br/><br/>
            <label>Select Station</label>
            <select onChange={e=>{setstationid(e.target.value)}} value={stationid} required>
            <option>Select</option>
            {
                station.map((station)=><option key={station?._id} value={station?._id}>{station.Name} at {station.Location}</option>)
            }
            </select><br/><br/>
            <button type="submit">Add Train</button>
        </form>
        </div>
    </div>
}