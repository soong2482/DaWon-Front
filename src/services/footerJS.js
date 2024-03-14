function FotterJS(){
var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

document.querySelector('.kakao').addEventListener('click',function kakaotalk(){
  window.open("https://open.kakao.com/o/s6kBd69d");
})
document.querySelector('.blog').addEventListener('click',function kakaotalk(){
  window.open("https://blog.naver.com/hyenbu03");
})

for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('field');
    document.querySelector("#"+targetID).style.display = 'block';

      });

}
// 팝업 닫기

for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){

    this.parentNode.parentNode.style.display = 'none';
  });
}
}
export default FotterJS;
