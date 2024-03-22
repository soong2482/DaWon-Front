import "../../styles/admincustomer.css";
import React, {useState,useEffect} from 'react';
import {ChangeTextArea,openPopup,closePopup,CustomerChangeOrder,DeleteCustomerReview,InsertCustomerReview} from "../../services/AdminCustomerJS";
import DaWonLogo from "../../assets/dawonlogo.png";

import axios from 'axios';

function AdminCustomer(){
    const [CustomerReview,setCustomerReview] = useState([]);
    const [imageSrc, setImageSrc] = useState('');
    useEffect(()=>{
        const fetchDataCustomerReview = async() =>{
            try{
                const response = await axios.get('DaWonCar/CustomerReview');
                setCustomerReview(response.data);
            } catch(error){ 
                console.error('데이터를 불러오는 도중 오류 발생:', error);
            }
        }
        fetchDataCustomerReview();
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

    return(
        <div className="admincustomer_container">

            <div className="admincustomer_DawonLogo">
                <img src={DaWonLogo}></img>
            </div>
            <div className="admincustomer_Text">
                1~5번까지만 리뷰에 보입니다.
            </div>
            <div className="admin_customer_Review_Insert">
                <button onClick={() =>openPopup("admin_customer_Review_Insert")}className="Admin_customer_review_btn_open">리뷰 추가</button>
                <div id="admin_customer_Review_Insert" className="Admin_customer_review_pop_wrap" style={{display:'none'}}>
                                <div className="Admin_customer_review_pop_inner_Insert">
                                    <div className="Admin_customer_review_pop_Insert">
                                        <div className="Admin_customer_review_pop_Insert_Left">
                                            <div className="Admin_customer_review_pop_Insert_Title">
                                                <div className="Admin_customer_review_pop_Insert_Title_Text">글 제목</div>
                                                <div className="Admin_customer_review_pop_Insert_Title_Input">
                                                    <input className="Title_Input"type="text" placeholder="ex)❣ 자동차금융 다원카 ❣"></input>
                                                </div>
                                            </div>
                                            <div className="Admin_customer_review_pop_Insert_TextArea">
                                                <div className="Admin_customer_review_pop_Insert_TextArea_Title">내용</div>
                                                <div className="Admin_customer_review_pop_Insert_TextArea_Text">
                                                    <textarea id="TextArea_Text"className="TextArea_Text"
                                                    placeholder="ex)출고 소식 안내드립니다.!!^^
                                                     BMW 740i sDrive M스포츠  
                                                    블랙 사파이어 메탈릭 / 모카시트 입니다.
                                                    
                                                    일산에서 사업을 하고 계시는 대표님~!!
                                                    앞전에 좋은 인연이 되어 740Li를 이용하시다가
                                                    신형 7시리즈를 눈 여겨 보셨다가 기존 차량 정리와 동시에
                                                    신형 7시리즈 출고로 다시 한번 좋은 인연이 되어 주셨습니다.!
                                                    좋은 인연 차량 출고 하고 끝이 아닌 이용하시는 동안 끝까지
                                                    불편함 없도록 하겠습니다."
                                                    >

                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Admin_customer_review_pop_Insert_Right">
                                            <div className="Admin_customer_review_pop_Insert_Right_IMG">
                                                <div className="Admin_customer_review_pop_Insert_Right_IMG_Text">
                                                    <div className="Admin_customer_review_pop_Insert_Right_IMG_Text_Text">
                                                        이미지
                                                    </div>
                                                    <div> 
                                                        <label htmlFor="imageUpload">IMG 선택</label>
                                                        <input type="file" id="imageUpload" onChange={(e) => {
                                                                encodeFileToBase64(e.target.files[0]);
                                                            }} />
                                                    </div>
                                                </div>
                                                <div className="Admin_customer_review_pop_Insert_Right_IMG_Text_IMG">
                                                {imageSrc && <img src={imageSrc} alt="preview-img" />}
                                                </div>
                                            </div>
                                            <div className="Admin_customer_review_pop_Insert_Right_Bottom">
                                                <div className="Admin_customer_review_pop_Insert_Right_Bottom_Left">
                                                        <div>
                                                            <div>날짜</div>
                                                            <input  className="Date_Text"type="text" placeholder="ex)2024.03.13"></input>
                                                        </div>
                                                        <div>
                                                            <div>차종</div>
                                                            <input type="text"  className="CarSort_Text" placeholder="ex)포르쉐 카이엔 쿠페"></input>    
                                                        </div>
                                                </div>
                                                <div className="Admin_customer_review_pop_Insert_Right_Bottom_Right">
                                                        <div>
                                                            <div>브랜드</div>
                                                            <input type="text" className="Brand_Text" placeholder="ex)PORSCHE"></input>    
                                                        </div>
                                                        <div onClick={()=>InsertCustomerReview()}className="Admin_customer_review_pop_Insert_Right_Bottom_Right_Button"><button>등록</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pop_OUT">
                                        <button type="button" onClick={() =>closePopup("admin_customer_Review_Insert")}className="Admin_customer_review_Insert_btn_close">닫기</button>
                                    </div>
                                </div>
                            </div>    
            </div>
            <table className="admincustomer_table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Brand</th>
                        <th>CarSort</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>이미지 확인</th>
                        <th>내용 확인</th>
                        <th>내용 변경</th>
                        <th>순서 변경</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                {CustomerReview.map((customerreview,index)=>(
                    <tr key={index}>
                        <td field={customerreview.customerReviewCode} className={"Admin_customer_review_order"+customerreview.customerReviewOrder}>{customerreview.customerReviewOrder}</td>
                        <td>{customerreview.customerReviewBrand}</td>
                        <td>{customerreview.customerReviewCarsort}</td>
                        <td>{customerreview.customerReviewTitle}</td>
                        <td>{customerreview.customerReviewPrice}</td>
                        <td>{customerreview.customerReviewDate}</td>


                        <td>
                            <button field={"IMG"+customerreview.customerReviewCode} onClick={() =>openPopup("IMG"+customerreview.customerReviewCode)}className="Admin_customer_review_btn_open">이미지 확인</button>
                            <div id={"IMG"+customerreview.customerReviewCode}className="Admin_customer_review_pop_wrap" style={{display:'none'}}>
                                <div className="Admin_customer_review_pop_inner">
                                    <img src={"/IMG/"+customerreview.customerReviewImgURL}/>
                                    <button type="button" onClick={() =>closePopup("IMG"+customerreview.customerReviewCode)}className="Admin_customer_review_btn_close">닫기</button>
                                </div>
                            </div>    
                        </td>


                        <td>
                            <button field={"TEXT"+customerreview.customerReviewCode} onClick={() =>openPopup("TEXT"+customerreview.customerReviewCode)}className="Admin_customer_review_btn_open">내용 확인</button>    
                            <div id={"TEXT"+customerreview.customerReviewCode}className="Admin_customer_review_pop_wrap" style={{display:'none'}}>
                                <div className="Admin_customer_review_pop_inner">
                                     {customerreview.customerReviewTextarea}
                                    <button type="button"onClick={() =>closePopup("TEXT"+customerreview.customerReviewCode)} className="Admin_customer_review_btn_close">닫기</button>
                                </div>
                            </div>    
                        </td>
                        <td>
                            <button field={"TEXTCHANGE"+customerreview.customerReviewCode} onClick={()=> openPopup("TEXTCHANGE"+customerreview.customerReviewCode)} className="Admin_customer_review_btn_open">내용 변경</button>
                            <div id={"TEXTCHANGE"+customerreview.customerReviewCode}className="Admin_customer_review_pop_wrap" style={{display:'none'}}>
                                <div className="Admin_customer_review_pop_inner">
                                <div className="Admin_customer_review_pop_Insert_TextArea_Title">내용</div>
                                                <div className="Admin_customer_review_pop_Insert_TextArea_Text">
                                                    <textarea id="TextArea_Change"className="TextArea_Text"
                                                    placeholder="ex)출고 소식 안내드립니다.!!^^
                                                     BMW 740i sDrive M스포츠  
                                                    블랙 사파이어 메탈릭 / 모카시트 입니다.
                                                    
                                                    일산에서 사업을 하고 계시는 대표님~!!
                                                    앞전에 좋은 인연이 되어 740Li를 이용하시다가
                                                    신형 7시리즈를 눈 여겨 보셨다가 기존 차량 정리와 동시에
                                                    신형 7시리즈 출고로 다시 한번 좋은 인연이 되어 주셨습니다.!
                                                    좋은 인연 차량 출고 하고 끝이 아닌 이용하시는 동안 끝까지
                                                    불편함 없도록 하겠습니다."
                                                    >

                                                    </textarea>
                                                </div>
                                                <div className="ChangeInTextButton">
                                                    <button className="ChangeInTextButton" onClick={() =>ChangeTextArea(customerreview.customerReviewCode)}>내용 변경</button>
                                                </div>
                                    <button type="button"onClick={() =>closePopup("TEXTCHANGE"+customerreview.customerReviewCode)} className="Admin_customer_review_btn_close">닫기</button>
                                </div>
                            </div>    
                        </td>
                        <td>
                            <button field={"ORDER"+customerreview.customerReviewCode}  onClick={() =>openPopup("ORDER"+customerreview.customerReviewCode)}className="Admin_customer_review_btn_open">순서 변경</button>    
                            <div id={"ORDER"+customerreview.customerReviewCode}className="Admin_customer_review_pop_wrap" style={{display:'none'}}>
                                <div className="Admin_customer_review_pop_inner">
                                    <div className="Admin_customer_review_pop_head">
                                        순서변경팝업
                                    </div>
                                    <div>현재 순서</div>
                                    <div>{customerreview.customerReviewOrder}</div>
                                    <div>변경할 순서</div>
                                    <div><input className={'Admin_customer_review_Text'+customerreview.customerReviewOrder} type="text"></input></div>
                                    <div><button className="Admin_customer_review_btn_Change" onClick={() => CustomerChangeOrder(customerreview.customerReviewOrder)}>변경</button></div>

                                    <button type="button"  onClick={() =>closePopup("ORDER"+customerreview.customerReviewCode)}className="Admin_customer_review_btn_close" >닫기</button>
                                </div>
                            </div>    
                        </td>
                        <td><button className="Admin_customer_review_btn_close"onClick={() =>DeleteCustomerReview(customerreview.customerReviewCode)}>삭제</button></td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default AdminCustomer;