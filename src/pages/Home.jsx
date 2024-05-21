import "../styles/homebody.css";
import "../styles/swiper.css";
import "../styles/uicons.css";
import "../styles/uicons2.css";
import React, { useEffect, useState } from 'react';
import HomeJS from '../services/HomeJS';
import RecordItem from "../components/RecordItem";
import Header from "../components/Header";
import Slider from "../components/HomeSlider";
import Fotter from '../components/Fotter';
import CarList from "../components/CarList";
import CustomerReview from "../components/CusotmerReview";
import CallRequestPopup from "../components/CallRequestPopup"
import dawonlogo from "../assets/dawonlogo.png";
import axios from 'axios';
function Home(){
  const [CenterBanner,setCenterBanner] = useState([]);
    useEffect(() => {
      const fetchDataCenterBannerList = async() =>{
        try{
            const response = await axios.get('DaWonCar/CenterBanner');
            setCenterBanner(response.data);

        } catch(error){ 
            console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
    }
    fetchDataCenterBannerList();
        HomeJS();
    },[]);
    return(
        
        <div className="home-container">
        
        <div className="home-first">
           <div id="header" className="header">
             <Header />
           </div> 
             <div className="header_slide">
                <div id="slider">
                  <Slider/>
                  </div>
             </div>
        </div>
        <div className="home_first_call">
             <div className="home_first_call_trash"></div>
             <div className="home_first_call_sidebar">
               <div className="sidebar_text">
                 <p id="call_title">장기렌트, 리스도</p> 
                 <p id="call_sub">빠른 견적문의로!
                   <i className="fi fi-rs-cars"></i></p>
               </div>
             </div>

             <div className="home_first_call_main">
                  <div className="main_top"> </div>

                  <div className="main_main">
                     <div className="left">
                       <div>이름</div>
                       <br/>
                       <div>연락처</div>
                       <br/>
                       <div>차종</div>
                     </div>
                     <div className="right">
                        <div><input className="right_name" id="name" name="name" type="text"/></div>
                        <br/>
                        <div>
                         <select className="right_pho" id="phone" name="phone">
                           <option value="010">010</option>
                           <option value="011">011</option>
                           <option value="016">016</option>
                           <option value="017">017</option>
                           <option value="018">018</option>
                           <option value="019">019</option>
                           <option value="002">02</option>
                           <option value="031">031</option>
                           <option value="032">032</option>
                           <option value="033">033</option>
                           <option value="041">041</option>
                           <option value="042">042</option>
                           <option value="043">043</option>
                           <option value="051">051</option>
                           <option value="052">052</option>
                           <option value="053">053</option>
                           <option value="054">054</option>
                           <option value="055">055</option>
                           <option value="061">061</option>
                           <option value="062">062</option>
                           <option value="063">063</option>
                           <option value="064">064</option>
                         </select>
                             <input className="right_phone" type="text" id="phone1" name="phone1"/>
                             <input className="right_phone" type="text" id="phone2" name="phone2"/>
                         </div>
                        <br/>
                        <div>
                           <input className="right_brand" id="brand" name="brand" type="text"/>
                           <input className="right_brand" id="carsort" name="carsort" type="text"/>
                         </div>
                     </div>
                 </div>

                  <div className="main_bottom">
                  개인정보 수집/이용에 동의합니다(필수).
                      <input id="auth" name="auth" type="checkbox" value="동의"/>
                   <button field="pop_info_detail" className="btn_open" >자세히보기</button>
                  </div>

             </div>
             <div id="pop_info_detail2" className="pop_wrap" style={{ display: 'none' }}>

                <div className="pop_inner">

                    <h2>약관</h2>
                    <br/>

                    <div>
                        (주)다원카는 개인정보 관련 법률(개인정보보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률)을 준수하며 수집된 개인정보는 해당 서비스 외에 다른 용도로 절대 사용하지 않습니다.
                        또한 (주)다원카 콜센터(1670-9313)로 요청 시 제공한 개인정보 삭제 및 동의를 철회하실 수 있습니다.
                    </div>
                    <br/>
                    <div className="pop_text">
                    <div>개인정보 수집 및 이용 동의 (필수)</div>
                    <div>1) 수집목적 : 상담신청 및 금융상품 안내</div>
                    <div>2) 수집항목 : (필수) 이름, 연락처, 희망상품, 희망차량</div>
                    <div>3) 보유기간 : 제공일로 부터 1년간</div>
                    <div>4) 상담신청을 위해 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.</div>
                    <br/>
                    <div    >※ 고객님은 개인정보 수집·이용에 동의를 거부할 권리가 있으며 단, 동의 거부 시 상담 제공이 불가능합니다.</div>
                    </div>
                    <button type="button" className="btn_close">닫기</button>
                </div>
            </div>

             <div className="home_first_call_sidebab">

                 <button className="sidebab_button"><i
                   className=
                   "fi fi-rr-search-alt"
                   ></i>견적문의</button>
          
             </div>

             <div className="home_first_call_trash2"></div>

        </div>
        <div className="home-second">
         <div className="sidebar">
            <RecordItem/>
           </div>

           <div className="home-second-main">
           <div className="home-second-main-detail"> 
               <div className="home-second-main-flex1"></div>
               <div className="home-second-main-flex2">
               <ul> 
                   <li>
                       <img src={dawonlogo}/>
                   </li>
               </ul>
               </div>
           </div>
              <div id="carlist">
                <CarList/>
              </div>
           </div>       
             <div className="sidebab" id="sidebab">
                <div className="CallRequestPopup">
                  <CallRequestPopup/>
                </div>
             </div>
           </div>
           <div className="home-third">
             <div id="centerbanner">
              {CenterBanner.map((CenterBanner,index)=>(
              <div key={index}>
               <img id="CenterBannerIMG" src={"/IMG"+CenterBanner.centerBannerImgURL} alt="x"></img>
               </div>
              ))}

            </div>
          <div className="home-forth">
             <div className="customer_review">
               <div className="review_top">
               <div className="review_top_title">
  <p className="center_banner_text">
    <i>
      <span className="title_color">D</span>
      <span className="title_color2">a</span>wonCar
    </i> 출고후기
  </p>
  <p className="review_top_p">다원카를 선택해주신 고객님들의 후기입니다.</p>
</div>

               </div>
               <div  className="review_main" id="review">
               <CustomerReview/>
               </div>
           
               <div className="review_bottom"></div>
             </div>
          </div>
        </div>
       <div className="home-fifth">
                   <br/>
           <br/>
           <br/>
           <br/>
       </div>
     <Fotter id="footer"></Fotter>
   </div>
    )
}
export default Home;
