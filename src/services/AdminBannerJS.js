
export function open(id){
    var target =document.getElementById('Admin_Banner_pop_sort'+id);
    target.style.display ='block';
  }
export function close(id){
    var target =document.getElementById('Admin_Banner_pop_sort'+id);
    target.style.display = 'none';
  }

  export function openCenter(id){
    var target =document.getElementById('Admin_Banner_pop_sorted'+id);
    target.style.display ='block';
  }
export function closeCenter(id){
    var target =document.getElementById('Admin_Banner_pop_sorted'+id);
    target.style.display = 'none';
  }

export function openChangeOrder(id){
  var target = document.getElementById('Admin_Banner_pop_Order'+id);
  target.style.display='block';
}
export function closeChangeOrder(id){
  var target = document.getElementById('Admin_Banner_pop_Order'+id);
  target.style.display='none';
}
export async function deleteHomeBanner(id){
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('삭제 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Delete/HomeBanner", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "HomeBannerCode": id
              },

          });
          if(response.ok){
          alert("삭제 되었습니다");
          setTimeout(function() {
            alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
        }, 1000);
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
export async function ChangeHomeBannerOrder(order){
var ChangeOrder = document.querySelector('.Admin_Banner_Change_Text'+order); 
var homeBannerCode= gethomeBannerCode(order);
 var homeBannerOrder = order;
 var changeHomeBannerCode =gethomeBannerCode(ChangeOrder.value);
 var changeHomeBannerOrder=ChangeOrder.value;
   /* eslint-disable no-restricted-globals */
   var returnValue = confirm('변경 하시겠습니까?');
   /* eslint-enable no-restricted-globals */
   if (returnValue == true) {
       try {
           const response = await fetch("/DaWonCar/Admin/Change/HomeBanner", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({
                "homeBannerCode": homeBannerCode,
                "homeBannerOrder": homeBannerOrder,
                "changeHomeBannerCode": changeHomeBannerCode,
                "changeHomeBannerOrder":changeHomeBannerOrder
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
function gethomeBannerCode(order){
  var target= document.querySelector('.Admin_Banner_Order'+order);
  if(target) {
    return target.getAttribute('field');
  } else {
    console.error('요소를 찾을 수 없습니다.');
    return null;
  }
}
export async function deleteCenterBanner(id){
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('삭제 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Delete/CenterBanner", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "CenterBannerCode": id
              },

          });
          if(response.ok){
          alert("삭제 되었습니다");
          setTimeout(function() {
            alert.close(); // 이 함수는 alert를 닫을 수 있는 것으로 가정합니다. (alert.close()는 존재하지 않습니다.)
        }, 1000);
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


export async function changelook(id){
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('변경 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Change/CenterBanner", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "CenterBannerCode": id
              },

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

