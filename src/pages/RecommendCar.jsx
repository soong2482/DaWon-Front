import Header from "../hooks/Header";
import Fotter from '../hooks/Fotter';
import '../styles/recommendcar.css';
import RecommendCarBanner from "../assets/Centerbanner/center_banner2.png"
function RecommendCar(){
    
    return(
        <div className="RecommendCar_Container">
            <div className="RecommendCar_Header">
                <Header/>
            </div>

            <div className="RecommendCar_Banner">
                <img src={RecommendCarBanner}></img>
            </div>

            <div className="RecommendCar_Footer">
                <Fotter/>    
            </div>
        </div>
    )
}
export default RecommendCar;