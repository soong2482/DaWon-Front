import React, { useEffect,useState } from 'react';
import testimg1 from '../assets/car/BMW X4.png';
import testimg2 from '../assets/car/마칸 S.png';
import testimg3 from '../assets/car/벤츠 A클래스.png';
import testlogo from '../assets/logo/BENZ.png';
import CarlistJS from '../services/CarlistJS';
import axios from 'axios';
function CarList(){
  const [carList, setCarList] = useState([]);
    useEffect(() =>{
      const fetchData = async () => {
        try {
          const data = await axios.get('DaWonCar/listCar'); // CarlistJS 함수에서 listCar 함수 호출
          setCarList(data); // 받은 데이터를 상태로 설정
          console.log(data);
        } catch (error) {
          console.error('데이터를 불러오는 도중 오류 발생:', error);
        }
      };
      fetchData(); // 데이터 가져오는 함수 호출
      CarlistJS();
      },[]);

    return(
<ul className="car_list">
  <li>
    <div className="img"><img src={testimg1}/></div>
   
    <div className="logo"><img src={testlogo} alt="AUDI"/><span>testcar1</span></div>
    <hr/>

    <div className="button_div">
      <div className="button_div_asidebar">
        <div>리스<div className="sunnap">{"\u00a0"}</div></div>
       
        <div>렌트</div>
      </div>
      <div className="button_div_main">
        <div>월 <span>100,000</span>원<div className="sunnap">(선납금 30%)</div></div>

        <div>100,200</div>
      </div>
      <div className="button_buttonbar">
      <button
            id="test_id1"
     
            className="rightbutton"
        >
            견적문의</button>
            <div className="sunnap">{"\u00a0"}</div>
        <button
            id="test_id2"
 
            className="rightbutton"
            >
            견적문의</button>
      </div>
    </div>

  </li>

 
  <li>
    <div className="img"><img src={testimg2}/></div>
    <div className="logo"><img src={testlogo} alt="AUDI"/><span>testcar2</span></div>
    <hr/>

    <div className="button_div">
      <div className="button_div_asidebar">
        <div>리스<div className="sunnap">{"\u00a0"}</div></div>
       
        <div>렌트</div>
      </div>
      <div className="button_div_main">
        <div>월 <span>100,000</span>원<div className="sunnap">(선납금 30%)</div></div>

        <div>100,200</div>
      </div>
      <div className="button_buttonbar">
      <button
            id="test_id3"
        
            className="rightbutton"
            >
            견적문의</button>
            <div className="sunnap">{"\u00a0"}</div>
        <button
            id="test_id4"
   
            className="rightbutton"
            >
            견적문의</button>
      </div>
    </div>

  </li>

  <li>
    <div className="img"><img src={testimg3}/></div>
    <div className="logo"><img src={testlogo} alt="AUDI"/><span>testcar3</span></div>
    <hr/>

    <div className="button_div">
      <div className="button_div_asidebar">
        <div>리스<div className="sunnap">{"\u00a0"}</div></div>
       
        <div>렌트</div>
      </div>
      <div className="button_div_main">
        <div>월 <span>100,000</span>원<div className="sunnap">(선납금 30%)</div></div>

        <div>100,200</div>
      </div>
      <div className="button_buttonbar">
      <button
            id="test_id5"
            field="lease"
            className="rightbutton"
            >
            견적문의</button>
            <div className="sunnap">{"\u00a0"}</div>
        <button
            id="test_id6"
            field="rent"
            className="rightbutton"
            >
            견적문의</button>
      </div>
    </div>

  </li>
  <li>
    <div className="img"><img src={testimg3}/></div>
    <div className="logo"><img src={testlogo} alt="AUDI"/><span>testcar3</span></div>
    <hr/>

    <div className="button_div">
      <div className="button_div_asidebar">
        <div>리스<div className="sunnap">{"\u00a0"}</div></div>
       
        <div>렌트</div>
      </div>
      <div className="button_div_main">
        <div>월 <span>100,000</span>원<div className="sunnap">(선납금 30%)</div></div>

        <div>100,200</div>
      </div>
      <div className="button_buttonbar">
      <button
            id="test_id5"
            field="lease"
            className="rightbutton"
            >
            견적문의</button>
            <div className="sunnap">{"\u00a0"}</div>
        <button
            id="test_id6"
            field="rent"
            className="rightbutton"
            >
            견적문의</button>
      </div>
    </div>

  </li>
  <li>
    <div className="img"><img src={testimg3}/></div>
    <div className="logo"><img src={testlogo} alt="AUDI"/><span>testcar3</span></div>
    <hr/>

    <div className="button_div">
      <div className="button_div_asidebar">
        <div>리스<div className="sunnap">{"\u00a0"}</div></div>
       
        <div>렌트</div>
      </div>
      <div className="button_div_main">
        <div>월 <span>100,000</span>원<div className="sunnap">(선납금 30%)</div></div>

        <div>100,200</div>
      </div>
      <div className="button_buttonbar">
      <button
            id="test_id5"
            field="lease"
            className="rightbutton"
            >
            견적문의</button>
            <div className="sunnap">{"\u00a0"}</div>
        <button
            id="test_id6"
            field="rent"
            className="rightbutton"
            >
            견적문의</button>
      </div>
    </div>

  </li>
  <li>
    <div className="img"><img src={testimg3}/></div>
    <div className="logo"><img src={testlogo} alt="AUDI"/><span>testcar3</span></div>
    <hr/>

    <div className="button_div">
      <div className="button_div_asidebar">
        <div>리스<div className="sunnap">{"\u00a0"}</div></div>
       
        <div>렌트</div>
      </div>
      <div className="button_div_main">
        <div>월 <span>100,000</span>원<div className="sunnap">(선납금 30%)</div></div>

        <div>100,200</div>
      </div>
      <div className="button_buttonbar">
      <button
            id="test_id5"
            field="lease"
            className="rightbutton"
            >
            견적문의</button>
            <div className="sunnap">{"\u00a0"}</div>
        <button
            id="test_id6"
            field="rent"
            className="rightbutton"
            >
            견적문의</button>
      </div>
    </div>

  </li>

</ul>
    )
}
export default CarList;