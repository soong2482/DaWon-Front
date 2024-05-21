import axios from 'axios';


  export function windowsLocationRequest(CarName,Sort){
    window.location.href="requestpage?name="+CarName+"&sort="+Sort;
  }
  export function windowsLocationDetailRequest(CarCode, CarImg) {
    var existingData = localStorage.getItem('RecordCar');
    var json = existingData ? JSON.parse(existingData) : {};
    if(!json["CarCode"] || DuplicatedCarCode(json,CarCode)){
      json["CarCode"] = json["CarCode"] || [];
      json["CarImg"] = json["CarImg"] || [];
      if(json["CarCode"].length >= 3){
        json["CarCode"].shift(); 
        json["CarImg"].shift(); 
      }
      json["CarCode"].push(CarCode);
      json["CarImg"].push(CarImg);
      localStorage.setItem('RecordCar', JSON.stringify(json));
    }
    window.location.href = "DetailCar?carCode=" + CarCode;
}
function DuplicatedCarCode(json,CarCode){
  for(var i=0; i<json["CarCode"].length; i++){
    if(json["CarCode"][i]==CarCode){
      return false;
    }
  }
  return true;
}
