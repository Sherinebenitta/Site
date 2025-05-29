import { Link, useNavigate } from "react-router-dom";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useEffect, useState } from "react";
import '../../src/style/LoginPage.css'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default function Profile(){
    const navigate = useNavigate();
    const userid = localStorage.getItem('ID');
    const [user,setuser] = useState([])
    const [train,settrain] = useState([])
    const logout = ()=>{
        localStorage.clear();
        navigate('/')
    }

    const getuser = ()=>{
        axiosinstance.get(`http://localhost:8000/getuser/${userid}`).then(res=>{
            setuser(res.data)
        })
    }

    const getticket = ()=>{
        axiosinstance.get(`http://localhost:8000/getbooking/${userid}`).then(res=>{
            settrain(res.data)
        })
    }

    
const MyDocument = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text>{content}</Text>
    </Page>
  </Document>
);

const GeneratePDF = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
 
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'example.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    useEffect(()=>{
        getuser()
        getticket()
    },[])
    return <><div class='login-container_profile'>
        <Link class='top-right-link' onClick={logout}>Logout</Link>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Username</th>
                <th>Members</th>
                <th>TrainName</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {train.map((tr) =><tr key={tr._id} value={tr._id}>
                <td>{tr.PassengerName}</td>
                <td>{tr.Members}</td>
                <td>{tr?.Train_id?.TrainName}</td>
                <td>{tr?.Train_id?.DateAvaliable}</td>
                <td>{tr?.Train_id?.JourneyTime}</td>
            </tr>)}
            </tbody>
        </table>
        </div>  
        { <button className="btn btn-primary" onClick={()=>ReactPDF.render(<GeneratePDF/>, `${__dirname}/example.pdf`)}>Download PDF</button> }
        </>    
}


