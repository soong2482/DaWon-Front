import { Form } from "react-router-dom";
import axios from 'axios';
export function openPopup(id){
  var target = document.getElementById(id);
  target.style.display='block';
 }
 export function closePopup(id){
   var target = document.getElementById(id);
   target.style.display = 'none';
 }
 export function openInsertTrimPopup(id,CarCode,masterCarName){
  var target = document.getElementById(id);
  var hidden = document.getElementById('HiddenCarCodeValue');
  var hidden2 = document.getElementById('HiddenCarMasterName');

  hidden.value=CarCode;
  hidden2.value=masterCarName;
  target.style.display='block';
 }
 export function openAlterTrimPopup(id,TrimPrice,TrimName){
  var target = document.getElementById(id);
  var showtarget = document.getElementById('Show_Select_Trim_Name');
  var Now_Value = document.getElementById('Now_Value');
  var Trim_Name = document.getElementById('HiddenTrimName');
  Now_Value.innerHTML=TrimPrice;
  Trim_Name.value=TrimName;
  target.style.display='block';
  showtarget.innerHTML="현재 선택된 트림: "+TrimName;
 }

export function openInsertOptionPopup(id,TrimName,CarCode){
  var hidden2 = document.getElementById("HiddenTrimOptionCarCode");
  var target = document.getElementById(id);
  var hidden = document.getElementById('HiddenTrimOptionName');
  hidden.value=TrimName;
  hidden2.value=CarCode;
  var showtarget = document.getElementById('Show_Trim_Name');
  showtarget.innerHTML="현재 선택된 트림: "+TrimName;
  target.style.display='block';
}
export function openAlterOptionPopup(id,OptionPrice,OptionName){
  var target = document.getElementById(id);
  var showtarget = document.getElementById('Show_Option_Name');
  var Now_Value = document.getElementById('Now_Option_Value');
  var Option_Name = document.getElementById('HiddenOptionName');
  Now_Value.innerHTML=OptionPrice;
  Option_Name.value=OptionName;
  showtarget.innerHTML="현재 선택된 옵션: "+OptionName;
  target.style.display='block';
}
export async function CarInsert(){
  var masterCarName = document.querySelector(".Admin_car_insert_Car_Name").value;
  var carLeasePrice = document.querySelector(".Admin_car_insert_Car_Lease").value;
  var carRentPrice =  document.querySelector(".Admin_car_insert_Car_Rent").value;
  var carBrand = document.querySelector(".Admin_car_insert_Brand_Select").value;
  var img = document.getElementById('imageUpload');
  var Car_original_price = document.getElementById('Car_original_price').value;
  var Car_sort = document.getElementById('Car_sort').value;
  var Car_fuel = document.getElementById('Car_fuel').value;
  var Car_mileage = document.getElementById('Car_ileage').value;
  var Car_48_price = document.getElementById('Car_48_price').value;
  var Car_24_price = document.getElementById('Car_24_price').value;

  const Car_IMG = img.files[0];
  const MasterCarjson= {
    "masterCarName": masterCarName,
    "carLeasePrice": carLeasePrice,
    "carRentPrice": carRentPrice,
    "carBrandName": carBrand,
    "carRealPrice" : Car_original_price,
    "carSort" : Car_sort,
    "carFuel": Car_fuel,
    "carMileage": Car_mileage,
    "car48Price": Car_48_price,
    "car24Price": Car_24_price
}

const formData = new FormData();
formData.append('Car_IMG',Car_IMG);
formData.append('AddCar',JSON.stringify(MasterCarjson));
   /* eslint-disable no-restricted-globals */
var returnValue = confirm('등록 하시겠습니까?');
/* eslint-enable no-restricted-globals */
if (returnValue == true) {
   try {
     const response = await fetch('/DaWonCar/Admin/InsertCar', {
       method: 'POST',
       body: formData
     });
             if(response.ok){
             alert("등록 되었습니다");
             window.location.href = "/adminHome?page=AdminCar"
             }
             else{
                 alert("등록 중에 오류가 발생했습니다.");
             }
         } catch (error) {
             console.error("Error:", error);
             alert("등록 중에 오류가 발생했습니다.");
         }
 }
}

