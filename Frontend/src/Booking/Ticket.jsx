import { Link } from "react-router-dom";

export default function Ticket(){
    return <div>
        Ticket
        <Link to={'/User'}>Home</Link>
    </div>
}