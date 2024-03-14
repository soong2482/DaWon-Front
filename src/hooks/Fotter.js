import React, { useEffect } from 'react';
import dawonlogo from '../assets/dawonlogo.png';
import blog from '../assets/blog.png';
import insta from '../assets/insta.png';
import kakao from '../assets/kakao.png';
import facebook from '../assets/facebook.png';
import '../styles/footer.css';
import FooterJS from '../services/footerJS.js';
function Fotter(){
    useEffect(() =>{
        FooterJS();
      },[]);
    return(
        <div>
                 <div id="pop_info_detail" className="pop_wrap" style={{display:'none'}}>
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
                     <div>※ 고객님은 개인정보 수집·이용에 동의를 거부할 권리가 있으며 단, 동의 거부 시 상담 제공이 불가능합니다.</div>
                     </div>
                     <button type="button" className="btn_close">닫기</button>
                 </div>
        </div>
<footer className="footer_container">
    
    <div field="pop_info_detail" className="btn_open">
        <div className="footer_second_first">
            <p>&ensp;&ensp;&ensp;&ensp;이용약관</p>
        </div>
        <div className="footer_second_trash"><p>|</p></div>
        <div className="footer_second_second">
            <p>개인정보취급방침</p>
        </div>

    </div>
    <div className="footer_first">
        <div className="footer_trash"></div>
        <div className="footer_logo">
            <img src={dawonlogo} alt=""/>
        </div>

        <div className="footer_first_second">
            <div className="footer_row">
                <div className="footer_left">
                    <p>주소 : 충북 청주시 서원구 청남로 2136번길 30 </p>
                    <p>TEL: 1670-9313/ FAX:0504-185-8672</p>
                    <p> Email: hyenbu03@naver.com</p>
                </div>
                <div className="footer_right">
                    <div className="footer_a">
                        <div className="footer_a_1">Blog</div>
                        <div className="footer_a_1">Kakao</div>
                        <div className="footer_a_1">Insta</div>
                        <div className="footer_a_1">Facebook</div>
                    </div>
                    <div className="footer_a">
                        <div className="footer_a_1"><img src={blog} className="blog" alt=""/></div>
                        <div className="footer_a_1"><img src={kakao}  className="kakao" alt=""/></div>
                        <div className="footer_a_1"><img src={insta} className="insta" alt=""/></div>
                        <div className="footer_a_1"><img src={facebook} className="facebook" alt=""/></div>

                    </div>


                </div>
            </div>
            <hr className="hr"/>
            <p className="copyright">Copyright (c) DawonCar. All rights reserved.</p>
        </div>


    </div>

</footer>
</div>
    )
}
export default Fotter;