import axios from "axios";
export function location(URL){
    const newUrl = "http://localhost:3000/AdminHome?page="+URL;
    window.location.href = newUrl;
}
export async function fetchLogout() {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
        try {
            const response = await axios.post('DaWonCar/AdminLogout', {}, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (response.status === 200) { // Check the status code directly
                alert("로그아웃 하였습니다");
                document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.href = '/';
            } else {
                alert("로그아웃에 실패하였습니다");
                window.location.href = '/adminpage';
            }
        } catch (error) {
            alert("로그아웃에 실패하였습니다 or 이미 만료된 세션입니다.");
            window.location.href = '/adminpage';
        }
    }
}

