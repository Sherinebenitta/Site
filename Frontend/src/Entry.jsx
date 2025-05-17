import { Route,Routes } from "react-router-dom";
import Credentials from "./Entrypage/Credentials";
import User from "./User/Signup";
import Admin from "./Admin/Login";
import Login from "./User/Login";
import Adminsign from "./Admin/Signin";
import Ticket from "./Booking/Ticket";

export default function Entry(){
    return<>
    <Routes>
        <Route path="/" element={<Credentials/>}/>
        <Route path="/User" element={<User/>} />
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Usersignin" element={<Login/>} />
        <Route path="/Adminsign" element={<Adminsign/>} />
        <Route path="/Ticket" element={<Ticket/>} />
    </Routes>
    </>
}