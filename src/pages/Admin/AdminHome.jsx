import DawonLogo from "../../assets/dawonlogo.png";
import React, { useState,useEffect } from 'react';
import "../../styles/adminpage.css";
import AdminFastinquired from "../../components/Admin/Adminfastinquired";
import AdminInquired from "../../components/Admin/Admininquired";
import AdminBanner from "../../components/Admin/Adminbanner";
import AdminCustomer from "../../components/Admin/AdminCustomer";
import AdminCar from "../../components/Admin/AdminCar";
import {location} from "../../services/AdminHomeJs";
function AdminHome(){
    const [page,setPage] =useState(null);
    useEffect(() => {
        // URL의 쿼리 문자열을 추출합니다.
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const adminCarValue = urlParams.get('page');
        if(adminCarValue==="AdminCar"){
            setPage(<AdminCar/>);
        }
        if(adminCarValue==="AdminBanner"){
            setPage(<AdminBanner/>);
        }
        if(adminCarValue==="AdminCustomer"){
            setPage(<AdminCustomer/>);
        }
        if(adminCarValue==="AdminFastInquired"){
            setPage(<AdminFastinquired/>);
        }
        if(adminCarValue==="AdminInquired"){
            setPage(<AdminInquired/>);
        }
    }, [window.location.search]); 

    return(
        <div className="admin_container">
        <div className="sidebar">
            <div className="sidetitle">
                <img src={DawonLogo}/>
            </div>
            <hr/>
            <div className="sidecontent">
                <ul>
    
                    <div className="sidecontent_title">문의</div>
                    <li className="fast_inquired_check"  onClick={() =>location("AdminFastInquired")}> 빠른 문의 확인</li>
                    <li className="inquired_check" onClick={() => location("AdminInquired")}>문의 학인</li>
                    <hr/>
                    <br/>
    
                    <div className="sidecontent_title">차량</div>
                    <li className="alter_car" onClick={() => location("AdminCar")}>차량 관리(수정,삭제)</li>
    
                    <hr/>
                    <br/>
                    <div className="sidecontent_title">배너</div>
                    <li className="alter_banner" onClick={() => location("AdminBanner")}>배너 관리(수정,삭제)</li>
    
                    <hr/>
                    <br/>
                    <div className="sidecontent_title">고객 후기</div>
                    <li className="alter_customeor" onClick={() => location("AdminCustomer")}>고객 후기 관리(수정,삭제)</li>
                    <hr/>
                    <br/>
    
    
                </ul>
            </div>
        </div>
        <div className="main">
        <div className="top">
            <div className="content_title">adminpage</div>
        </div>
        <div className="main_content">
            <div id = "content" className="content">
                {page}
            </div>
        </div>
    </div>
</div>
    )
}
export default AdminHome;