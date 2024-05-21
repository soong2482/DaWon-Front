import React, { useEffect,useState } from 'react';
import axios from 'axios';
import '../styles/customerreview.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BMW from '../assets/car/BMW X4.png';
function CustomerReview() {
    const [CustomerReview,setCustomerReview] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const data = await axios.get('DaWonCar/CustomerReview');
                setCustomerReview(data.data);
            }catch(error){
                console.error("데이터를 불러오는 도중 오류 발생",error);
            }
        }
        fetchData();
    },[]);
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
            {CustomerReview.map((customerreview,index)=>(
                <SwiperSlide className="swiper-slide">
                <div className="swiper_slide_main">
                    <div className="swiper_slide_main_background">
                        <img src={"/IMG/"+customerreview.customerReviewImgURL}alt="picture"/>
                    </div>
                </div>
                <div className="swiper_slide_bottom">
                    <div className="bottom_1">
                        <div className="bottom_1_left">{customerreview.customerReviewBrand}</div>
                    </div>
                    <div className="bottom_title">{customerreview.customerReviewCarsort}</div>
                    <textarea disabled rows="3" className="bottom_text" readOnly>
                        {customerreview.customerReviewTextarea}
                    </textarea>
                        <div className="bottom_hr"><hr/></div>
                    <div className="bottom_date_pay">
                        <div className="bottom_date">{customerreview.customerReviewDate}</div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
       
        </div>
        <div className="swiper-pagination"></div>
        </Swiper>
        </div>
    )
}
export default CustomerReview;