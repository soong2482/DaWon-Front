import React, { useEffect } from 'react';

import '../styles/customerreview.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BMW from '../assets/car/BMW X4.png';
function CustomerReview() {
    return(
        <div>
        <Swiper className="swiper mySwiper"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >    
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
                <div className="swiper_slide_main">
                    <div className="swiper_slide_main_background">
                        <img src={BMW}alt="picture"/>
                    </div>
                </div>
                <div className="swiper_slide_bottom">
                    <div className="bottom_1">
                        <div className="bottom_1_left">BMW</div>
                    </div>
                    <div className="bottom_title">BMW 740i sDrive M스포츠</div>
                    <textarea disabled  defaultValue={'❣ 자동차금융 다원카 ❣ 출고 소식 안내드립니다.!!^^ " BMW 740i sDrive M스포츠 " 블랙 사파이어 메탈릭 / 모카시트 입니다.'} rows="3" className="bottom_text" readOnly></textarea>
                        <div className="bottom_hr"><hr/></div>
                    <div className="bottom_date_pay">
                        <div className="bottom_date">2023.07.01</div>
                    </div>
                </div>
         </SwiperSlide>
         <SwiperSlide className="swiper-slide">
                <div className="swiper_slide_main">
                    <div className="swiper_slide_main_background">
                        <img src={BMW}alt="picture"/>
                    </div>
                </div>
                <div className="swiper_slide_bottom">
                    <div className="bottom_1">
                        <div className="bottom_1_left">BMW</div>
                    </div>
                    <div className="bottom_title">BMW 740i sDrive M스포츠</div>
                    <textarea disabled defaultValue={'❣ 자동차금융 다원카 ❣ 출고 소식 안내드립니다.!!^^ " BMW 740i sDrive M스포츠 " 블랙 사파이어 메탈릭 / 모카시트 입니다.'} rows="3" className="bottom_text" readOnly></textarea>
                        <div className="bottom_hr"><hr/></div>
                    <div className="bottom_date_pay">
                        <div className="bottom_date">2023.07.01</div>
                    </div>
                </div>
         </SwiperSlide>
         <SwiperSlide className="swiper-slide">
                <div className="swiper_slide_main">
                    <div className="swiper_slide_main_background">
                        <img src={BMW}alt="picture"/>
                    </div>
                </div>
                <div className="swiper_slide_bottom">
                    <div className="bottom_1">
                        <div className="bottom_1_left">BMW</div>
                    </div>
                    <div className="bottom_title">BMW 740i sDrive M스포츠</div>
                    <textarea disabled defaultValue={'❣ 자동차금융 다원카 ❣ 출고 소식 안내드립니다.!!^^ " BMW 740i sDrive M스포츠 " 블랙 사파이어 메탈릭 / 모카시트 입니다.'} rows="3" className="bottom_text" readOnly></textarea>
                        <div className="bottom_hr"><hr/></div>
                    <div className="bottom_date_pay">
                        <div className="bottom_date">2023.07.01</div>
                    </div>
                </div>
         </SwiperSlide>

         
        </div>
        <div className="swiper-pagination"></div>
        </Swiper>
        </div>
    )
}
export default CustomerReview;