export async function TrimInsert(){
  const carCodeValue =document.getElementById('HiddenCarCodeValue').value;
  const carTrimNameValue = document.getElementById('Insert_Trim_Name').value;
  const carTrimPriceValue = document.getElementById('Insert_Trim_Price').value;
  const masterCarName= document.getElementById('HiddenCarMasterName').value;

     /* eslint-disable no-restricted-globals */
     var returnValue = confirm('등록 하시겠습니까?');
     /* eslint-enable no-restricted-globals */
     if (returnValue == true) {
         try {
             const response = await fetch("/DaWonCar/Admin/InsertTrim", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({
                  "carTrim":{
                    "carCode": carCodeValue,
                    "carTrimName": carTrimNameValue,
                    "carTrimPrice": carTrimPriceValue
                  },
                  "masterCarName": masterCarName
                })
             });
             if(response.ok){
             alert("등록 되었습니다");
             window.location.href = "/adminHome?page=AdminCar";
        
             }
             else{
                 alert("등록 중에 오류가 발생했습니다.");
             }
         } catch (error) {
             console.error("Error:", error);
             alert("등록 중에 오류가 발생했습니다.");
         }
     }
}

export async function OptionInsert(){
  const carCodeValue = document.getElementById('HiddenTrimOptionCarCode').value;
  const carTrimName = document.getElementById('HiddenTrimOptionName').value;
  const carOption =document.getElementById('Admin_car_insert_option_name').value;
  const carOptionLeasePrice =document.getElementById('Admin_car_insert_option_lease_price').value;
  /* eslint-disable no-restricted-globals */
   var returnValue = confirm('등록 하시겠습니까?');
   /* eslint-enable no-restricted-globals */
   
   if (returnValue == true) {
       try {
           const response = await fetch("/DaWonCar/Admin/InsertOption", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({
                "carCode": carCodeValue,
                "carTrimName": carTrimName,
                "carOption": carOption,
                "carOptionLeasePrice": carOptionLeasePrice
              })
           });
           if(response.ok){
           alert("등록 되었습니다");
           window.location.href = "/adminHome?page=AdminCar";
      
           }
           else{
               alert("등록 중에 오류가 발생했습니다.");
           }
       } catch (error) {
           console.error("Error:", error);
           alert("등록 중에 오류가 발생했습니다.");
       }
   }
}
export async function ChangeTrimPrice(){
 const TrimName = document.getElementById('HiddenTrimName').value;
 const ChangeValueTrim = document.getElementById('Change_Value_Trim').value;
 /* eslint-disable no-restricted-globals */
 var returnValue = confirm('변경 하시겠습니까?');
 /* eslint-enable no-restricted-globals */
 
 if (returnValue == true) {
     try {
         const response = await fetch("/DaWonCar/Admin/Change/TrimPrice", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body:JSON.stringify({
                "TrimName": TrimName,
                "ChangeValueTrim": ChangeValueTrim
             })
         });
         if(response.ok){
         alert("등록 되었습니다");
         window.location.href = "/adminHome?page=AdminCar";
    
         }
         else{
             alert("등록 중에 오류가 발생했습니다.");
         }
     } catch (error) {
         console.error("Error:", error);
         alert("등록 중에 오류가 발생했습니다.");
     }
 }
}

