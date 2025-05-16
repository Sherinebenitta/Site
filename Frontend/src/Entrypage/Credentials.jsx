import { Link } from "react-router-dom";

export default function Credentials(){
    return<div>
        <Link to={'/User'}>User</Link><br/><br/>
        <Link to={'/Admin'}>Admin</Link>
    
    </div>
}