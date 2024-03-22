import React, { useState,useEffect } from 'react';
import DawonLogo from "../../assets/dawonlogo.png";
import { done,remove,open,close} from '../../services/AdmininquiredJS.js'
import "../../styles/admininquired.css";
import axios from 'axios';
function Admininquired(){
    const [Inquired,setInquired] = useState([]);
    useEffect(() =>{
        const fetchDataInquired = async () => {
          try {
            const response = await axios.get('DaWonCar/Admin/Inquired/List'); // CarlistJS 함수에서 listCar 함수 호출
            setInquired(response.data); // 받은 데이터를 상태로 설정
            console.log(response.data);
          } catch (error) {
            console.error('데이터를 불러오는 도중 오류 발생:', error);
          }
        };
        fetchDataInquired(); // 데이터 가져오는 함수 호출
        
        },[]);
        return(
            <div className="inquired_container">
                <div className="inquired_container_top">
                    <img src={DawonLogo}/>
                    <div className="text">문의 관리</div>
                </div>
                <div className="inquired_container_middle">
                    <table className="inquired_container_table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Choice</th>
                            <th>Region</th>
                            <th>Car</th>
                            <th>Auth</th>
                            <th>Success</th>
                            <th>Date</th>
                            <th>내용 확인</th>
                            <th>완료</th>
                            <th>삭제</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Inquired.map((inquired,index) => (
                            <tr key={index} style={{ backgroundColor: inquired.customerSuccess ? '#DFE3FF' : 'white' }}>
                                <td>{inquired.customerId}</td>
                                <td>{inquired.customerName}</td>
                                <td>{inquired.customerPhone}</td>
                                <td>{inquired.customerChoice}</td>
                                <td>{inquired.customerRegion}</td>
                                <td>{inquired.customerCarSort}</td>
                                <td>{inquired.customerAuth ? "O" : "X"}</td>
                                <td>{inquired.customerSuccess ? "O" : "X"}</td>
                                <td>{inquired.customerDate}</td>
                                <td>
                                    <button field="inquired_container_pop_info_detail" onClick={()=> open(inquired.customerId)} className='inquired_container_btn_open'>내용 확인</button>
                                    <div id={"inquired_container_pop_sort"+inquired.customerId} className="inquired_container_pop_wrap" style={{ display: 'none' }}>

                                        <div className="inquired_container_pop_inner">
                                            <p>{inquired.customerText}</p>
                                            <button type="button" onClick={()=> close(inquired.customerId)}className="inquired_container_btn_close">닫기</button>
                                        </div>
                                    </div>
                                </td>
                                <td><button className="inquired_container_success" 
                                onClick={() => done(inquired.customerId)}>완료</button></td>
                                <td><button className="inquired_container_delete" 
                                onClick={() => remove(inquired.customerId)}>삭제</button></td>
                                
                            </tr>
                        ))}


                        </tbody>
                    </table>
                </div>
          </div>
        )
}
export default Admininquired;