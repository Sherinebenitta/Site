import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosinstance from '../axiosInstance/axiosinstance'
import { useEffect } from "react";
import '../../src/style/LoginPage.css'

export default function Ticket(){
    const [PassengerName,setname] = useState('');
    const [Age,setage] = useState();
    const [Members,setmember] = useState();
    const [Train_id,settrain_id] = useState()
    const [Trainlist,settrain] = useState([]);
    const [Route,setroute] = useState([])
    const [routeid,setrouteid] = useState()
    const navigate = useNavigate()
    const User_id = localStorage.getItem('ID')


    const postticket = ()=>{
        axiosinstance.post('http://localhost:8000/book',{PassengerName,Age,Members,Train_id,User_id}).then(res=>{

        })
    }

    const gettrain = (routeid)=>{
        axiosinstance.get(`http://localhost:8000/gettrain/${routeid}`).then(res=>{
            settrain(res.data)   
        })
    }

    const getroute = ()=>{
        axiosinstance.get('http://localhost:8000/getroute').then(res=>{
            setroute(res.data)
        })
    }

    const onsubmit = e=>{
        postticket();
        navigate('/pay')

    }

    useEffect(()=>{
        getroute()
    },[])
    
    return<> 
    <div class="login-container_booking">
        <div class="login-form">
            <Link to={'/Profile'} class='top-right-link'>MyAccount</Link>
        <form onSubmit={onsubmit}>
        <label>Passenger Name</label>
        <input placeholder="Enter name" onChange={e=>{setname(e.target.value)}} value={PassengerName} /><br/><br/>
        <label>Age</label>
        <input type="Number" placeholder="Enter Age" onChange={e=>{setage(e.target.value)}} value={Age}/><br/><br/>
        <label>No of Members</label>
        <input type="Number" placeholder="Enter No" onChange={e=>{setmember(e.target.value)}} value={Members}/><br/><br/>
        <label>Select Route</label>
        <select onChange={e=>{

            setrouteid(e.target.value)
            gettrain(e.target.value)
            }} value={routeid}>
            <option>Select Route</option>
            {
                Route.map((rot)=><option key={rot._id} value={rot._id}>
                    {rot.Routeway}
                </option>)
            }
        </select><br/><br/>
        <label>Date of Journey</label>
        <select onChange={e=>{settrain_id(e.target.value)}} value={Train_id}>
            <option>Select Train</option>
            {
                Trainlist.map((trn)=><option key={trn?._id} value={trn?._id}>
                    {trn.TrainName} is avaliable on {trn.DateAvaliable} at {trn.JourneyTime}
                </option>)
            }
        </select><br/><br/>

        <p></p>        
        <button type="submit">Book Ticket</button>
    </form>
    </div>
    </div>
    </>
}