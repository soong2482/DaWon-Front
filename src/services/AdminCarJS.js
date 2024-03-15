export function openPopup(id){
  var target = document.getElementById(id);
  target.style.display='block';
 }
 export function closePopup(id){
   var target = document.getElementById(id);
   target.style.display = 'none';
 }
 export function openInsertTrimPopup(id,CarCode){
  var target = document.getElementById(id);
  var hidden = document.getElementById('HiddenCarCodeValue');
  hidden.value=CarCode;

  target.style.display='block';
 }
 export function openAlterTrimPopup(id,TrimPrice,TrimName){
  var target = document.getElementById(id);
  var showtarget = document.getElementById('Show_Select_Trim_Name');
  var Now_Value = document.getElementById('Now_Value');
  var Trim_Name = document.getElementById('HiddenTrimName');
  Now_Value.innerHTML=TrimPrice;
  Trim_Name.value=TrimName;
  target.style.display='block';
  showtarget.innerHTML="현재 선택된 트림: "+TrimName;
 }
export async function deleteTrim(){

}
export function openInsertOptionPopup(id,TrimName){
  var target = document.getElementById(id);
  var hidden = document.getElementById('HiddenTrimOptionName');
  hidden.value=TrimName;
  var showtarget = document.getElementById('Show_Trim_Name');
  showtarget.innerHTML="현재 선택된 트림: "+TrimName;
  target.style.display='block';
}
export function openAlterOptionPopup(id,OptionPrice,OptionName){
  var target = document.getElementById(id);
  var showtarget = document.getElementById('Show_Option_Name');
  var Now_Value = document.getElementById('Now_Option_Value');
  var Option_Name = document.getElementById('HiddenOptionName');
  Now_Value.innerHTML=OptionPrice;
  Option_Name.value=OptionName;
  showtarget.innerHTML="현재 선택된 옵션: "+OptionName;
  target.style.display='block';
}