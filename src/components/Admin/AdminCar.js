import DaWonLogo from "../../assets/dawonlogo.png";
import "../../styles/admincar.css";
import React, {useState,useEffect} from 'react';
import { openPopup,closePopup,openInsertTrimPopup,openAlterTrimPopup,deleteTrim,openInsertOptionPopup,openAlterOptionPopup } from "../../services/AdminCarJS";
import axios from 'axios';

function AdminCar(){
    const [CarList,setCarList] = useState([]);
    const [imageSrc,setImageSrc] = useState('');
    const [TrimList,setTrimList] = useState([]);
    const [OptionList,setOptionList] = useState([]);
    const [selectedTrimIndex, setSelectedTrimIndex] = useState(null);
    const [selectedTrimName,setSelectedTrimIName] = useState(null);
    async function getTrimList(id) {
        try {
            const response = await axios.get('DaWonCar/GetTrim', {
                headers: {
                    "Content-Type": "application/json",
                    "CarCode": id
                }
            });
            if (response.status === 200) {
                setTrimList(response.data);
            }
        } catch (error) {
            console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
    }
    async function getOptionList(id,Name,index){
        setSelectedTrimIndex(index);
            try {
                const response = await axios.get('DaWonCar/GetOption', {
                    headers: {
                        "Content-Type": "application/json",
                        "CarCode": id,
                        "CarTrimName":Name
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
        const fetchDataAdminCar = async() =>{
            try{
                const response = await axios.get('DaWonCar/listCar');
                setCarList(response.data);
            } catch(error){ 
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
        }
        fetchDataAdminCar();
    },[]); 
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
        <div className="Admin_Car_Container">
            <div className="Admin_Car_DawonLogo">
                <img src={DaWonLogo}></img>
            </div>
            <div className="Admin_Car_Example_Text">
                *차량은 1번부터 18번까지만 화면에 표시됩니다*
            </div>
            <div className="Admin_Car_Insert_POP">
                <button className="Admin_Car_Insert_Button"onClick={() => openPopup("CarInsert")}>차량 추가</button>
                <div id={"CarInsert"} className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                    <div className="Admin_car_insert_pop_inner">
                        <div className="Admin_car_insert_pop_container">
                            <div className="Admin_car_insert_pop_container_left">
                                <div className="Admin_car_insert_Left_inner">
                                    <div className="Admin_car_insert_Title" >차량 이름</div>
                                    <div className="Admin_car_insert_Input" ><input placeholder="ex)벤츠 E-Class" className="Admin_car_insert_Car_Name"type="text"></input></div>
                                </div>
                                <div className="Admin_car_insert_Left_inner">
                                    <div className="Admin_car_insert_Title" >리스 가격</div>
                                    <div className="Admin_car_insert_Input" ><input placeholder="ex)100,000 ,<-표시 필수" className="Admin_car_insert_Car_Lease" type="text"></input></div>
                                </div>
                                <div className="Admin_car_insert_Left_inner">
                                    <div className="Admin_car_insert_Title" >렌트 가격</div>
                                    <div className="Admin_car_insert_Input" ><input value="가격문의"readOnly={true} className="Admin_car_insert_Car_Rent"type="text"></input></div>
                                </div>
                                <div className="Admin_car_insert_Left_inner">
                                    <div className="Admin_car_insert_Title" >브랜드</div>
                                    <div className="Admin_car_insert_Input">
                                        <select>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="Admin_car_insert_pop_container_right">
                                <div className="Admin_car_insert_Right_inner">
                                    <div className="Admin_car_insert_Title">이미지</div>
                                    <div className="Admin_car_select_Img">                        
                                        <label htmlFor="imageUpload">IMG 선택</label>
                                        <input type="file" id="imageUpload" onChange={(e) => {
                                                encodeFileToBase64(e.target.files[0]);
                                            }} />
                                    </div>
                                    {imageSrc && <img src={imageSrc}  className="Admin_car_Insert_IMG"alt="preview-img" />}
                                    <div className="Admin_car_submit_Button">
                                        <button>등록</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={() =>closePopup("CarInsert")}className="Admin_car_list_btn_close">닫기</button>
                    </div>
                </div> 
            </div>
            <table className="admincar_table">
                <thead>
                    <tr>
                        <th>순서</th>
                        <th>차량 이름</th>
                        <th>브랜드</th>
                        <th>리스 가격</th>
                        <th>렌트 가격</th>
                        <th>이미지 확인</th>
                        <th>차량(트림,옵션) 수정 & 확인</th>
                        <th>추천 차량 여부</th>
                        <th>추천 차량 설정</th>
                        <th>순서 변경</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {CarList.map((carlist,index)=>(
                        <tr key={index}>
                            <td field={carlist.carCode}>{carlist.masterCarOrder}</td>
                            <td>{carlist.masterCarName}</td>
                            <td>{carlist.carBrandImg}</td>
                            <td>{carlist.carLeasePrice}</td>
                            <td>{carlist.carRentPrice}</td>
                            <td>
                                <button className="Admin_Car_pop_open_Button" onClick={() => openPopup("IMG"+carlist.carCode)}>이미지 확인</button>
                                <div id={"IMG"+carlist.carCode}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                    <div className="Admin_car_img_pop_inner">
                                        {/* <img src={"/IMG/"+carlist.imglink}/> */}
                                        <button type="button" onClick={() =>closePopup("IMG"+carlist.carCode)}className="Admin_car_list_btn_close">닫기</button>
                                    </div>
                               </div>    
                            </td>
                            <td>
                            <button className="Admin_Car_pop_open_Button" onClick={() => { openPopup("TRIM_OPTION" + carlist.carCode); getTrimList(carlist.carCode)}}>수정&확인</button>
                                <div id={"TRIM_OPTION"+carlist.carCode}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                    <div className="Admin_car_trim_option_pop_inner">
                                        <div className="Admin_car_to_Select">
                                            현재 선택된 차량:{carlist.masterCarName}
                                        </div>
                                        <div className="Admin_car_to_container">
                                                <div className="Admin_car_trim_List">
                                                    <div className="Admin_car_to_Title">Trim List</div>
                                                    <div className="Admin_car_to_insert_button">
                                                        <button className="Admin_car_to_insert_Bu" onClick={() => openInsertTrimPopup("INSERT_TRIM",carlist.carCode)}>신규 트림 추가</button>
                                                    </div>
                                                    <div className="Admin_car_trim_table_container">
                                                        <table className="Admin_car_trim_table">
                                                            <thead>
                                                                <tr>
                                                                    <th>트림 이름</th>
                                                                    <th>트림 가격</th>
                                                                    <th>가격 수정</th>
                                                                    <th>트림 삭제*</th>
                                                                    <th>트림 선택</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {TrimList.map((trimlist,index)=>(
                                                                    <tr key={index} className={selectedTrimIndex === index ? "selected-trim" : ""}>
                                                                        <td>{trimlist.carTrimName}</td>
                                                                        <td>{trimlist.carTrimPrice}</td>
                                                                        <td>
                                                                            <button className="Admin_car_to_alter_button" onClick={() => openAlterTrimPopup("ALTER_TRIM_PRICE",trimlist.carTrimPrice,trimlist.carTrimName)}>수정</button>
                                                                        </td>
                                                                        <td><button className="Admin_car_to_delete_button" onClick={() => deleteTrim("trimlist.carTrimName")}>삭제</button></td>
                                                                        <td><button className="Admin_car_option_select_button" onClick={() => {getOptionList(carlist.carCode,trimlist.carTrimName,index); setSelectedTrimIName(trimlist.carTrimName)}}>선택(옵션 표시)</button></td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="Admin_car_option_List">
                                                    <div className="Admin_car_to_Title">Option List</div>
                                                    <div className="Admin_car_to_insert_button">
                                                        <button  className="Admin_car_to_insert_Bu" onClick={() => openInsertOptionPopup("INSERT_OPTION",selectedTrimName)}>신규 옵션 추가</button>
                                                    </div>
                                                    <div className="Admin_car_option_table_container">
                                                        <table className="Admin_car_option_table">
                                                            <thead>
                                                                <tr>
                                                                    <th>옵션 이름</th>
                                                                    <th>옵션 가격</th>
                                                                    <th>가격 수정</th>
                                                                    <th>옵션 삭제</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {OptionList.map((optionlist,index)=>(
                                                                    <tr key={index}>
                                                                        <td>{optionlist.carOption}</td>
                                                                        <td>{optionlist.carOptionLeasePrice}</td>
                                                                        <td><button className="Admin_car_to_alter_button" onClick={() => openAlterOptionPopup("ALTER_OPTION_PRICE",optionlist.carOptionLeasePrice,optionlist.carOption)}>가격 수정</button></td>
                                                                        <td><button className="Admin_car_to_delete_button">삭제</button></td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                        </div>
                                        <button type="button"onClick={() => {closePopup("TRIM_OPTION"+carlist.carCode);setOptionList([]);setSelectedTrimIndex(null) }}className="Admin_car_list_btn_close">닫기</button>
                                    </div>
                               </div>    
                            </td>
                            <td>{carlist.masterCarRecommend  ? 'O' : 'X'}</td>
                            <td><button>추천 차량 설정</button></td>
                            <td><button>순서 변경</button></td>
                            <td><button>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id={"INSERT_OPTION"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_insert_option_pop_inner">
                    <input type="hidden" id="HiddenTrimOptionName"></input>
                    <div id="Show_Trim_Name"></div>
                    <div className="Admin_car_insert_option_container">
                        <div className="Admin_car_insert_option_left">
                            <div>옵션 이름 :</div>
                            <div>옵션 가격 :</div>
                        </div>
                        <div className="Admin_car_insert_option_right">
                            <div><input placeholder="ex)E_CLASS/열선시트 /<-필수" type="text"></input></div>
                            <div><input placeholder="ex)100,000 ,<-필수"type="text"></input></div>
                        </div>
                    </div>
                    <button className="Inser_Option_Submit_Button">등록</button>
                    <button onClick={() =>closePopup("INSERT_OPTION")}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>
            <div id={"ALTER_OPTION_PRICE"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_alter_price_pop_inner">
                    <input type="hidden" id="HiddenOptionName"></input>
                    <div id="Show_Option_Name"></div>
                    <div>현재 가격</div>
                    <div id="Now_Option_Value"></div>
                    <div>변경할 가격</div>
                    <div><input type="text" id="Change_Option_Value"></input></div>
                    <div><button className="Alter_Option_Price_Button">변경</button></div>
                    <button onClick={() =>closePopup("ALTER_OPTION_PRICE")}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>
            <div id={"INSERT_TRIM"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_insert_trim_pop_inner">
                    <input id="HiddenCarCodeValue" type="hidden"></input>
                    <div className="Admin_car_insert_trim_container">
                        <div className="Admin_car_insert_trim_left">
                            <div>트림 이름 :</div>
                            <div>트림 가격 :</div>
                        </div>
                        <div className="Admin_car_insert_trim_right">
                            <div><input placeholder="ex)180D" type="text"></input></div>
                            <div><input placeholder="ex)100,000 ,<-필수"type="text"></input></div>
                        </div>
                    </div>
                    <button className="Inser_Trim_Submit_Button">등록</button>
                    <button onClick={() =>closePopup("INSERT_TRIM")}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>

            <div id={"ALTER_TRIM_PRICE"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_alter_price_pop_inner">
                    <input id="HiddenTrimName" type="hidden"></input>
                    <div id="Show_Select_Trim_Name"></div>
                    <div>현재 가격</div>
                    <div id="Now_Value"></div>
                    <div>변경할 가격</div>
                    <div><input type="text" id="Change_Value"></input></div>
                    <div><button className="Alter_Trim_Price_Button">변경</button></div>
                    <button onClick={() =>closePopup("ALTER_TRIM_PRICE")}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>        
        </div>
    )
}
export default AdminCar;