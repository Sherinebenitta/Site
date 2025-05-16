import { Link } from "react-router-dom"
export default function User(){
    return <>
    <form>
        <input placeholder="Enter username"/><br/><br/>
        <input placeholder="Enter password" type="password"/><br/><br/>
        <button type="submit">Login</button>
        <p>New User</p>
        <Link to={'/Usersignin'}>Sign-Up</Link>
    </form>
    </>
}