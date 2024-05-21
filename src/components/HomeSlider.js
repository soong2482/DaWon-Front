import React, { useState, useEffect } from 'react';
import '../styles/imgslider.css'; // 스타일링을 위해 CSS 파일을 가져옵니다.
import sliderJS from '../services/sliderJS';

import axios from 'axios';
const HomeSlider = () => {

  const [HomeBannerList,setHomeBannerList] = useState([]);
  useEffect(() => {
    sliderJS();
    const fetchDataHomeBannerList = async() =>{
      try{
          const response = await axios.get('DaWonCar/HomeBannerList');
          setHomeBannerList(response.data);
      } catch(error){ 
          console.error('데이터를 불러오는 도중 오류 발생:', error);
      }
  }
  fetchDataHomeBannerList();
  }, []); // 특정 요구에 따라 의존성을 포함시킵니다.

  return (
  <div className="slider-1">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
        <div className="slides" >
                {HomeBannerList.map((homebannerlist,index)=>(
                  <div className="active" key={index}>
                      <img src={"/IMG/"+homebannerlist.homeBannerImgURL} alt="X"/>
                 </div>
                ))}
        </div>
        <div className="page-btns">
            <div className="active"></div>
            <div></div>

        </div>
        <div className="side-btns">
            <div>
                <span><i className="fas fa-angle-left"></i></span>
            </div>
            <div>
                <span><i className="fas fa-angle-right"></i></span>
            </div>
        </div>
    </div>
  )
};
export default HomeSlider;
