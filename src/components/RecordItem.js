import React, { useState, useEffect } from 'react';
import '../styles/recorditem.css';
import {widnowsLocationDetail} from "../services/RecordItemJS";
function RecordItem(){
    const[RecordCarCode,setRecordCarCode] = useState([]);
    const[RecordCarIMG,setRecordCarIMG] = useState([]);
    useEffect(() => {
        const RecordCar = localStorage.getItem('RecordCar');
        if (RecordCar !== null) {
            const CarCodeobj = JSON.parse(RecordCar);
    
            const CarCodeArr = Object.keys(CarCodeobj.CarCode).map(key => CarCodeobj.CarCode[key]);
            const CarImgArr = Object.keys(CarCodeobj.CarImg).map(key => CarCodeobj.CarImg[key]);       
            setRecordCarCode(CarCodeArr);
            setRecordCarIMG(CarImgArr);
        }
    }, []);
    
    return(
        <div className='RecordItemContainer'>
            <div className='RecordText'>
                최근 본 차량
            </div>
            {RecordCarCode.map((code, index) => (
            <div key={index} className='RecordItem' onClick={() =>{widnowsLocationDetail(code)}}>
                <div className='RecordItemList' field={code}>
                    <img src={"IMG"+RecordCarIMG[index]}></img>
                </div>
            </div>
            ))}
        </div>
    )
}
export default RecordItem;