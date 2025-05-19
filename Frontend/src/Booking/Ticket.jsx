import { Link } from "react-router-dom";

export default function Ticket(){
    return <div>
        Ticket trains bookings done here
        <Link to={'/Profile'} className="float-left">MyAccount</Link>
    </div>
}