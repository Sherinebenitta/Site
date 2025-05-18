import {Link,useNavigate} from 'react-router-dom'

export default function Entryadmin(){
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.clear();      
        navigate('/')

    }
    return <div>
        <Link to={'/Train'}>Train</Link><br/><br/>
        <Link to={'/Routes'}>Route</Link><br/><br/>
        <Link to={'/Seat'}>Seat</Link><br/><br/>  
        <Link  to={'/Station'}>Station</Link><br/><br/>                                   
        <button onClick={logout}>Logout</button>
    </div>
}