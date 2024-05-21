import Header from "../components/Header";
import Fotter from '../components/Fotter';
import '../styles/recommendcar.css';
import RecommendCarBanner from "../assets/back.png"
import CarList from "../components/RecommendCar";
import RecordItem from "../components/RecordItem";
import CallRequestPopup from "../components/CallRequestPopup";
function RecommendCar(){
    
    return(
        <div className="RecommendCar_Container">
            <div className="RecommendCar_Header">
                <Header/>
            </div>

            <div className="RecommendCar_Banner">
                <img src={RecommendCarBanner}></img>
            </div>
            <div className="RecommendCar_InContainer">
                <div className="RecommendCar_Left_Sidebar">
                    <div className="RecommendCar_Left_Container">
                        <div className="RecommendCar_record_item">
                            <RecordItem/>
                        </div>
                    </div>
                </div>
                <div className="RecommendCar_Center_Content">
                    <div className="Recommend_Title">
                        <span className="Text_Font">
                            <span className="D_Color">D</span>
                            <span className="A_Color">a</span>
                            wonCar 
                        </span>  
                        <span className="Recommend_Text">추천차량</span>
                         <p className="p_color">고객님들이 많이 찾으시는 차량을 추천해드립니다.</p>
                    </div>
                    <div id="carlist">
                     <CarList/>
                    </div>
                </div>
                <div className="RecommendCar_Right_Container">
                    <div className="Recommend_Call_Img">
                        <CallRequestPopup/>
                    </div>
                </div>  
            </div>
            <div className="RecommendCar_Footer">
                <Fotter/>    
            </div>
        </div>
    )
}
export default RecommendCar;