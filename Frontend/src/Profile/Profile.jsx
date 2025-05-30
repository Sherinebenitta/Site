import { data, Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import axiosinstance from "../axiosInstance/axiosinstance";
import { useEffect, useState } from "react";
import '../../src/style/LoginPage.css'
import { Page, Text, View, Document, StyleSheet,pdf } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#eee',
    padding: 5,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
  },
  tableCell: {
    fontSize: 10,
  },
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

    
const MyPdfWithTable = ({data}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{textAlign:'center'}}>{user.Username}</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}><Text style={styles.tableCell}>Username</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCell}>Members</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCell}>TrainName</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCell}>Date</Text></View>
          <View style={styles.tableColHeader}><Text style={styles.tableCell}>Time</Text></View>
        </View>
        <view>
        {data.map((item, idx) =><View style={styles.tableRow} key={idx}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{item.PassengerName}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{item.Members}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{item?.Train_id?.TrainName}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{item?.Train_id?.DateAvaliable}</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>{item?.Train_id?.JourneyTime}</Text></View>
          </View>
)}
</view>
      </View>
    </Page>
  </Document>
);
const GeneratePDF = async ( data ) => {
    const blob = await pdf(<MyPdfWithTable data={data}/>).toBlob();
 
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'TrainDetails.pdf';
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
            {train?.map((tr) =><tr key={tr._id} value={tr._id}>
                <td>{tr.PassengerName}</td>
                <td>{tr.Members}</td>
                <td>{tr?.Train_id?.TrainName}</td>
                <td>{tr?.Train_id?.DateAvaliable}</td>
                <td>{tr?.Train_id?.JourneyTime}</td>
            </tr>)}
            </tbody>
        </table>
        <button className="btn btn-primary text-center" onClick={()=>{GeneratePDF(train)}}>Download PDF</button>
        </div>  
        
        </>    
}


