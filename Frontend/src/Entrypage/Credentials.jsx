import { Link } from "react-router-dom";
import background from './download.jpeg'

export default function Credentials(){
    return<div
      className="container-fluid p-0"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
        <Link to={'/User'}>User</Link><br/><br/>
        <Link to={'/Admin'}>Admin</Link>
    
    </div>
}