import "../../styles/adminbanner.css";
import React, {useState,useEffect} from 'react';
import DawonLogo from "../../assets/dawonlogo.png";
import {InsertBanner,open,close,openCenter,closeCenter,deleteHomeBanner,changelook,
    closeChangeOrder,deleteCenterBanner,openChangeOrder,ChangeHomeBannerOrder} from '../../services/AdminBannerJS.js';
import axios from 'axios';
function Adminbanner(){
    const [HomeBanner,setHomeBanner] = useState([]);
    const [CenterBanner,setCenterBanner] = useState([]);
    const [imageSrc,setImageSrc] = useState('');
    useEffect(()=>{
        const fetchDataHomeBanner = async() =>{
            try{
                const response = await axios.get('DaWonCar/HomeBannerList');
                setHomeBanner(response.data);
              
            } catch(error) {
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
        };
        const fetchDataCenterBanner = async() =>{
            try{
                const response = await axios.get('DaWonCar/CenterBannerList');
                setCenterBanner(response.data);
            } catch(error){
                console.error('데이터를 불러오는 도중 오류 발생:',error);
            }
        };
        fetchDataCenterBanner();
        fetchDataHomeBanner();
    },[])
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };
    return(
        <div className="banner_container">
            <div className="banner_dawon">
                <img src={DawonLogo}/>
            </div>
            <div className="Admin_Banner_Insert_Button_container">
                <button className="Admin_Banner_Insert_Button" onClick={()=>open("_AdminBannerInsert")}>등록</button>
                <div id="Admin_Banner_pop_sort_AdminBannerInsert" className="Admin_Banner_pop_wrap" style={{ display: 'none' }}>
                    <div className="Admin_Banner_insert_pop_inner">
                        
                    <div className="Admin_Banner_Insert_Container">
                        <div className="Admin_Banner_Insert">
                            <div className="Admin_Banner_Insert_Title">
                                배너 이름
                            </div>
                            <div className="Admin_Banner_Input">
                                <input type="text" id="Admin_Banner_Input_Name"></input>
                            </div>
                        </div>
                        <div className="Admin_Banner_Select">
                            <div className="Admin_Banner_Insert_Title">
                                배너 종류 선택
                            </div>
                            <select className="Admin_car_insert_Brand_Select">
                                <option value="HomeBanner">HomeBanner</option>
                                <option value="CenterBanner">CenterBanner</option>
                            </select>
                        </div>
                    
                    </div>
                    <div  className="Admin_Banner_Insert_IMG">
                        <div className="Admin_Banner_insert_IMG_Button">                        
                            <label htmlFor="imageUpload">IMG 선택</label>
                            <input type="file" id="imageUpload" onChange={(e) => {
                                    encodeFileToBase64(e.target.files[0]);
                                }} />
                        </div>
                    {imageSrc && <img src={imageSrc}  className="Admin_Banner_Insert_IMG_preview"alt="preview-img" />}

                    </div>
                        <button className="Admin_Banner_Insert_Button_Push" onClick={() =>InsertBanner() }>등록</button>
                        <button type="button" onClick={()=> close("_AdminBannerInsert")}className="Admin_Banner_btn_close">닫기</button>
                    </div>
                </div>
            </div>
            <div className="High_Banner">
            <div className="select_name">
                Main_HOME(상단 배너)
            </div>
             <table className="Admin_Banner_table">
                  <thead>
                      <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th>CheckImg</th>
                        <th>Delete</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                {HomeBanner.map((homebanner,index)=>(
                    <tr key={index}>
                        <td className={"Admin_Banner_Order"+homebanner.homeBannerOrder} field={homebanner.homeBannerCode}>{homebanner.homeBannerOrder}</td>
                        <td>{homebanner.homeBannerName}</td>
                        <td>
                        <button field="Admin_Banner_pop_info_detail" onClick={()=> open(homebanner.homeBannerCode)} className='Admin_Banner_btn_open'>이미지 확인</button>
                                    <div id={"Admin_Banner_pop_sort"+homebanner.homeBannerCode} className="Admin_Banner_pop_wrap" style={{ display: 'none' }}>
                                        <div className="Admin_Banner_pop_inner">
                                            <img src={"/IMG/"+homebanner.homeBannerImgURL}/>
                                            <button type="button" onClick={()=> close(homebanner.homeBannerCode)}className="Admin_Banner_btn_close">닫기</button>
                                        </div>
                                    </div>
                        </td>
                        <td><button className="Admin_Banner_pop_delete" onClick={()=> deleteHomeBanner(homebanner.homeBannerCode)}>삭제</button></td>
                        <td><button className="Admin_Banner_btn_open" onClick={()=> openChangeOrder(homebanner.homeBannerCode)}>순서 변경</button>
                        <div id={"Admin_Banner_pop_Order"+homebanner.homeBannerCode} className="Admin_Banner_pop_wrap" style={{ display: 'none' }}>
                                        <div className="Admin_Banner_pop_innered">
                                                <div className="Admin_Banner_pop_ChangeOrder">
                                                    <div>현재순서</div>
                                                    <div>{homebanner.homeBannerOrder}</div>
                                                    <div>변경할 순서</div>
                                                    <div><input className={'Admin_Banner_Change_Text'+homebanner.homeBannerOrder} type="text"></input></div>
                                                    <div><button className="Admin_Banner_pop_ChangeOrder_Button" onClick={() => ChangeHomeBannerOrder(homebanner.homeBannerOrder)}>변경</button></div>
                                                </div>
                                            <button type="button" onClick={()=> closeChangeOrder(homebanner.homeBannerCode)}className="Admin_Banner_btn_close">닫기</button>
                                        </div>
                                    </div>
                        </td>
                    </tr>
                ))}
                </tbody>
             </table>

            </div>

            <div className="Center_Banner">
             <div className="select_name">
                Main_Center(중간 배너)
            </div>
             <table className="Admin_Banner_table">
                  <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>CheckImg</th>
                        <th>Delete</th>
                        <th>Look</th>
                        <th>ChangeLook</th>
                    </tr>
                </thead>
                <tbody>
                {CenterBanner.map((centerbanner,index)=>(
                      <tr key={index} style={{ backgroundColor: centerbanner.centerBannerLook ? 'rgb(169, 211, 248)' : 'transparent' }}>
                        <td>{centerbanner.centerBannerCode}</td>
                        <td>{centerbanner.centerBannerName}</td>
                        <td>
                        <button field="Admin_Banner_pop_info_detail" onClick={()=> openCenter(centerbanner.centerBannerCode)} className='Admin_Banner_btn_open'>이미지 확인</button>
                                    <div id={"Admin_Banner_pop_sorted"+centerbanner.centerBannerCode} className="Admin_Banner_pop_wrap" style={{ display: 'none' }}>
                                        <div className="Admin_Banner_pop_innered">
                                            <img src={"/IMG/"+centerbanner.centerBannerImgURL}/>
                                            <button type="button" onClick={()=> closeCenter(centerbanner.centerBannerCode)}className="Admin_Banner_btn_close">닫기</button>
                                        </div>
                                    </div>
                        </td>
                        <td><button className="Admin_Banner_pop_delete" onClick={() => deleteCenterBanner(centerbanner.centerBannerCode)}>삭제</button></td>
                        <td>    {centerbanner.centerBannerLook ? 'O' : 'X'}</td>
                        <td><button className="Admin_Banner_btn_open" onClick={() => changelook(centerbanner.centerBannerCode)}>메인 변경</button></td>
                    </tr>
                ))}
                </tbody>
             </table>
             </div>
        </div>
    )
}
export default Adminbanner;