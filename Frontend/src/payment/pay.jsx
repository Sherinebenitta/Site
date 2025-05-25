import { useState } from "react"
import { useNavigate } from "react-router-dom";
import '../../src/style/LoginPage.css'

export default function Payment(){
    const [calculate,setcalculate] = useState()
    const navigate = useNavigate()
    
    const onsubmit = (e)=>{
        setcalculate('');
        Swal.fire({
            title: "Payment Successful",
            icon: "success"
        });
        navigate('/Profile')
    }
    return<div class="login-container_pay">
        <div class="login-form">
        <form onSubmit={onsubmit}>
            <label>No of Members</label>
            <input type="Number" onChange={e=>{setcalculate(e.target.value)}} value={calculate} required/><br/><br/>
            <label>Total Amount</label>
            <input type="Number" value={calculate*240}/><br/><br/>
            <button>PAY</button>

        </form>   
        </div>
            
        
    </div>
}