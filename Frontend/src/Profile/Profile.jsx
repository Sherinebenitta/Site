import { useNavigate } from "react-router-dom";

export default function Profile(){
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/')
        
    }
    return <div>
        profile
        <button onClick={logout}>Logout</button>
    </div>
}