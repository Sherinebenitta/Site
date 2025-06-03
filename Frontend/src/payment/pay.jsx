import { useState } from "react"
import { useNavigate } from "react-router-dom";
import '../../src/style/LoginPage.css'

export default function Payment(){
    const [calculate,setcalculate] = useState()
    const navigate = useNavigate()
    
    const onsubmit = (e)=>{
        navigate('/Profile')
        setcalculate('');
        Swal.fire({
            title: "Payment Successful",
            icon: "success"
        });
    }
    return<div class="login-container_pay">
        <div class="login-form">
        <form onSubmit={onsubmit}>
            <label>No of Members</label>
            <input type="Number" onChange={e=>{const val = e.target.value; if (/^\d{0,2}$/.test(val)) {setcalculate(val);}}} value={calculate} required/><br/><br/>
            <label>Total Amount</label>
            <input type="Number" value={calculate*240}/><br/><br/>
            <button>PAY</button>

        </form>   
        </div>
            
        
    </div>
}