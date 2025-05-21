import { useState } from "react";
import { Link } from "react-router-dom";
import axiosinstance from '../axiosInstance/axiosinstance'

export default function Ticket(){
    const [PassengerName,setname] = useState('');
    const [Age,setage] = useState();
    const [Members,setmember] = useState();
    const [Date,setdate] = useState()
    const [Time,settime] = useState();

    const postticket = ()=>{
        axiosinstance.post('http://localhost:8000/book',{}).then(res=>{
            
        })
    }

    const onsubmit = e=>{
        console.log(PassengerName)
    }
    
    return<> 
    <div className="container-fluid"> 
        <div className="row">  
            <div className="col-12 text-end">  
        <Link to={'/Profile'}>MyAccount</Link>
        </div>
    </div>
    </div>
    <form onSubmit={onsubmit}>
        <label>Passenger Name</label>
        <input placeholder="Enter name" onChange={e=>{setname(e.target.value)}} value={PassengerName} /><br/><br/>
        <label>Age</label>
        <input type="Number" placeholder="Enter Age" onChange={e=>{setage(e.target.value)}} value={Age}/><br/><br/>
        <label>No of Members</label>
        <input type="Number" placeholder="Enter No" onChange={e=>{setmember(e.target.value)}} value={Members}/><br/><br/>
        <label>Date of Journey</label>
        <input type="date" onChange={e=>{setdate(e.target.value)}} value={Date}/><br/><br/>
        <label>Journey Time</label>
        <input type="time" onChange={e=>{settime(e.target.value)}} value={Time}/><br/><br/>
        <button type="submit">Book Ticket</button>
    </form>
    </>
}