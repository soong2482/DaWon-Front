import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import RecordItem from "../components/RecordItem";
import '../styles/cardetail.css';
import call_img from "../assets/call_img.jpg";
import talk_img from "../assets/talk_img.jpg";
import inquired_img from "../assets/inquired_img.jpg";  
import DetailBanner from "../assets/back.png";
import logo_event_img from "../assets/logoevent.png"
import dawon_logo from "../assets/dawonlogo.png";
import Fotter from '../components/Fotter';
import {SumPrice ,windowsLocationRequest} from '../services/CarDetailJS';
import CarDetailJS from '../services/CarDetailJS';
import { useLocation } from 'react-router-dom';
function CarDetail() {
    const [DetailCar,setDetailCar] = useState([]);
    const [CarTrim,setCarTrim] =useState([]);
    const [OptionList,setOptionList] =useState([]);
    const [backgroundImage,setBackgroundImage] = useState('/list/car_1.png');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const CarCode =queryParams.get('carCode');
    async function getOptionList(id,Name) {
        try {
            const response = await axios.post('DaWonCar/GetOption', {
                "CarCode": id,
                "CarTrimName": Name
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                setOptionList(response.data);
  
            }
        } catch (error) {
            console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
    }
    useEffect(()=>{
        const fetchDataDetailCarList = async() =>{
            try{
                const response = await axios.get('DaWonCar/DetailCar',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "CarCode":CarCode
                    },
                });
                setDetailCar(response.data);

            } catch(error){ 
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
            
        }
        const fetchDataGetTrim = async() =>{
            try{
                const response = await axios.get('DaWonCar/GetTrim',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "CarCode":CarCode
                    },
                });
                setCarTrim(response.data);

            } catch(error){ 
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
            
        }
        fetchDataGetTrim();
        fetchDataDetailCarList();
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
                {DetailCar.map((detailcar,index)=>(
                <div key={index} className='Car_Detail_Main_Container'>
                    <div className='SideBar'>
                        <RecordItem></RecordItem>
                    </div>
                    <div className='Car_Detail_IMG'>
                        <img src={"/IMG/"+detailcar.carImg}></img>
                    </div>
                    <div className='Car_Detail_Right_Container'>
                        <div className='Car_Detail_Right_Text'>
                            <div className='Car_Detail_Right_Title'>
                                    <div className='Car_Detail_Right_Title_Brand'>
                                        <img src={"/IMG/"+detailcar.carBrandImg}></img>
                                    </div>
                                    <div className='Car_Detail_Right-Title_Car_Name'>
                                        <div className='Car_Detail_Right_Title_Car_Name_Font' id="CarName" field={detailcar.masterCarName}>
                                        {detailcar.masterCarName}
                                        </div>
                                    </div>
                            </div>
                            <div className='Car_Detail_Right_InText'>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                        차량가
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                        {detailcar.carRealPrice}
                                    </div>
                                </div>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                         차종
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                        {detailcar.carSort}
                                    </div>
                                </div>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                        연료
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                      {detailcar.carFuel}
                                    </div>
                                </div>
                                <div className='Car_Detail_Right_Block'>
                                    <div className='Car_Detail_Right_Left_Text'>
                                    연비
                                    </div>
                                    <div className='Car_Detail_Right_Right_Text'>
                                    {detailcar.carMileage}
                                    </div>
                                </div>
                            </div>
                            <div className='Car_Detail_Right_Price'>
                              <div className='Car_Detail_Right_Price_Top'>
                                <div className='Car_Detail_Right_Price_TItle'>월 납입료 </div> 
                                <div className='Car_Detail_Right_Price_Text' id="car48price"field={detailcar.car48Price}>  {"월 "+ detailcar.car48Price +"원"}</div>
                              </div>
                              <div className='Car_Detail_Right_Price_Bottom'>
                                (48개월 기준)
                              </div>
                              <div className='Car_Detail_Right_Price_Top'>
                                <div className='Car_Detail_Right_Price_TItle'>월 납입료 </div> 
                                <div className='Car_Detail_Right_Price_Text' id="car24price"field={detailcar.car24Price}> {"월 "+ detailcar.car24Price +"원"}</div>
                              </div>
                              <div className='Car_Detail_Right_Price_Bottom'>
                                (24개월 기준)
                              </div>
                            </div>
                     
                        </div>
                    </div>
                    <div className='Car_Detail_Popup'>
                            <img id="callimg" src={call_img} />
                        <img id="inquiredimg" src={inquired_img}/>
                            <img id="talkimg" src={talk_img}/>
                            <img id ="logoevnet" src={logo_event_img}/>
                    </div>
                </div>       
                ))}
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
                                {CarTrim.map((cartrim,index)=>(
                                    <div key={index}>
                                        <div className='Car_Detail_Sub_Trim_Text' field={cartrim.carTrimName}>
                                            {cartrim.carTrimName}
                                            <input value ={cartrim.carTrimPrice} onClick={()=>getOptionList(CarCode,cartrim.carTrimName)}className="Car_Detail_Sub_Trim_Radio" type="radio"></input>
                                        </div>
                                        <div className='Car_Detail_Plus_Price'>{"+"+ cartrim.carTrimPrice}</div>
                                </div>
                                ))}
                            </div>
                            <div className='Car_Detail_Sub_Button'>
                                <button className='Car_Detail_Sum_Price' onClick={()=>SumPrice()}>예상 견적 확인하기</button>
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
                                {OptionList.map((optionlist,index)=>(
                                <div key={index}>
                                <div className='Car_Detail_Sub_Option_Text' field={optionlist.carOption}>
                                    {optionlist.carOption}
                                    <input className="Car_Detail_Sub_Option_Radio" type="radio" value={optionlist.carOptionLeasePrice}></input>
                                </div>
                                <div className='Car_Detail_Plus_Price'>{"+"+optionlist.carOptionLeasePrice}</div>
                                </div>
                                ))}
                            </div>
                        </div>
                </div>
                <div className='Car_Detail_Real_Price'>
                    <div className='Car_Detail_Real_Price_Left'>
                        <div className='Car_Detail_Real_Price_Left_Font'>예상 견적</div>
                    </div>
                    <div className='Car_Detail_Real_Price_Right'>
                        <div className='Car_Detail_Real_Price_Right_Box' id="price48">견적 확인을 해주세요. <span>(48개월 기준)</span> </div> 
                        <div className='Car_Detail_Real_Price_Right_Box' id="price24">견적 확인을 해주세요. <span>(24개월 기준)</span> </div> 
                    </div>
                    <div className='Car_Detail_Real_Price_Request'>
                        <button onClick={() => {windowsLocationRequest()}}>나만의 견적 문의 ☏</button>
                    </div>
                </div>

            </div>
            <div className='BackGround_Dawon'>
                <img src={dawon_logo}></img>
            </div>
            <div className='Car_Detail_Footer'>
                    <Fotter></Fotter>
                </div>
        </div>
    )
}
export default CarDetail;