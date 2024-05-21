import DaWonLogo from "../../assets/dawonlogo.png";
import "../../styles/admincar.css";
import React, {useState,useEffect} from 'react';
import {ChangeDetailCar,InsertBrand,DeleteBrand,ChangeCarLeasePrice,ChangeCarOrder,CarDelete,UpdateRecommendCar,ChangeTrimPrice,deleteOption,ChangeOptionPrice,TrimInsert, CarInsert,openPopup,closePopup,openInsertTrimPopup,openAlterTrimPopup,deleteTrim,openInsertOptionPopup,openAlterOptionPopup, OptionInsert } from "../../services/AdminCarJS";
import axios from 'axios';

function AdminCar(){
    const [CarList,setCarList] = useState([]);
    const [imageSrc,setImageSrc] = useState('');
    const [imageSrc2,setImageSrc2] = useState('');
    const [TrimList,setTrimList] = useState([]);
    const [OptionList,setOptionList] = useState([]);
    const [selectedTrimIndex, setSelectedTrimIndex] = useState(null);
    const [selectedTrimName,setSelectedTrimIName] = useState(null);
    const [CommasValue,setCommasValue] = useState('');
    const [OrignalCarValue,setOriginalCarValue] = useState('');
    const [CarPrice48,setCarPrice48] = useState('');
    const[CarPrice24,setCarPrice24] = useState('');
    const [CarBrandList,setCarBrandList] =useState([]);
    const [DetailList,setDetailList] = useState([]);
    const [CarSort,setCarSort] = useState('');
    const [CarFuel,setCarFuel] = useState('');
    const [CarMileage,setCarMileage] = useState('');
    const handlePriceChange = (e) => {
        const value = e.target.value;
        const newValue = value.replace(/[^0-9]/g, '');
        setCommasValue(addCommasToNumber(newValue));
    };
    const setCarSortValue = (e) =>{
        const value = e.target.value;
        setCarSort(value);
    }
    const setCarFuelValue = (e) =>{
        const value = e.target.value;
        setCarFuel(value);
    }
    const setCarMileageValue = (e) =>{
        const value = e.target.value;
        setCarMileage(value);
    }
    const handleOriginPriceChange = (e) =>{
        const value = e.target.value;
        const newValue = value.replace(/[^0-9]/g, '');
        setOriginalCarValue(addCommasToNumber(newValue));
    }
    const handleCarPrice48Change = (e) =>{
        const value = e.target.value;
        const newValue = value.replace(/[^0-9]/g, '');
        setCarPrice48(addCommasToNumber(newValue));
    }
    const handleCarPrice24Change = (e) =>{
        const value = e.target.value;
        const newValue = value.replace(/[^0-9]/g, '');
        setCarPrice24(addCommasToNumber(newValue));
    }

    const addCommasToNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
    const ValueReset = (e) =>{
        setCommasValue('');
        setOriginalCarValue('');
        setCarPrice24('');
        setCarPrice48('');
    }

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
    async function getDetailList(id){
        try{
            const response = await axios.get('DaWonCar/CarDetailList',{
                headers:{
                    "Content-Type": "application/json",
                    "CarCode": id
                }
            })
            console.log(response.data);
            if (response.status === 200) {
                setDetailList(response.data);
            }
        } catch (error) {
            console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
        
    }
    async function getOptionList(id, Name, index) {
        setSelectedTrimIndex(index);
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
        const fetchDataAdminCar = async() =>{
            try{
                const response = await axios.get('DaWonCar/listCar');
                setCarList(response.data);
            } catch(error){ 
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
        }
        async function getCarBrandList(){
            try {
                const response = await axios.get('DaWonCar/BrandList', {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (response.status === 200) {
                    setCarBrandList(response.data);
                }
            } catch (error) {
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
        }
        getCarBrandList();
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
      const encodeFileToBase642 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc2(reader.result);
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
                                    <div className="Admin_car_insert_Input" ><input name="InsertCarPrice"value={CommasValue} onChange={handlePriceChange} placeholder="ex)100,000" className="Admin_car_insert_Car_Lease" type="text"></input></div>
                                </div>
                                <div className="Admin_car_insert_Left_inner">
                                    <div className="Admin_car_insert_Title" >렌트 가격</div>
                                    <div className="Admin_car_insert_Input" ><input defaultValue="가격문의"readOnly={true} className="Admin_car_insert_Car_Rent"type="text"></input></div>
                                </div>
                                <div className="Admin_car_insert_Left_inner">
                                    <div className="Admin_car_insert_Title" >브랜드</div>
                                    <div className="Admin_car_insert_Input">
                                    {CarBrandList.map((carbrand,index)=>(
                                        <select key={index} className="Admin_car_insert_Brand_Select"> 

                                                    <option value={carbrand.masterCarBrandName}>{carbrand.masterCarBrandName}</option>
                                    
                                        </select>
                                    ))}     
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
                                        <button onClick={CarInsert}>등록</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Admin_car_insert_pop_container_detail">
                                <div className="Admin_car_insert_car_real_price">
                                    <div className="Admin_car_insert_Title">차량 원가</div>
                                    <div className="Admin_car_insert_Input">    
                                        <input id="Car_original_price" placeholder="ex)100,000,000"onChange={handleOriginPriceChange} value={OrignalCarValue}></input>
                                    </div>
                                </div>
                                <div className="Admin_car_insert_car_sort">
                                    <div className="Admin_car_insert_Title">차량 엔진 종류</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Car_sort" placeholder="ex)대형차"></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_fuel">
                                    <div className="Admin_car_insert_Title">차량 연료</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input  id="Car_fuel" placeholder="ex)가솔린,가솔린+전기,디젤"></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_ileage">
                                    <div className="Admin_car_insert_Title">차량 연비</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Car_ileage" placeholder="ex)복합연비 7.9~12.0 km/ℓ"></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_48_price">
                                    <div className="Admin_car_insert_Title">48개월 리스 가격</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Car_48_price" placeholder="ex)200,000"value={CarPrice48} onChange={handleCarPrice48Change}></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_24_price">
                                    <div className="Admin_car_insert_Title">24개월 리스 가격</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Car_24_price" placeholder="ex)400,000" value={CarPrice24} onChange={handleCarPrice24Change}></input>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={() => { closePopup("CarInsert"); ValueReset(); }} className="Admin_car_list_btn_close">닫기</button>
                    </div>
                </div> 
            </div>
            <div className="Car_Brand_Insert">
                <button className="Car_Brand_Insert_Button" onClick={() =>{openPopup("BRANDINSERT");}}>브랜드 관리</button>
                <div id="BRANDINSERT" className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                    <div className="Admin_car_brand_pop_inner">
                        <button className="adminbrand_insert_Button" onClick={() =>{openPopup("BrandInsertPop")}}>브랜드 등록</button>
                        <div id={"BrandInsertPop"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                            <div className="Admin_car_brand_insert_pop_inner">
                                    <div className="Admin_car_brand_insert_Text">브랜드 이름</div>
                                    <input id="Admin_Car_brand_inserT_input" type="text"></input>
                                    <div className="Admin_car_brand_insert_Text">브랜드 로고 이미지 선택</div>
                                    <div id="margin-top">
                                        <label className="Admin_car_brand_insert_IMG_SELECT" htmlFor="imageUploadBrand">IMG 선택</label>
                                        <input type="file" id="imageUploadBrand" onChange={(e) => {
                                                encodeFileToBase642(e.target.files[0]);
                                        }} />
                                         {imageSrc && <img src={imageSrc2}  className="Admin_car_Insert_Brand_IMG"alt="preview-img" />}
                                    </div>
                                    <div className="InputInsertBrandButton">
                                        <button onClick={()=>InsertBrand()}>등록</button>
                                    </div>
                                <button type="button" onClick={() =>closePopup("BrandInsertPop")}className="Admin_car_list_btn_close">닫기</button>
                            </div>
                        </div>   
                        <table className="adminbrand_table">
                            <thead>
                                <tr>
                                    <th>브랜드 이름</th>
                                    <th>이미지 확인</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CarBrandList.map((carbrand,index)=>(
                                     <tr key={index}>
                                        <td>{carbrand.masterCarBrandName}</td>
                                        <td>
                                            <button className="Admin_Car_pop_open_Button" onClick={()=>openPopup("IMGBRAND"+carbrand.masterCarBrandName)}>이미지 확인</button>
                                            <div id={"IMGBRAND"+carbrand.masterCarBrandName}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                                <div className="Admin_car_img_pop_inner">
                                                    <img src={"/IMG/"+carbrand.carBrandImg}/>
                                                    <button type="button" onClick={() =>{closePopup("IMGBRAND"+carbrand.masterCarBrandName);}}className="Admin_car_list_btn_close">닫기</button>
                                                </div>
                                            </div>    
                                        </td>
                                        <td><button className="Admin_car_to_delete_button" onClick={() =>{DeleteBrand(carbrand.masterCarBrandName)}}>삭제</button></td>
                                     </tr>
                                ))}
                            </tbody>
                        </table>
                        <button type="button" onClick={() =>{closePopup("BRANDINSERT")}}className="Admin_car_list_btn_close">닫기</button>
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
                        <th>추천</th>
                        <th>추천 설정</th>
                        <th>순서 변경</th>
                        <th>가격 변경</th>
                        <th>상세 정보 수정 & 확인</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {CarList.map((carlist,index)=>(
                      <tr key={index} style={{ backgroundColor: carlist.masterCarOrder && carlist.masterCarOrder <= 18 ? 'rgb(169, 211, 248)' : 'transparent' }}>
                            <td field={carlist.carCode}>{carlist.masterCarOrder}</td>
                            <td>{carlist.masterCarName}</td>
                            <td>{carlist.masterCarBrandName}</td>
                            <td>{carlist.carLeasePrice}</td>
                            <td>{carlist.carRentPrice}</td>
                            <td>
                                <button className="Admin_Car_pop_open_Button" onClick={() => openPopup("IMG"+carlist.carCode)}>이미지 확인</button>
                                <div id={"IMG"+carlist.carCode}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                    <div className="Admin_car_img_pop_inner">
                                        <img src={"/IMG/"+carlist.carImg}/>
                                        <button type="button" onClick={() =>{closePopup("IMG"+carlist.carCode);ValueReset();}}className="Admin_car_list_btn_close">닫기</button>
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
                                                        <button className="Admin_car_to_insert_Bu" onClick={() => openInsertTrimPopup("INSERT_TRIM",carlist.carCode,carlist.masterCarName)}>신규 트림 추가</button>
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
                                                                        <td><button className="Admin_car_to_delete_button" onClick={() => deleteTrim(carlist.carCode,trimlist.carTrimName)}>삭제</button></td>
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
                                                        <button  className="Admin_car_to_insert_Bu" onClick={() => openInsertOptionPopup("INSERT_OPTION",selectedTrimName,carlist.carCode)}>신규 옵션 추가</button>
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
                                                                        <td><button className="Admin_car_to_delete_button" onClick={() => deleteOption(carlist.carCode,optionlist.carOption)}>삭제</button></td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                        </div>
                                        <button type="button"onClick={() => {closePopup("TRIM_OPTION"+carlist.carCode);setOptionList([]);setSelectedTrimIndex(null); ValueReset(); }}className="Admin_car_list_btn_close">닫기</button>
                                    </div>
                               </div>    
                            </td>
                            <td style={{ backgroundColor: carlist.masterCarRecommend === '1' ? 'aqua' : 'white' }}>{carlist.masterCarRecommend === '1' ? 'O' : 'X'}</td>
                            <td><button className="Admin_Car_RecommendCar_Button"onClick={()=>UpdateRecommendCar(carlist.carCode)}>추천 차량 설정</button></td>
                            <td><button className="Admin_Car_ChangeOrder_Button" onClick={()=> openPopup("ALTER_CAR_ORDER"+carlist.carCode)}>순서 변경</button>
                            <div id={"ALTER_CAR_ORDER"+carlist.carCode}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                    <div className="Admin_car_alter_order_pop_inner">
                                        <input id="HiddenCarCodeOrder" type="hidden" defaultValue={carlist.carCode}></input>
                                        <div id="Show_Select_Trim_Name"></div>
                                        <div>현재 순서</div>
                                        <div><input type="text" id="Now_Car_Order" defaultValue={carlist.masterCarOrder}></input></div>
                                        <div>변경할 순서</div>
                                        <div><input type="text" id="Change_Order_Car"></input></div>
                                        <div><button className="Alter_Trim_Price_Button" onClick={()=>ChangeCarOrder()}>변경</button></div>
                                        <button onClick={() =>closePopup("ALTER_CAR_ORDER"+carlist.carCode)}className="Admin_car_list_btn_close">닫기</button>
                                    </div>
                                </div>   
                            </td>
                            <td><button className="Admin_Car_ChangePrice_Button" onClick={()=> openPopup("ALTER_CAR_PRICE"+carlist.carCode)}>가격 변경</button>
                            <div id={"ALTER_CAR_PRICE"+carlist.carCode}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                    <div className="Admin_car_alter_order_pop_inner">
                                        <div>현재 리스 가격</div>
                                        <div><input type="text" id="Now_Car_Lease_Price" defaultValue={carlist.carLeasePrice}></input></div>
                                        <div>변경할 리스 가격</div>
                                        <div><input value={CommasValue} onChange={handlePriceChange} type="text" id="Change_Lease_Price_Car" placeholder="ex)5,000,000"></input></div>
                                        <div><button className="Alter_Trim_Price_Button" onClick={()=>ChangeCarLeasePrice(carlist.carCode)}>변경</button></div>
                                        <button onClick={() =>{closePopup("ALTER_CAR_PRICE"+carlist.carCode);ValueReset(); }}className="Admin_car_list_btn_close">닫기</button>
                                    </div>
                                </div>   
                            </td>
                            <td>
                                <button className="Admin_Car_pop_open_Button" onClick={() => {openPopup("DETAIL_CAR"+carlist.carCode);getDetailList(carlist.carCode);}}>수정 & 확인</button>
                                <div id={"DETAIL_CAR"+carlist.carCode}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                                    <div className="Admin_car_detail_pop_inner">
                                    <div className="Admin_car_detail_pop_flex"> 
                                    {DetailList.map((detaillist,index)=>(

                                        <div  key={index} className="Admin_car_detail_left">
                                            <div className="Admin_car_insert_Title_Title">현재 정보</div>
                                            <div className="Admin_car_insert_car_real_price">
                                                <div className="Admin_car_insert_Title">차량 원가</div>
                                                <div className="Admin_car_insert_Input">    
                                                    <input type="text" readOnly={true} value={detaillist.carRealPrice}></input>
                                                </div>
                                            </div>
                                            <div className="Admin_car_insert_car_sort">
                                                <div className="Admin_car_insert_Title">차량 종류</div>
                                                    <div className="Admin_car_insert_Input">    
                                                        <input id="Car_sort"  readOnly={true}value={detaillist.carSort}placeholder="ex)대형차"></input>
                                                    </div>
                                            </div>
                                            <div className="Admin_car_insert_car_fuel">
                                                <div className="Admin_car_insert_Title">차량 연료</div>
                                                    <div className="Admin_car_insert_Input">    
                                                        <input  id="Car_fuel"  readOnly={true}value={detaillist.carFuel} placeholder="ex)가솔린,가솔린+전기,디젤"></input>
                                                    </div>
                                            </div>
                                            <div className="Admin_car_insert_car_ileage">
                                                <div className="Admin_car_insert_Title">차량 연비</div>
                                                    <div className="Admin_car_insert_Input">    
                                                        <input id="Car_ileage"  readOnly={true} value={detaillist.carMileage}placeholder="ex)복합연비 7.9~12.0 km/ℓ"></input>
                                                    </div>
                                            </div>
                                            <div className="Admin_car_insert_car_48_price">
                                                <div className="Admin_car_insert_Title">48개월 리스 가격</div>
                                                    <div className="Admin_car_insert_Input">    
                                                        <input id="Car_48_price"  readOnly={true}placeholder="ex)200,000"value={detaillist.car48Price}></input>
                                                    </div>
                                            </div>
                                            <div className="Admin_car_insert_car_24_price">
                                                <div className="Admin_car_insert_Title">24개월 리스 가격</div>
                                                    <div className="Admin_car_insert_Input">    
                                                        <input id="Car_24_price"  readOnly={true}placeholder="ex)400,000" value={detaillist.car24Price}></input>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                               ))}
                                        
                                         <div  className="Admin_car_detail_right">
                                         <div className="Admin_car_insert_Title_Title">변경 내용</div>
                                         <div className="Admin_car_insert_car_real_price">
                                    <div className="Admin_car_insert_Title">차량 원가</div>
                                    <div className="Admin_car_insert_Input">    
                                        <input id="C_Car_original_price" placeholder="ex)100,000,000"onChange={handleOriginPriceChange} value={OrignalCarValue}></input>
                                    </div>
                                </div>
                                <div className="Admin_car_insert_car_sort">
                                    <div className="Admin_car_insert_Title">차량 엔진 종류</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Change_Car_sort" onChange={setCarSortValue}  value={CarSort}placeholder="ex)대형차"></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_fuel">
                                    <div className="Admin_car_insert_Title">차량 연료</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Change_Car_fuel"onChange={setCarFuelValue}  value={CarFuel}placeholder="ex)가솔린,가솔린+전기,디젤"></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_ileage">
                                    <div className="Admin_car_insert_Title">차량 연비</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="Change_Car_ileage" onChange={setCarMileageValue} value={CarMileage}placeholder="ex)복합연비 7.9~12.0 km/ℓ"></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_48_price">
                                    <div className="Admin_car_insert_Title">48개월 리스 가격</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="C_Car_48_price" placeholder="ex)200,000"value={CarPrice48} onChange={handleCarPrice48Change}></input>
                                        </div>
                                </div>
                                <div className="Admin_car_insert_car_24_price">
                                    <div className="Admin_car_insert_Title">24개월 리스 가격</div>
                                        <div className="Admin_car_insert_Input">    
                                            <input id="C_Car_24_price" placeholder="ex)400,000" value={CarPrice24} onChange={handleCarPrice24Change}></input>
                                        </div>
                                </div>
                                        </div>
                                        </div>
                                        <div>
                                        <button className="change_car_detail_button" onClick={()=>ChangeDetailCar(carlist.carCode)}>변경</button>
                                        </div>
                                        <button onClick={() =>{closePopup("DETAIL_CAR"+carlist.carCode);ValueReset(); }}className="Admin_car_list_btn_close">닫기</button>
                                    </div>
                    
                         
                                   
                                </div>   
                                
                            </td>
                            <td><button className="Admin_Car_Delete_Button" onClick={()=>CarDelete(carlist.carCode)}>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id={"INSERT_OPTION"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_insert_option_pop_inner">
                    <input type="hidden" id="HiddenTrimOptionName"></input>
                    <input type="hidden" id="HiddenTrimOptionCarCode"></input>
                    <div id="Show_Trim_Name"></div>
                    <div className="Admin_car_insert_option_container">
                        <div className="Admin_car_insert_option_left">
                            <div>옵션 이름 :</div>
                            <div>옵션 가격 :</div>
                        </div>
                        <div className="Admin_car_insert_option_right">
                            <div><input placeholder="ex)E_CLASS/열선시트 /<-필수 공백X" type="text" id="Admin_car_insert_option_name"></input></div>
                            <div><input value={CommasValue} onChange={handlePriceChange} placeholder="ex)100,000"type="text" id="Admin_car_insert_option_lease_price"></input></div>
                        </div>
                    </div>
                    <button className="Inser_Option_Submit_Button" onClick={()=>OptionInsert()}>등록</button>
                    <button onClick={() =>{closePopup("INSERT_OPTION");ValueReset();}}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>
            <div id={"ALTER_OPTION_PRICE"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_alter_price_pop_inner">
                    <input type="hidden" id="HiddenOptionName"></input>
                    <div id="Show_Option_Name"></div>
                    <div>현재 가격</div>
                    <div id="Now_Option_Value"></div>
                    <div>변경할 가격</div>
         F           <div><input value={CommasValue} onChange={handlePriceChange} type="text" id="Change_Option_Value" placeholder="ex)100,000"></input></div>
                    <div><button className="Alter_Option_Price_Button" onClick={()=>ChangeOptionPrice()}>변경</button></div>
                    <button onClick={() =>{closePopup("ALTER_OPTION_PRICE");ValueReset(); }}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>
            <div id={"INSERT_TRIM"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_insert_trim_pop_inner">
                    <input id="HiddenCarCodeValue" type="hidden"></input>
                    <input id="HiddenCarMasterName" type="hidden"></input>
                    <div className="Admin_car_insert_trim_container">
                        <div className="Admin_car_insert_trim_left">
                            <div>트림 이름 :</div>
                            <div>트림 가격 :</div>
                        </div>
                        <div className="Admin_car_insert_trim_right">
                            <div><input id="Insert_Trim_Name" placeholder="ex)180D" type="text"></input></div>
                            <div><input value={CommasValue} onChange={handlePriceChange} id="Insert_Trim_Price" placeholder="ex)100,000" type="text"></input></div>
                        </div>
                    </div>
                    <button className="Inser_Trim_Submit_Button" onClick={()=>TrimInsert()}>등록</button>
                    <button onClick={() =>{closePopup("INSERT_TRIM");ValueReset(); }}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>

            <div id={"ALTER_TRIM_PRICE"}className="Admin_car_list_pop_wrap" style={{display:'none'}}>
                <div className="Admin_car_alter_price_pop_inner">
                    <input id="HiddenTrimName" type="hidden"></input>
                    <div id="Show_Select_Trim_Name"></div>
                    <div>현재 가격</div>
                    <div id="Now_Value"></div>
                    <div>변경할 가격</div>
                    <div><input value={CommasValue} onChange={handlePriceChange} type="text" id="Change_Value_Trim"></input></div>
                    <div><button className="Alter_Trim_Price_Button" onClick={()=>ChangeTrimPrice()}>변경</button></div>
                    <button onClick={() =>{closePopup("ALTER_TRIM_PRICE"); ValueReset();}}className="Admin_car_list_btn_close">닫기</button>
                </div>
            </div>
              
        </div>
    )
}
export default AdminCar;