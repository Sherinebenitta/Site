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
import Trains from "./Trains/Trains";

export default function Entry(){
    const navigate = useNavigate();
    const checkpoint = async()=>{
        let User = await localStorage.getItem('User');
        let id = await  localStorage.getItem('ID');
        let Admin = await localStorage.getItem('Admin');
        let adminid = await localStorage.getItem('ID')
        if(User && id){
            axiosinstance.defaults.headers['token'] = token; 
            axiosinstance.defaults.headers['User'] = User?._id
            navigate('/Ticket')
        }else if(Admin && adminid){
            axiosinstance.defaults.headers['createtoken'] = Admin
            axiosinstance.defaults.headers['Admin'] = Admin?._id
            navigate('/Train')
        }           
    }
    const Check = ()=>{
        let token = localStorage.getItem('User');
        let id = localStorage.getItem('ID')
        return token && id ? <Outlet/> : <Navigate to={'/'}/>
    }
    const CheckAdmin = ()=>{
        let token = localStorage.getItem('Admin');
        let id = localStorage.getItem('ID')
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
        <Route element={<Check/>}>
        <Route path="/Ticket" element={<Ticket/>} />
        <Route path="/Profile" element={<Profile/>}/>
        </Route>
        <Route element={<CheckAdmin/>}>
        <Route path="/Train" element={<Trains/>}/>
        </Route>
        
    </Routes>
    </>
}