import React, { useEffect,useState } from 'react';

import { windowsLocationRequest ,windowsLocationDetailRequest} from '../services/CarlistJS';
import axios from 'axios';
function CarList(){
  const [carList, setCarList] = useState([]);
    useEffect(() =>{
      const fetchData = async () => {
        try {
          const data = await axios.get('DaWonCar/RecommendListCar'); // CarlistJS 함수에서 listCar 함수 호출
          setCarList(data.data); // 받은 데이터를 상태로 설정

        } catch (error) {
          console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
      };
      fetchData(); // 데이터 가져오는 함수 호출
      },[]);

    return(
        <ul className="car_list">
        {carList.map((carlist,index)=>(
          <li  key={index} field={"CarCode"+carlist.carCode} onClick={()=>{windowsLocationDetailRequest(carlist.carCode)}}> 
            <div className="img"><img src={"/IMG/"+carlist.carImg}/></div>
            <div className="logo"><img src={"/IMG/"+carlist.carBrandImg} alt="AUDI"/><span>{carlist.masterCarName}</span></div>
            <hr/>

            <div className="button_div">
              <div className="button_div_asidebar">
                <div>리스<div className="sunnap">{"\u00a0"}</div></div>
              
                <div>렌트</div>
              </div>
              <div className="button_div_main">
                <div>월 <span>{carlist.carLeasePrice}</span>원<div className="sunnap">(선납금 30%)</div></div>

                <div>{carlist.carRentPrice}</div>
              </div>
              <div className="button_buttonbar">
              <button className="rightbutton" onClick={(event) => { event.stopPropagation(); windowsLocationRequest(carlist.masterCarName,"lease"); }}>견적문의</button>
              <div className="sunnap">{"\u00a0"}</div>
              <button className="rightbutton" onClick={(event) => { event.stopPropagation(); windowsLocationRequest(carlist.masterCarName,"rent"); }}>견적문의</button>
              </div>
            </div>
          </li>
          ))}
        </ul>
     
    )
}
export default CarList;