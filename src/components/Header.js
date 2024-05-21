import React, { useEffect } from 'react';
import kakaoImage from '../assets/kakao.png';
import blogImage from '../assets/blog.png';
import logo from '../assets/dawonlogo.png';
import '../styles/uicons.css';
import '../styles/headerstyle.css'; // headerstyle.css 파일 경로에 맞게 수정
import HeaderJS from '../services/headerJS.js';
const Header = () => {

  useEffect(() =>{
    HeaderJS();
  },[]);
  return (
    <header>
      <div className="container">
        <div className="title">
          <ul>
            <li>
              <a href="/">
                <img className="bong" src={logo} alt="logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="whiteback"></div>
        <ul className="menu">
          <li>
            <a id="scroll-car" href="RecommendCar" className="hide">
              추천차량<i className="fi fi-sr-angle-small-down"></i>
            </a>
          </li>
          <li>
            <a href="requestpage">견적 문의 </a>
            <i className="fi fi-sr-angle-small-down"></i>
          </li>
          <li>
            <a href="#" id="scroll-customerreview" className="hide">
              출고 후기<i className="fi fi-sr-angle-small-down"></i>
            </a>
          </li>
          <li>
            <a href="#">이벤트</a>
            <i className="fi fi-sr-angle-small-down"></i>
          </li>
        </ul>
        <ul className="sns">
          <li>
            <i className="fa fa-twitter" aria-hidden="true">
              <img src={blogImage} alt="blog" id="blog"  />
            </i>
          </li>
          <li>
            <i className="fa fa-facebook" aria-hidden="true">
              <img src={kakaoImage} alt="kakaotalk" id="kakao"  />
            </i>
          </li>
        </ul>
        <a href="#" className="menubar">
          <i className="fi fi-br-menu-burger" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;