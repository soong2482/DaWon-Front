import "../styles/request.css";
import Header from "../hooks/Header";
import Fotter from '../hooks/Fotter';
import Back from "../assets/back.png";
import DawonLogo from "../assets/dawonlogo.png";

import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import requestJS from "../services/requestJS";
function Request(){
    const defaultAgreeText = `
    (주)다원카는 개인정보 관련 법률(개인정보보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률)을 준수하며 수집된 개인정보는 해당 서비스 외에 다른 용도로 절대 사용하지 않습니다. 
    또한 (주)다원카 콜센터(1599-4436)로 요청 시 제공한 개인정보 삭제 및 동의를 철회하실 수 있습니다.
    
    개인정보 수집 및 이용 동의 (필수)
    1) 수집목적 : 상담신청 및 금융상품 안내
    2) 수집항목 : (필수) 이름, 연락처, 희망상품, 희망차량
    3) 보유기간 : 제공일로 부터 1년간
    4) 상담신청을 위해 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.
    
    ※ 고객님은 개인정보 수집·이용에 동의를 거부할 권리가 있으며 단, 동의 거부 시 상담 제공이 불가능합니다.
      `;

    const location = useLocation();

    // URL 쿼리스트링에서 값을 추출
    const queryParams = new URLSearchParams(location.search);
    const initialSort = queryParams.get('sort');
    const [isCheckedLease, setIsCheckedLease] = useState(initialSort === 'lease');
  const [isCheckedRent, setIsCheckedRent] = useState(initialSort === 'rent');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'lease') {
      setIsCheckedLease(checked);
      setIsCheckedRent(false);
    } else if (name === 'rental') {
      setIsCheckedRent(checked);
      setIsCheckedLease(false);
    }
  };
    const initialName = queryParams.get('name') || '';
    const [name, setName] = useState(initialName);
    useEffect(() => {
        requestJS();
        const currentSort = queryParams.get('sort');
        setIsCheckedLease(currentSort === 'lease');
        setIsCheckedRent(currentSort === 'rent');
    },[]);
    return(
        <div>
        <div className="request_container">

             <div id="header">
                <Header/>
            </div>
        <div id="back_img">
            <img src={Back} alt=""/>
        </div>
       
        <div className="request_body"> 
            <div className="request_sidebar1">
            </div>
            <div className="request_chest">
               <div className="request_img">
                <img src={DawonLogo}/>
                </div>
                <div className="form_bac">
                <div className="form_line">
                    <div className="request_form">
                         <div className="form_in">
                             <div className="form_title_1">
                                <div className="form_title_1_center">
                                    <span className="title">희망차량 및 신청자 정보</span><span className="jum">*</span>
                                </div>
                                <div className="form_title_1_right">
                                    <div className="agreebutton">
                                        리스/렌트 선택<span className="jum">*</span>
                                    <div>
                                        <span className="light">리스</span><input type="checkbox"     checked={isCheckedLease}  onChange={handleCheckboxChange} name="lease" id="lease" value="리스"/>
                                        <span className="light">렌트</span> <input type="checkbox"   checked={isCheckedRent} onChange={handleCheckboxChange} name="rental" id="rental" value="렌트"/>
                                    </div>    
                                    </div>
                                </div> 
                            </div>
                             <div className="form_name_phone">
                                <div className="form_name_phone_left">
                                    <p>성함<span className="jum">*</span></p>
                                    <div>
                                    <input id="name" name="name" type="text" className="form_name_phone_name" placeholder="성함을 입력해주세요."/>
                                    </div>
                                </div>
                                <div className="form_name_phone_right">
                                    <p>연락처<span className="jum">*</span></p>
                                    <div>
                                        <input id="phone" name="phone" type="text" className="form_name_phone_phone" placeholder="연락처를 입력해주세요."/>
                                    </div>
                                </div>
                            </div>
                           
                             <div className="form_car_region">
                                <div className="form_car_region_left">
                                    <p>희망차량<span className="jum">*</span></p>
                                    <div>
                                    <input id="carsort"  name="carsort" type="text"   value={name}   onChange={(e) => setName(e.target.value)}  className="form_car_region_car" placeholder="희망차량을 입력해주세요."/>
                             
                                    </div>
                                </div>
                                <div className="form_car_region_right">
                                    <p>지역<span className="jum">*</span></p>
                                    <div>
                                    <input id="region" name="region" type="text" className="form_car_region_region" placeholder="지역을 입력해주세요."/>
                                    </div>
                                </div>
                             </div>
                             <div className="form_content">
                                <div className="form_content_sidebar"></div>
                                <div className="form_content_content"><p>자세한 문의 내용</p>
                                    <textarea id="text" name="text" className="content_textarea" placeholder="자세한 문의 내용을 입력해주세요."></textarea>
                                </div>
                                </div>
                                 <br/><br/><br/><br/><br/>
                                 <div className="form_title_2"><span>개인정보 수집·이용 동의(필수)</span><span className="jum">*</span>
                                     <span className="coment">※ 상담을 신청하시면 영업일 기준 2일내에 전문 상담원이 연락을 드립니다.</span>
                                     <br/><br/>
                                     <div className="form_title_2_flex">
                                         <div className="form_title_2_sidebar"></div>
                                    <div className="form_title_2_content">
					                    <textarea id="agreearea"  defaultValue={defaultAgreeText} style={{resize: false}} readOnly>
					                    </textarea>
                                    </div>
                                </div>
                            </div>
                             <div className="form_agreecontent">
                                <div className="form_agreeco
                                \ntent_left"></div>
                                <div className="form_agreecontent_right">
                                    <span>동의</span> <input id="auth" name="auth" type="checkbox" value="true"/>
                                </div>
                             </div>
                             <div className="submit_button">
                                <div className="submit_button_left">

                                </div>
                                <div className="submit_button_right">
                                    <button className="submit_button_button">견적신청</button>
                                </div>
                             </div>   
                           
                            </div>
                     </div>
                </div>
              </div>
            </div>
            <div className="request_sidebab">

            </div>
        </div>
        
        <div className="request_footer"> 
            <Fotter id="footer" />
        </div>
    </div>
 
    </div> 
    )
}
export default Request;