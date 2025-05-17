import { Navigate, Outlet, Route,Routes } from "react-router-dom";
import Credentials from "./Entrypage/Credentials";
import User from "./User/Loginuser";
import Admin from "./Admin/Login";
import Login from "./User/signin";
import Adminsign from "./Admin/Signin";
import Ticket from "./Booking/Ticket";
import { useNavigate } from "react-router-dom";
import axiosinstance from "./axiosInstance/axiosinstance";
import { useEffect } from "react";
import Profile from "./Profile/Profile";

export default function Entry(){
    const navigate = useNavigate();
    const checkpoint = async()=>{
        let token = await localStorage.getItem('token');
        let id = await  localStorage.getItem('ID')
        if(token && id){
            axiosinstance.defaults.headers['token'] = token;
            axiosinstance.defaults.headers['User'] = User?._id
            navigate('/Ticket')
        }
    }
    const Check = ()=>{
        let token = localStorage.getItem('token');
        return token && id ? <Outlet/> : <Navigate to={'/'}/>
    }

    useEffect(()=>{
        checkpoint();
    },[])
    return<>
    <Routes>
        <Route path="/" element={<Credentials/>}/>
        <Route path="/User" element={<User/>} />
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Usersignin" element={<Login/>} />
        <Route path="/Adminsign" element={<Adminsign/>} />
        <Route element={<Check/>}/>
        <Route path="/Ticket" element={<Ticket/>} />
        <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    </>
}