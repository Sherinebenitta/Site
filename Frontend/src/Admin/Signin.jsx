import { Link } from "react-router-dom";

export default function Adminsign(){
    return <>
    <form>
        <input type="Number" placeholder="Enter AdminId" /><br/><br/>
        <input type="password" placeholder="Enter Password"/><br/><br/>
        <button type="submit">Sign-Up</button>
        <Link to={'/Admin'}></Link>
    </form>
    </>
}