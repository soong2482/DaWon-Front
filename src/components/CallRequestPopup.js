import React from 'react';
import call_img from "../assets/call_img.jpg";
import talk_img from "../assets/talk_img.jpg";
import inquired_img from "../assets/inquired_img.jpg";
import "../styles/callRequestPopup.css";
function CallRequestPopup(){
    return (
        <div className='call_popup_Container'>
            <img src={call_img}/> 
            <img src={talk_img}  onClick={()=>{window.open("https://open.kakao.com/o/s6kBd69d")}}/> 
            <img src={inquired_img} onClick={()=>{window.location.href='requestpage'}}/> 
        </div>
    )
}
export default CallRequestPopup;