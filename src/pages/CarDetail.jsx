import React, { useEffect, useState } from 'react';
import Header from "../hooks/Header";
import testimg1 from '../assets/car/아우디 A6.png';
import '../styles/cardetail.css';
import call_img from "../assets/call_img.jpg";
import talk_img from "../assets/talk_img.jpg";
import inquired_img from "../assets/inquired_img.jpg";  
import DetailBanner from "../assets/Homebanner/Home_banner3.png";
import Fotter from '../hooks/Fotter';
import AUDI from '../assets/logo/AUDI.png'
import CarDetailJS from '../services/CarDetailJS';
function CarDetail() {
    const [backgroundImage,setBackgroundImage] = useState('/list/car_1.png');
    useEffect(()=>{
        CarDetailJS();
    },[]);
    return(
        <div className="Car_Detail_Container">
            <div className="Car_Detail_Header">
                <Header/>
            </div>
            <div className='Car_Detail_Banner'>
                    <img src={DetailBanner}></img>
            </div>
            <div className="Car_Detail_Main">

                <div className='Car_Detail_Main_Container'>
                    <div className='Car_Detail_IMG'>
                        {/* <img src={backgroundImage}></img> */}
                        <img src={testimg1}></img>
                    </div>
                    <div className='Car_Detail_Right_Container'>
                        <div className='Car_Detail_Right_Text'>
                            <div className='Car_Detail_Right_Title'>
                                    <div className='Car_Detail_Right_Title_Brand'>
                                        <img src={AUDI}></img>
                                    </div>
                                    <div className='Car_Detail_Right-Title_Car_Name'>
                                        <div className='Car_Detail_Right_Title_Car_Name_Font'>
                                            AUDI A6
                                        </div>
                                    </div>
                            </div>
                            <div className='Car_Detail_Right_InText'>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                        차량가
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                        100,000,000원
                                    </div>
                                </div>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                         차종
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                        대형차
                                    </div>
                                </div>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                        연료
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                      가솔린, 가솔린+전기, 디젤
                                    </div>
                                </div>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                    연비
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                    복합연비 7.9~12.0 ㎞/ℓ
                                    </div>
                                </div>
                            </div>
                            <div className='Car_Detail_Right_Price'>
                              <div className='Car_Detail_Right_Price_Top'>
                                <div className='Car_Detail_Right_Price_TItle'>월 납입료 </div> 
                                <div className='Car_Detail_Right_Price_Text'>월 1,600,000원</div>
                              </div>
                              <div className='Car_Detail_Right_Price_Bottom'>
                                (48개월 기준)
                              </div>
                            </div>
                            <div className='Car_Detail_Right_Price'>
                              <div className='Car_Detail_Right_Price_Top'>
                                <div className='Car_Detail_Right_Price_TItle'>월 납입료 </div> 
                                <div className='Car_Detail_Right_Price_Text'>월 800,000원</div>
                              </div>
                              <div className='Car_Detail_Right_Price_Bottom'>
                                (24개월 기준)
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className='Car_Detail_Popup'>
                            <img id="callimg" src={call_img}  style={{ width: '6vw', height: '14vh' }}/>
                        <img id="inquiredimg" src={inquired_img}style={{ width: '6vw', height: '14vh' }}/>
                            <img id="talkimg" src={talk_img} style={{ width: '6vw', height: '14vh' }}/>
                    </div>
                </div>

                <div className='Car_Detail_Sub_Container'>
                        <div className='Car_Detail_Sub_Detail_Trim_Button'>
                            <div className='Car_Detail_Sub_Trim'>
                                <div className='Car_Detail_Sub_Trim_Title'>
                                    <div className='Car_Detail_Sub_Trim_Title_Top'>
                                        Select 1.
                                    </div>
                                    <div className='Car_Detail_sub_Trim_title_Bottom'>
                                        등급 선택(TRIM)
                                    </div>
                                </div>
                                <div className='Car_Detail_Sub_Trim_Text'>
                                    2023년형 가솔린 터보 2.5
                                    <input value="2023년형 가솔린 터보 2.5" className="Car_Detail_Sub_Trim_Radio" type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Trim_Text'>
                                    2023년형 가솔린 터보3.5
                                    <input value="2023년형 가솔린 터보3.5"className="Car_Detail_Sub_Trim_Radio" type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+300,000</div>
                                <div className='Car_Detail_Sub_Trim_Text'>
                                    2023년형 디젤 3.0
                                    <input value="2023년형 디젤 3.0" className="Car_Detail_Sub_Trim_Radio" type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+400,000</div>
                                <div className='Car_Detail_Sub_Trim_Text'>
                                    2024년형 디젤 3.0
                                    <input value="2024년형 디젤 3.0"className="Car_Detail_Sub_Trim_Radio" type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+400,000</div>
                            </div>
                            <div className='Car_Detail_Sub_Button'>
                                <button>예상 견적 확인하기</button>
                            </div>
                        </div>
                        <div className='Car_Detail_Sub_Detail_Option'>
                            <div className='Car_Detail_Sub_Option'>
                                <div className='Car_Detail_Sub_Trim_Title_Top'>
                                    Select 2.
                                </div>
                                <div className='Car_Detail_sub_Trim_title_Bottom'>
                                        옵션 선택(Option)
                                </div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    선루프
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    하이패스 시스템 + ECM 름미러
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    현대 스마트 센스 III
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    익스테리어 디자인
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    17인치 알로이 휠 & 타이어 II
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    컴포트 I
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                                <div className='Car_Detail_Sub_Option_Text'>
                                    파킹 어시스트 시스템
                                    <input type="radio"></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>+200,000</div>
                            </div>
                        </div>
                </div>
                <div className='Car_Detail_Real_Price'>
                    <div className='Car_Detail_Real_Price_Left'>
                        <div className='Car_Detail_Real_Price_Left_Font'>예상 견적</div>
                    </div>
                    <div className='Car_Detail_Real_Price_Right'>
                        <div className='Car_Detail_Real_Price_Right_Box'>월 1,500,000원 <span>(64개월 기준)</span> </div> 
                        <div className='Car_Detail_Real_Price_Right_Box'>월 1,300,000원 <span>(32개월 기준)</span> </div> 
                    </div>
                    <div className='Car_Detail_Real_Price_Request'>
                        <button>나만의 견적 문의 ☏</button>
                    </div>
                </div>

            </div>
            <div className='Car_Detail_Footer'>
                    <Fotter></Fotter>
                </div>
        </div>
    )
}
export default CarDetail;