export function location(URL){
    const newUrl = "http://localhost:3000/AdminHome?page="+URL;
    window.location.href = newUrl;
}