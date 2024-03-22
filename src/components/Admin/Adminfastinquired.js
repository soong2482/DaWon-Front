import DawonLogo from "../../assets/dawonlogo.png";
import { done,remove} from '../../services/AdminfastinquiredJS.js'
import React, { useState,useEffect } from 'react';
import "../../styles/adminfastinquired.css"
import axios from 'axios';
function Adminfastinquired(){
    const [FastInquired,setFastInquired] = useState([]);
    useEffect(() =>{
      const fetchDataInquired = async () => {
        try {
          const response = await axios.get('DaWonCar/Admin/FastInquired/List'); // CarlistJS 함수에서 listCar 함수 호출
          setFastInquired(response.data); // 받은 데이터를 상태로 설정
          console.log(response.data);
        } catch (error) {
          console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
      };
      fetchDataInquired(); // 데이터 가져오는 함수 호출
      
      },[]);
    return(
        <div className="fastinquired_container">
        <div className="Admin_FastInquired_top">
                <img src={DawonLogo}/>
                <div className="text">빠른 문의 관리</div>
        </div>
        <div className="Admin_FastInquired_middle">
            <table className="Admin_FastInquired_table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Brand</th>
                    <th>Car</th>
                    <th>Auth</th>
                    <th>success</th>
                    <th>Date</th>
                    <th>완료</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {FastInquired.map((fastinquired, index) => (
                      <tr key={index} style={{ backgroundColor: fastinquired.customerFSuccess ? '#DFE3FF' : 'white' }}>
                        <td>{fastinquired.customerFId}</td>
                        <td>{fastinquired.customerFName}</td>
                        <td>{fastinquired.customerFPhone}</td>
                        <td>{fastinquired.customerFBrand}</td>
                        <td>{fastinquired.customerFCarSort}</td>
                        <td>{fastinquired.customerFAuth ? "O" : "X"}</td>
                        <td>{fastinquired.customerFSuccess ? "O" : "X"}</td>
                        <td>{fastinquired.customerFDate}</td>
                        <td><button className="Admin_FastInquired_success" id={fastinquired.customerFId}
                         onClick={() => done(fastinquired.customerFId)}>완료</button></td>
                        <td><button className="Admin_FastInquired_delete" id={fastinquired.customerFId}
                         onClick={() => remove(fastinquired.customerFId)}>삭제</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}
export default Adminfastinquired;