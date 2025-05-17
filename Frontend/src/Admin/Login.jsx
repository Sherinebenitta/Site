import { Link } from "react-router-dom";

export default function Admin(){
    return <>
    <form>
        <input type="Number" placeholder="Enter AdminId" /><br/><br/>
        <input type="password" placeholder="Enter Password"/><br/><br/>
        <button type="submit">Login</button><br/>
        <Link to={'/Adminsign'}></Link>
    </form>
    </>
}