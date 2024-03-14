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

function change(){
  var Select = document.getElementById("banner_size");

  var itemID = Select.options[Select.selectedIndex].value;
  var form = document.getElementById('form');
  var inputvalue = document.getElementById('name');
  if(itemID==="Home_banner")
  {
    form.action="adminhomebannerupload";
    inputvalue.name="Home_name";
  }
  else if(itemID==="center_banner"){
    inputvalue.name="center_name";
    form.action="admincenterbannerupload";
  }
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
function changelook(id){
var returnValue= confirm('변경 하시겠습니까?');

    if(returnValue==true){
        var AlterCenterBannerForm={
                id:id
            };
            $.ajax({
                url: "changelook",
                type: "POST",
                data : AlterCenterBannerForm,

            })
            .done(function(){
              alert("완료처리되었습니다.");
            })
    }
}
function changenumber(id,number){
var returnValue= confirm('변경 하시겠습니까?');
    var num = document.querySelector(".changenumber"+number).value;

    if(returnValue==true){
        var AlterHomeBannerForm={
            id:id,
            number:number,
            num:num
        };
        $.ajax({
            url: "changeadminhomebanner",
            type: "POST",
            data : AlterHomeBannerForm,

        })
        .done(function(){
          alert("완료처리되었습니다.");
        })
    }
}
function update(id,number){
    var returnValue= confirm('삭제 하시겠습니까?');
    if(returnValue==true){
        var AlterHomeBannerForm={
            id:id,
            number:number
        };
        $.ajax({
            url: "removeadminhomebanner",
            type: "POST",
            data : AlterHomeBannerForm,

        })
        .done(function(){
          alert("완료처리되었습니다.");
        })
    }
 }
 function update2(id){
     var returnValue= confirm('삭제 하시겠습니까?');
     if(returnValue==true){
         var AdminCenterBanner={
             id:id
         };
         $.ajax({
             url: "removeadmincenterbanner",
             type: "POST",
             data : AdminCenterBanner,

         })
         .done(function(){
           alert("완료처리되었습니다.");
         })
     }

  }