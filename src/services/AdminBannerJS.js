
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
          window.location.href = "/adminHome?page=AdminBanner";
          }
          else{
              alert("삭제 중에 오류가 발생했습니다.");
              window.location.href = "/adminHome?page=AdminBanner";
          }
      } catch (error) {
          console.error("Error:", error);
          alert("삭제 중에 오류가 발생했습니다.");
          window.location.href = "/adminHome?page=AdminBanner";
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
           window.location.href = "/adminHome?page=AdminBanner";

           }
           else{
               alert("변경 중에 오류가 발생했습니다.");
               window.location.href = "/adminHome?page=AdminBanner";
           }
       } catch (error) {
           console.error("Error:", error);
           alert("변경 중에 오류가 발생했습니다.");
           window.location.href = "/adminHome?page=AdminBanner";
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
          window.location.href = "/adminHome?page=AdminBanner";
          }
          else{
              alert("삭제 중에 오류가 발생했습니다.");
              window.location.href = "/adminHome?page=AdminBanner";
          }
      } catch (error) {
          console.error("Error:", error);
          alert("삭제 중에 오류가 발생했습니다.");
          window.location.href = "/adminHome?page=AdminBanner";
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
          window.location.href = "/adminHome?page=AdminBanner";
          }
          else{
            
              alert("변경 중에 오류가 발생했습니다.");
              window.location.href = "/adminHome?page=AdminBanner";
          }
      } catch (error) {
          console.error("Error:", error);
          alert("변경 중에 오류가 발생했습니다.");
          window.location.href = "/adminHome?page=AdminBanner";
      }
  }
}
export async function InsertBanner(){
  const img = document.getElementById('imageUpload');
  const Sort = document.querySelector(".Admin_car_insert_Brand_Select").value;
  const BannerName = document.getElementById('Admin_Banner_Input_Name').value;
  const formData = new FormData();
  if(Sort==="CenterBanner"){
    const Center_Banner_IMG = img.files[0];
    const Center_Banner_Name=BannerName;
    formData.append('Center_Banner_IMG',Center_Banner_IMG);
    formData.append('Center_Banner_Name',Center_Banner_Name);
  }
  if(Sort==="HomeBanner"){
     const Home_Banner_IMG = img.files[0];
     const Home_Banner_Name=BannerName;
     formData.append('Home_Banner_IMG',Home_Banner_IMG);
     formData.append('Home_Banner_Name',Home_Banner_Name);
  }
  /* eslint-disable no-restricted-globals */
  var returnValue = confirm('등록 하시겠습니까?');
  /* eslint-enable no-restricted-globals */
  if (returnValue == true) {
      try {
          const response = await fetch("/DaWonCar/Admin/Insert/"+Sort, {
              method: "POST",
              body:formData
          });
          if(response.ok){
          alert("등록 되었습니다");
          window.location.href = "/adminHome?page=AdminBanner";
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

