import DawonLogo from "../../assets/dawonlogo.png";
import "../../styles/admin.css";
function AdminPage(){
    return(
        <div className="admin_login_container">
        <div className="sidebar"></div>
        <div className="main">
            <div className="top"></div>
            <div className="login_main">
                <form className="form_login">
                <div className="dawonlogo"><img src={DawonLogo}/></div>
                    <div className="input">
                        <div><input  id="username" name="username"type="text" placeholder="아이디를 입력하세요."/></div>
                        <div><input id="password" name="password"type="text" placeholder="비밀번호를 입력하세요."/></div>
                    </div>
                    <button type="submit">login</button>
                </form>
            </div>
            <div className="bottom"></div>
        </div>
        <div className="sidebab"></div>
     </div>
    )
}
export default AdminPage;