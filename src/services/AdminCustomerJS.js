

export function openPopup(id){
 var target = document.getElementById(id);
 target.style.display='block';
}
export function closePopup(id){
  var target = document.getElementById(id);
  target.style.display = 'none';
}

export async function CustomerChangeOrder(order){
  var Changeorder =document.querySelector('.Admin_customer_review_Text'+order);
  var customerReviewCode = getcustoemrReviewCode(order);
  var customerReviewOrder =order;
  var changeCustomerReviewCode =getcustoemrReviewCode(Changeorder.value);
  var changeCustomerReviewOrder = Changeorder.value;

     /* eslint-disable no-restricted-globals */
     var returnValue = confirm('변경 하시겠습니까?');
     /* eslint-enable no-restricted-globals */
     if (returnValue == true) {
         try {
             const response = await fetch("/DaWonCar/Admin/Review/ChangeOrder", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                  "customerReviewCode": customerReviewCode,
                  "customerReviewOrder": customerReviewOrder,
                  "changeCustomerReviewCode": changeCustomerReviewCode,
                  "changeCustomerReviewOrder":changeCustomerReviewOrder
                 })
   
             });
             if(response.ok){
             alert("변경 되었습니다");
             setTimeout(function() {
              alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
          }, 1000);
             window.location.href = "/adminHome";
  
             }
             else{
                 alert("변경 중에 오류가 발생했습니다.");
                 setTimeout(function() {
                  alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
              }, 1000);
                 window.location.href = "/adminHome";
             }
         } catch (error) {
             console.error("Error:", error);
             alert("변경 중에 오류가 발생했습니다.");
             setTimeout(function() {
              alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
          }, 1000);
             window.location.href = "/adminHome";
         }
     }
   
}
function getcustoemrReviewCode(order){
  var target= document.querySelector('.Admin_customer_review_order'+order);
  if(target) {
    return target.getAttribute('field');
  } else {
    console.error('요소를 찾을 수 없습니다.');
    return null;
  }
}

export async function DeleteCustomerReview(id){
   /* eslint-disable no-restricted-globals */
   var returnValue = confirm('삭제 하시겠습니까?');
   /* eslint-enable no-restricted-globals */
   if (returnValue == true) {
       try {
           const response = await fetch("/DaWonCar/Admin/Review/Delete", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
                   "CustomerReviewCode": id
               },
 
           });
           if(response.ok){
           alert("삭제 되었습니다");
           setTimeout(function() {
             alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
         }, 500);
           window.location.href = "/adminHome";
           }
           else{
               alert("삭제 중에 오류가 발생했습니다.");
               setTimeout(function() {
                 alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
             }, 1000);
               window.location.href = "/adminHome";
           }
       } catch (error) {
           console.error("Error:", error);
           alert("삭제 중에 오류가 발생했습니다.");
           setTimeout(function() {
             alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
         }, 1000);
           window.location.href = "/adminHome";
       }
   }
}
export async function InsertCustomerReview(){

  const img = document.getElementById('imageUpload');
  const customerReviewTitle = document.querySelector('.Title_Input').value;
  const customerReviewBrand=document.querySelector('.Brand_Text').value
  const customerReviewCarsort=document.querySelector('.CarSort_Text').value;
  const customerReviewPrice="미정";
  const customerReviewDate=document.querySelector('.Date_Text').value;
  const customerReviewTextarea=document.querySelector('.TextArea_Text').value
  const Review_IMG = img.files[0];
  const json= {
    "customerReviewBrand": customerReviewBrand,
    "customerReviewTextarea": customerReviewTextarea,
    "customerReviewCarsort": customerReviewCarsort,
    "customerReviewPrice": customerReviewPrice,
    "customerReviewTitle": customerReviewTitle,
    "customerReviewDate": customerReviewDate
}
const formData = new FormData();
formData.append('Review_IMG',Review_IMG);
formData.append('json',JSON.stringify(json));

   /* eslint-disable no-restricted-globals */
   var returnValue = confirm('등록 하시겠습니까?');
   /* eslint-enable no-restricted-globals */
   if (returnValue == true) {
      try {
        const response = await fetch('/DaWonCar/Admin/Review/Insert', {
          method: 'POST',
          body: formData
        });

                if(response.ok){
                alert("등록 되었습니다");
                setTimeout(function() {
                  alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
              }, 1000);
                window.location.href = "/adminHome";

                }
                else{
                    alert("등록 중에 오류가 발생했습니다.");
                    setTimeout(function() {
                      alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
                  }, 1000);
                    window.location.href = "/adminHome";
                }
            } catch (error) {
                console.error("Error:", error);
                alert("등록 중에 오류가 발생했습니다.");
                setTimeout(function() {
                  alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
              }, 1000);
                window.location.href = "/adminHome";
            }
    }
}

