function headerJS(){
    
    document.querySelector('.menubar').addEventListener('click', function () {
        var menu = document.querySelector('.menu');
        var sns = document.querySelector('.sns');
    
        // 현재 클래스를 확인하여 토글
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
          sns.classList.remove('active');
        } else {
          menu.classList.add('active');
          sns.classList.add('active');
        }
      });
      document.querySelector('#kakao').addEventListener('click',function kakaotalk(){
        window.open("https://open.kakao.com/o/s6kBd69d");
    })
    document.querySelector('#blog').addEventListener('click',function kakaotalk(){
        window.open("https://blog.naver.com/hyenbu03");
    })
}
export default headerJS;