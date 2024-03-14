import axios from 'axios';
export async function done(id){
    /* eslint-disable no-restricted-globals */
    var returnValue= confirm('완료처리 하시겠습니까?');
    /* eslint-enable no-restricted-globals */
    if(returnValue==true){
        try{

            const response = await fetch("/DaWonCar/Admin/SuccessFastInquired",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "FastInquired": id
                },

            });
            if(response.ok){
                alert("완료 처리 되었습니다");
                window.location.href = "/adminHome";
                }
                else{
                    alert("변경 중에 오류가 발생했습니다.");
                    window.location.href = "/adminHome";
                }
        }catch(error) {
            console.error("Error:", error);
            alert("변경 중에 오류가 발생했습니다.");
        }

    
        
    }
 }
 export async function remove(id) {
    /* eslint-disable no-restricted-globals */
    var returnValue = confirm('삭제 하시겠습니까?');
    /* eslint-enable no-restricted-globals */
    if (returnValue == true) {
        try {
            const response = await fetch("/DaWonCar/Admin/DeleteFastInquired", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "FastInquired": id
                },

            });
            if(response.ok){
            alert("삭제 되었습니다");
            window.location.href = "/adminHome";
            }
            else{
                alert("삭제 중에 오류가 발생했습니다.");
                window.location.href = "/adminHome";
            }
        } catch (error) {
            console.error("Error:", error);
            alert("삭제 중에 오류가 발생했습니다.");
            window.location.href = "/adminHome";
        }
    }
}
