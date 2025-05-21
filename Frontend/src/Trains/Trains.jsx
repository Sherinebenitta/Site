import { useEffect, useState } from "react"
import axiosinstance from '../axiosInstance/axiosinstance'
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
    }

    return<div>
        <form onSubmit={onsubmit}>
            <label>Train</label>
            <input placeholder="Train name" value={TrainName} onChange={e=>{settrain(e.target.value)}} /><br/><br/>
            <label>Code</label>
            <input type="Number" value={TrainCode} onChange={e=>{setcode(e.target.value)}} placeholder="Train code" /><br/><br/>
            <label>Date</label>
            <input type="date" value={DateAvaliable} onChange={e=>{setdate(e.target.value)}} /><br/><br/>
            <label>Time</label>
            <input type="time" onChange={e=>{settime(e.target.value)}} value={JourneyTime} /><br/><br/>
            <select onChange={e=>{setrouteid(e.target.value)}} value={Routeid}>
            <option>Select Route</option>
            {
                Routesway.map((way)=><option key={way?._id} value={way?._id}>{way.Routeway}</option>)
            }
            </select><br/><br/>
            <select onChange={e=>{setseatid(e.target.value)}} value={seatid}>
            <option>Select Seat</option>
            {
                Seats.map((seat)=><option key={seat?._id} value={seat?._id}>{seat.Seat_class}</option>)
            }
            </select><br/><br/>
            <select onChange={e=>{setstationid(e.target.value)}} value={stationid}>
            <option>Select Station</option>
            {
                station.map((station)=><option key={station?._id} value={station?._id}>{station.Name}</option>)
            }
            </select><br/><br/>
            <button type="submit">Add Train</button>
        </form>
    </div>
}