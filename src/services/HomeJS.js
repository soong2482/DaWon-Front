import React, { useEffect } from 'react';
import axios from 'axios';

function HomeJS(){
  var sidebabbutton = document.querySelector('.sidebab_button');

sidebabbutton.addEventListener('click', async function () {
  var returnValue = window.confirm('문의신청을 하시겠습니까?');

  if (returnValue === true) {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var phone1 = document.getElementById('phone1').value;
    var phone2 = document.getElementById('phone2').value;
    var brand = document.getElementById('brand').value;
    var carsort = document.getElementById('carsort').value;
    var checkbox = document.getElementById('auth');


    if (checkbox.checked === false) {
      alert('개인정보 수집및 이용에 동의해주세요.');
    } else {
      var Fastinquired = {
        customerFName: name,
        customerFPhone: phone+"-"+phone1+"-"+phone2,
        customerFBrand: brand,
        customerFCarSort: carsort
      };

      try {
        const response = await axios.post('DaWonCar/FastInquired/Inquire', Fastinquired);
        console.log(response.data);
        alert('문의신청이 완료되었습니다.');
      } catch (error) {
        console.error('문의 신청 오류:', error);
        alert('문의신청 중 오류가 발생했습니다.');
      }
    }
  } else {
    alert('문의신청이 취소되었습니다.');
  }
});
document.getElementById('inquiredimg').addEventListener('click', function () {
  // 사용하고자 하는 함수
  window.location.href = 'requestpage';
});

var talk = document.querySelector('#talkimg');
talk.addEventListener('click',function(){
  window.open("https://open.kakao.com/o/s6kBd69d");
})
var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;
var changeImg = document.querySelector('#sidebab');
var sidebabbutton = document.querySelector('#sidebab_button');
var bottom_text = document.querySelector('.review_main');
// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('field');
    changeImg.style.position="static";
    sidebabbutton.style.position="static";
    bottom_text.style.position="relative";
    bottom_text.style.zIndex="-1";
    document.querySelector("#"+targetID).style.display = 'block';
  });

}
// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    changeImg.style.position="sticky";
    sidebabbutton.style.position="sticky";
    bottom_text.style.zIndex="0";
    this.parentNode.parentNode.style.display = 'none';
  });
}



}


export default HomeJS;