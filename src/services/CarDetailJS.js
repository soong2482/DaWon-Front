function CarDetailJS(){
    document.addEventListener("click", function() {
        var radios = document.getElementsByClassName('Car_Detail_Sub_Trim_Radio');
    
        for (var i = 0; i < radios.length; i++) {
            radios[i].addEventListener("click", function(event) {
                var clickedRadio = event.target;
                
                // Loop through each radio button
                for (var j = 0; j < radios.length; j++) {
                    // Uncheck the radio button if it's not the one that was clicked
                    if (radios[j] !== clickedRadio) {
                        radios[j].checked = false;
                    }
                }
            });
        }
    });
}
export default CarDetailJS;
export function SumPrice(){
    
    let sum24 =0;
    let sum48 =0;
    var car24price = document.getElementById('car24price').getAttribute('field');
    var car48price = document.getElementById('car48price').getAttribute('field');

    var radios= document.getElementsByClassName('Car_Detail_Sub_Trim_Radio')
    for (var i = 0; i < radios.length; i++) {
        if(radios[i].checked == true){
            sum24 += parseInt(removetag(radios[i].value.toString()));
            sum48 += (parseInt(removetag(radios[i].value.toString()))/2);
        }
    }
    var Optionradios= document.getElementsByClassName('Car_Detail_Sub_Option_Radio')
    for (var i = 0; i < Optionradios.length; i++) {
        if(Optionradios[i].checked == true){
            sum24 += parseInt(removetag(Optionradios[i].value.toString()));
            sum48 += (parseInt(removetag(Optionradios[i].value.toString()))/2);
        }
    }
    let price24 = document.getElementById('price24');
    let price48 = document.getElementById('price48');
   
    var spanContent24 = price24.querySelector("span").innerHTML;
    var spanContent48 = price48.querySelector("span").innerHTML;
    price24.innerHTML = "월 "+ addtag(Math.floor(sum24+parseInt(removetag(car24price.toString())))) +"원"+ " <span>" + spanContent24+"</span>";
    price48.innerHTML = "월 "+ addtag(Math.floor(sum48+parseInt(removetag(car48price.toString())))) +"원"+ " <span>" + spanContent48+"</span>";
 
}
function removetag(value){
    return value.replace(/,/g, '');
}
function addtag(value){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function windowsLocationRequest(){
    var CarName = document.getElementById("CarName").getAttribute('field');
    var Sort = "lease";
    var radios= document.getElementsByClassName('Car_Detail_Sub_Trim_Radio')
    var Optionradios= document.getElementsByClassName('Car_Detail_Sub_Option_Radio')
    var Trim = document.getElementsByClassName('Car_Detail_Sub_Trim_Text')
    var Option = document.getElementsByClassName('Car_Detail_Sub_Option_Text')
    var json = {};
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            json["Trim(등급)"] = Trim[i].getAttribute('field');
        }
    }
    json["Option(옵션)"] = [];

    // Optionradios를 반복하여 체크된 값을 배열에 추가
    for (var i = 0; i < Optionradios.length; i++) {
        if (Optionradios[i].checked == true) {
            json["Option(옵션)"].push(Option[i].getAttribute('field'));
        }
    }

    localStorage.setItem('SelectCar', JSON.stringify(json));
    window.location.href="requestpage?name="+CarName+"&sort="+Sort;
  }
