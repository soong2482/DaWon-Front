import DawonLogo from "../../assets/dawonlogo.png";
import { AdminLogin } from "../../services/AdminLoginJS";
import "../../styles/admin.css";

function AdminPage(){
    return(
        <div className="admin_login_container">
                <div className="Admin_page_DawonLogo">
                    <img src={DawonLogo}></img>
                </div>
                <div className="Admin_Page_LoginForm">
                    <div className="Admin_Page_LoginForm_Left">
                        <div className="Admin_Page_LoginForm_Text">아이디:</div>
                        <div className="Admin_Page_LoginForm_Text">비밀번호:</div>
                    </div>
                    <div className="Admin_Page_LoginForm_Right">
                        <div className="Admin_Page_UserName_Password">
                            <input id="username" type="text" placeholder="아이디를 입력해주세요."></input>
                        </div>
                        <div className="Admin_Page_UserName_Password">
                            <input  id="password" type="password" placeholder="비밀번호를 입력해주세요."></input>
                        </div>
                    </div>
                </div>
                <button className="Login_Button" onClick={()=>{AdminLogin()}}>로그인</button> 
         </div>
    )   
}
export default AdminPage;