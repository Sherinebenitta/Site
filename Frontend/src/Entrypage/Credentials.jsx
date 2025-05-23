import { Link } from "react-router-dom";
import '../../src/style/LoginPage.css'

export default function Credentials(){
    return<><div style={{
        backgroundImage: 'url(/e.avif)',
        backgroundSize: 'cover',
        height: '100vh',
      }} className="text-center"
    ><div className="p-4">
        <Link to={'/User'}><button class="realtime-button">USER</button></Link><br/><br/>
        <Link to={'/Admin'}><button class="realtime-button">ADMIN</button></Link>
    </div>
    </div>
    </>
}