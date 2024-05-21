export async function AdminLogin() {
    var id = document.getElementById('username').value;
    var password = document.getElementById('password').value;

 
    if (!id || !password) {
        alert("아이디와 비밀번호를 입력해주세요");
        return;
    }
 
    try {
        const response = await fetch("/DaWonCar/AdminLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": id,
                "password": password
            })
        });
        
        if (response.ok) {
            const cookies = response.headers.get('Set-Cookie');
            document.cookie = cookies;
            window.location.href="/AdminHome";
        } else {
            alert("아이디 혹은 비밀번호를 확인해주세요");
            return;
        }
    } catch (error) {
       
    }
}