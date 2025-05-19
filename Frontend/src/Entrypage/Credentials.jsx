import { Link } from "react-router-dom";

export default function Credentials(){
    return<><div style={{
        backgroundImage: 'url(/new.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
      }} className="text-center"
    ><div className="p-4">
        <Link to={'/User'}><button className="btn btn-primary btn-lg btn-block">USER</button></Link><br/><br/>
        <Link to={'/Admin'}><button className="btn btn-danger btn-lg btn-block">ADMIN</button></Link>
    </div>
    </div>
    </>
}