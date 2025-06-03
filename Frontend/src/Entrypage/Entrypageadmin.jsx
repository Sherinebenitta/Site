import {Link,useNavigate} from 'react-router-dom'
import axiosinstance from '../axiosInstance/axiosinstance'
import '../../src/style/entry.css'
import '../../src/style/LoginPage.css'
import { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet,pdf } from '@react-pdf/renderer';

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

export default function Entryadmin(){
    const navigate = useNavigate()
    const [adminget,setadmin] = useState([])
    const [train,settrain] = useState([])
    const [ticket,setticket] = useState([])
    const admin = localStorage.getItem('Admin_ID')

    const logout = ()=>{
        localStorage.clear();      
        navigate('/')
    }
    const getadmin = ()=>{
        axiosinstance.get(`http://localhost:8000/getadmin/${admin}`).then(res=>{
            setadmin(res.data)
        })
    }
    const gettrain = ()=>{
        axiosinstance.get('http://localhost:8000/gettrain').then(res=>{
            settrain(res.data)
        })
    }
    const getticket = ()=>{
        axiosinstance.get('http://localhost:8000/getticket').then(res=>{
            setticket(res.data)
        })
    }
    const MyPdfWithTable = ({data}) => (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={{textAlign:'center'}}>Train Booked Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}><Text style={styles.tableCell}>Passenger Name</Text></View>
              <View style={styles.tableColHeader}><Text style={styles.tableCell}>TrainName</Text></View>
              <View style={styles.tableColHeader}><Text style={styles.tableCell}>Date</Text></View>
              <View style={styles.tableColHeader}><Text style={styles.tableCell}>Time</Text></View>
            </View>
            <view>
            {data.map((item, idx) =><View style={styles.tableRow} key={idx}>
                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.PassengerName}</Text></View>
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
        link.download = 'Bookingdetails.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    

    useEffect(()=>{
        getadmin();
        gettrain();
        getticket();
    },[])

    return(
        <div class='login-container_adminin'>
        <div class="sidebar">  
        <h4 style={{color:'white'}}>MENU</h4>
        <Link to={'/Train'}>TRAIN</Link>
        <Link to={'/Routes'}>ROUTE</Link>
        <Link to={'/Seat'}>SEAT</Link>
        <Link  to={'/Station'}>STATION</Link>                               
        <button onClick={logout} class="realtime-button">Logout</button><br/><br/>
        <button class='realtime-button' onClick={()=>{GeneratePDF(ticket)}}>Download</button>
        </div>
        <div className='ml-4'>
            <h4 className='text-center'>WELCOME ADMIN {adminget?.AdminId} </h4>
            <table class="styled-table">
        <thead>
            <tr>
                <th>TrainName</th>
                <th>TrainCode</th>
                <th>Date</th>
                <th>Time</th>
                <th>Route</th>
                <th>Station</th>
            </tr>
        </thead>
        <tbody>
            {train.map((tr) =><tr key={tr._id} value={tr._id}>
                <td>{tr.TrainName}</td>
                <td>{tr.TrainCode}</td>
                <td>{tr.DateAvaliable}</td>
                <td>{tr.JourneyTime}</td>
                <td>{tr?.Route_id?.Routeway}</td>
                <td>{tr?.Station_id?.Name}</td>
            </tr>)}
            </tbody>
        </table>
        </div>
</div>
    )
}