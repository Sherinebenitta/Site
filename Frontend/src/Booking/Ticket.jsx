import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosinstance from '../axiosInstance/axiosinstance'
import { useEffect } from "react";
import '../../src/style/LoginPage.css'

export default function Ticket(){
    const [PassengerName,setname] = useState('');
    const [Age,setage] = useState();
    const [Train_id,settrain_id] = useState()
    const [Trainlist,settrain] = useState([]);
    const [Route,setroute] = useState([])
    const [routeid,setrouteid] = useState()
    const [count, setCount] = useState();
    const [Members, setMembers] = useState([]);
    const [Seat_id,setseat_id] = useState();
    const [seat,setseat] = useState([])
    const navigate = useNavigate()
    const User_id = localStorage.getItem('ID')


    const postticket = ()=>{
        axiosinstance.post('http://localhost:8000/book',{PassengerName,Age,Members,Train_id,User_id,Seat_id}).then(res=>{

        })
    }

    const gettrain = (routeid)=>{
        axiosinstance.get(`http://localhost:8000/gettrain/${routeid}`).then(res=>{
            settrain(res.data)   
        })
    }
    const getseat = (Trainid)=>{
        axiosinstance.get(`http://localhost:8000/getseat/${Trainid}`).then(res=>{
            setseat(res.data)   
            console.log(res.data)
        })
    }
    const getroute = ()=>{
        axiosinstance.get('http://localhost:8000/getroute').then(res=>{
            setroute(res.data)
        })
    }
    const handleCountChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setCount(value);
        const updatedMembers = [...Members];
        if (value > updatedMembers.length) {
          while (updatedMembers.length < value) {
            updatedMembers.push('');
          }
        } else {
          updatedMembers.length = value;
        }
        setMembers(updatedMembers);
      };
    
      const handleMemberChange = (index, e) => {
        const updated = [...Members];
        updated[index] = e.target.value;
        setMembers(updated);
      };
    
      

    const onsubmit = e=>{
        postticket();
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
        <input placeholder="Enter name" onChange={e=>{setname(e.target.value)}} value={PassengerName} required /><br/><br/>
        <label>Age</label>
        <input type="Number" placeholder="Enter Age" onChange={e=>{const val = e.target.value; if (/^\d{0,2}$/.test(val)) {setage(val);}}} min={'0'} value={Age} required/><br/><br/>
        <label>No of Members</label>
        <input type="number" min={'0'} value={count} onChange={handleCountChange} placeholder="Enter member"/><br/><br/>
        {Members.map((member, index) => (
        <div key={index}>
          <label>Member {index + 1}:</label>
          <input
            type="text"
            value={member}
            placeholder="Passenger Name"
            onChange={(e) => handleMemberChange(index, e)}
          />
        </div>
      ))}
        <label>Select Route</label>
        <select onChange={e=>{

            setrouteid(e.target.value)
            gettrain(e.target.value)
            }} value={routeid} required>
            <option>Select Route</option>
            {
                Route.map((rot)=><option key={rot._id} value={rot._id}>
                    {rot.Routeway}
                </option>)
            }
        </select><br/><br/>
        <label>Date of Journey</label>
        <select onChange={e=>{settrain_id(e.target.value);getseat(e.target.value)}}  value={Train_id} required>
            <option>Select Train</option>
            {
                Trainlist.map((trn)=><option key={trn?._id} value={trn?._id}>
                    {trn.TrainName} is avaliable on {trn.DateAvaliable} at {trn.JourneyTime}
                </option>)
            }
        </select><br/><br/>   
        <label>Seat Availability</label>
        <select onChange={e=>{setseat_id(e.target.value)}}  value={Seat_id} required>
            <option>Select Seat</option>
            {
                seat.map((tn)=><option key={tn?._id} value={tn?._id}>
                    {tn?.Seat_id?.Seat_class}
                </option>)
            }
        </select><br/><br/>         
        <p></p>        
        {count > 0 && <Link to={'/pay'}><button type="submit">Book Ticket</button></Link>}
    </form>
    </div>
    </div>
    </>
}