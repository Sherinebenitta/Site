import { useNavigate } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useEffect, useState } from "react";

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
    return <div>
        <b><p className="text-center">Welcome {user.Username}</p></b>  
        <div className="container-fluid"> 
        <div className="row">  
            <div className="col-12 text-end">  
        <button onClick={logout} className="pull-left">Logout</button>
        </div>
    </div>
    </div>  
    <ul>
            {
                train.map((tr)=><li key={tr._id} value={tr._id}>
                    {tr.PassengerName}
                </li>)
            }
        </ul>    
        
    </div>
}