import { useNavigate } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useEffect, useState } from "react";

export default function Profile(){
    const navigate = useNavigate();
    const userid = localStorage.getItem('ID');
    const [user,setuser] = useState([])
    const logout = ()=>{
        localStorage.clear();
        navigate('/')
        
    }

    const getuser = ()=>{
        axiosinstance.get(`http://localhost:8000/getuser/${userid}`).then(res=>{
            setuser(res.data)
        })
    }
    useEffect(()=>{
        getuser()
    },[])
    return <div>
        <b><p className="text-center">Welcome {user.Username}</p></b>        
        <button onClick={logout} className="pull-left">Logout</button>
    </div>
}