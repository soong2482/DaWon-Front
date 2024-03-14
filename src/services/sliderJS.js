
function sliderJS(){
    
    document.querySelectorAll('.slider-1 > .page-btns > div').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var index = Array.from(this.parentNode.children).indexOf(this);
      
          this.classList.add('active');
          Array.from(this.parentNode.children).filter(function(sibling) {
            return sibling !== this;
          }.bind(this)).forEach(function(sibling) {
            sibling.classList.remove('active');
          });
      
          var slider = this.closest('.slider-1');
          var current = slider.querySelector('.slides > div.active');
          var post = slider.querySelectorAll('.slides > div')[index];
      
          current.classList.remove('active');
          post.classList.add('active');
        });
      });
      
      document.querySelectorAll('.slider-1 > .side-btns > div').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var slider = this.closest('.slider-1');
          var index = Array.from(this.parentNode.children).indexOf(this);
          var isLeft = index === 0;
      
          var current = slider.querySelector('.page-btns > div.active');
          var post;
      
          if (isLeft) {
            post = current.previousElementSibling;
          } else {
            post = current.nextElementSibling;
          }
      
          if (!post) {
            if (isLeft) {
              post = slider.querySelector('.page-btns > div:last-child');
            } else {
              post = slider.querySelector('.page-btns > div:first-child');
            }
          }
      
          post.click();
        });
      });
      
      setInterval(function() {
        document.querySelector('.slider-1 > .side-btns > div:nth-child(2)').click();
      }, 3000);
      
      
}
export default sliderJS;