var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
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

 function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById('preview').src = "";
  }
}
 function updateprice(id,number){
     var returnValue= confirm('변경 하시겠습니까?');
     var price = document.querySelector(".change_price_value"+number).value;
     if(returnValue==true){
         var AlterCarForm={
             id:id,
             car_changeprice:price
         };
         $.ajax({
             url: "updatecarprice",
             type: "POST",
             data : AlterCarForm,

         })
         .done(function(){
           alert("완료처리되었습니다.");
           window.location.reload();
         })
     }

  }

function changenumber(id,number){
var returnValue= confirm('변경 하시겠습니까?');
    var num = document.querySelector(".changenumber"+number).value;
    if(returnValue==true){
        var AlterCarForm={
            id:id,
            car_changenumber:num,
            car_number:number
        };
        $.ajax({
            url: "changenumbercar",
            type: "POST",
            data : AlterCarForm,

        })
        .done(function(){
          alert("완료처리되었습니다.");
          window.location.reload();
        })
    }
}
function remove(id,number){
    var returnValue= confirm('삭제 하시겠습니까?');
    if(returnValue==true){
        var AlterCarForm={
            id:id,
            car_number:number
        };
        $.ajax({
            url: "removecar",
            type: "POST",
            data : AlterCarForm,

        })
        .done(function(){
          alert("완료처리되었습니다.");
          window.location.reload();
        })
    }
 }
