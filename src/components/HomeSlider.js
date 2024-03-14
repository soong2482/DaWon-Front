import React, { useState, useEffect } from 'react';
import '../styles/imgslider.css'; // 스타일링을 위해 CSS 파일을 가져옵니다.
import sliderJS from '../services/sliderJS';
import img1 from '../assets/Homebanner/DUWISANYANG.png';
import img2 from '../assets/Homebanner/Home_banner3.png';

const HomeSlider = () => {
  const [mainbanner, setMainBanner] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    sliderJS();
    // 데이터를 가져오거나 필요에 따라 mainbanner 배열을 설정합니다.
    // 예: fetch('/api/mainbanner').then(response => response.json()).then(data => setMainBanner(data));
  }, []); // 특정 요구에 따라 의존성을 포함시킵니다.

  return (
  <div className="slider-1">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
        <div className="slides" >
                <div className="active" >
                   <img src={img1} alt="X"/>
                </div>
                <div>
                   <img src={img2} alt="X"/>
                </div>
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
