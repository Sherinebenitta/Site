import { Link } from "react-router-dom";

export default function Login(){
    return <>
    <input placeholder="Enter username"/><br/><br/>
    <input placeholder="Enter password" type="password"/><br/><br/>
    <button type="submit">Sign-Up</button>
    <Link to={'/Usersignin'}>User</Link>
    </>
}