export async function ChangeOptionPrice(){
  const OptionName = document.getElementById('HiddenOptionName').value;
  const ChangeValueOption = document.getElementById('Change_Option_Value').value;
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('변경 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Change/OptionPrice", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body:JSON.stringify({
                "OptionName": OptionName,
                "ChangeValueOption": ChangeValueOption
             })
          });
          if(response.ok){
          alert("등록 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("등록 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("등록 중에 오류가 발생했습니다.");
      }
  }
 }
 export async function deleteTrim(CarCode, CarTrimName) {
     /* eslint-disable no-restricted-globals */
  var returnValue = confirm('삭제 하시겠습니까?');
  /* eslint-enable no-restricted-globals */

    if (returnValue === true) {
        try {
            const encodedCarTrimName = encodeURIComponent(CarTrimName);
            const response = await axios.post("/DaWonCar/Admin/CarTrimDelete", {
                CarCode: CarCode,
                CarTrimName: CarTrimName
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    "CarCode": CarCode,
                    "CarTrimName": encodedCarTrimName 
                 })
            });

            if (response.status === 200) {
                alert("삭제 되었습니다");
                window.location.href = "/adminHome?page=AdminCar";
            } else {
                alert("삭제 중에 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("삭제 중에 오류가 발생했습니다.");
        }
    }
}

 export async function deleteOption(CarCode,CarOption){
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('삭제 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/CarOptionDelete", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body:JSON.stringify({
                "CarOption": CarOption,
                "CarCode": CarCode
             })
              
          });
          if(response.ok){
          alert("삭제 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("삭제 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("삭제 중에 오류가 발생했습니다.");
      }
  }
 }
 export async function UpdateRecommendCar(CarCode){
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('추천차량으로 등록/해제 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/UpdateRecommendCar", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "CarCode": CarCode
              },
          });
          if(response.ok){
          alert("변경 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("변경 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("변경 중에 오류가 발생했습니다.");
      }
  }
 }
 export async function DeleteBrand(masterCarBrandName) {
    /* eslint-disable no-restricted-globals */
    var returnValue = confirm('브랜드를 삭제 하시겠습니까');
    /* eslint-enable no-restricted-globals */
    if (returnValue == true) {
      try {
        const response = await fetch("/DaWonCar/Admin/CarBrandDelete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:masterCarBrandName
        });
        if (response.ok) {
          alert("삭제 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
        } else {
          alert("삭제 중에 오류가 발생했습니다.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("삭제 중에 오류가 발생했습니다.");
      }
    }
  }


 export async function CarDelete(CarCode){
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('차량을 삭제 하시겠습니까?(복구불가)');
  /* eslint-enable no-restricted-globals */
  
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/CarDelete", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "CarCode": CarCode
              },
          });
          if(response.ok){
          alert("삭제 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("삭제 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("삭제 중에 오류가 발생했습니다.");
      }
  }
 }
 export async function ChangeCarOrder(){
 var CarCode = document.getElementById('HiddenCarCodeOrder').value;
 var CarOrder = document.getElementById('Now_Car_Order').value;
 var ChangeCarOrder = document.getElementById('Change_Order_Car').value;
 console.log(CarCode+" "+CarOrder+" "+ChangeCarOrder);
      /* eslint-disable no-restricted-globals */
  var returnValue = confirm('차량 순서를 변경 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  
    
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/UpdateCarOrder", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "CarCode": CarCode,
                  "CarOrder": CarOrder,
                  "ChangeCarOrder": ChangeCarOrder
              },
          });
          if(response.ok){
          alert("변경 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("변경 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("변경 중에 오류가 발생했습니다.");
      }
  }
 }
 export async function ChangeCarLeasePrice(carCode){
 var ChangeLeasePriceCar = document.getElementById('Change_Lease_Price_Car').value;
 
      /* eslint-disable no-restricted-globals */
  var returnValue = confirm('차량 가격을 변경 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  
    
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Change/CarLeasePrice", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "CarCode": carCode,
                "ChangeLeasePriceCar":ChangeLeasePriceCar
              })
          });
          if(response.ok){
          alert("변경 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("변경 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("변경 중에 오류가 발생했습니다.");
      }
  }
 }
   
 export async function InsertBrand(){
    var masterCarBrandName = document.querySelector("#Admin_Car_brand_inserT_input").value;
    var img = document.getElementById('imageUploadBrand');
    const Car_Brand_IMG = img.files[0];
  const formData = new FormData();
  formData.append('Car_Brand_IMG',Car_Brand_IMG);
  formData.append('Master_Car_Brand_Name',masterCarBrandName);
     /* eslint-disable no-restricted-globals */
  var returnValue = confirm('등록 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  if (returnValue == true) {
     try {
       const response = await fetch('/DaWonCar/Admin/InsertBrand', {
         method: 'POST',
         body: formData
       });
               if(response.ok){
               alert("등록 되었습니다");
               window.location.href = "/adminHome?page=AdminCar"
               }
               else{
                   alert("등록 중에 오류가 발생했습니다.");
               }
           } catch (error) {
               console.error("Error:", error);
               alert("등록 중에 오류가 발생했습니다.");
           }
   }
  }
  export async function ChangeDetailCar(carCode){
    var carRealPrice = document.getElementById('C_Car_original_price').value;
    var carSort = document.getElementById('Change_Car_sort').value;
    var carFuel = document.getElementById('Change_Car_fuel').value;
    var carMileage = document.getElementById('Change_Car_ileage').value;
    var car48Price = document.getElementById('C_Car_48_price').value;
    var car24Price = document.getElementById('C_Car_24_price').value;
          
   
    /* eslint-disable no-restricted-globals */
  var returnValue = confirm('차량 정보를 변경 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  
    
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Change/CarDetail", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "carCode": carCode,
                "carRealPrice": carRealPrice,
                "carSort": carSort,
                "carMileage": carMileage,
                "carFuel":carFuel,
                "car48Price": car48Price,
                "car24Price": car24Price 
              })
          });
          if(response.ok){
          alert("변경 되었습니다");
          window.location.href = "/adminHome?page=AdminCar";
     
          }
          else{
              alert("변경 중에 오류가 발생했습니다.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("변경 중에 오류가 발생했습니다.");
      }
  }
  }