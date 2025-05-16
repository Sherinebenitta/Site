import { Route,Routes } from "react-router-dom";
import Credentials from "./Entrypage/Credentials";
import User from "./User/User";
import Admin from "./Admin/Admin";

export default function Entry(){
    return<>
    <Routes>
        <Route path="/" element={<Credentials/>}/>
        <Route path="/User" element={<User/>} />
        <Route path="/Admin" element={<Admin/>}/>
    </Routes>
    </>
}