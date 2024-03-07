import React from 'react';
import { RiTranslate2 } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import '../Header/Header.css'

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="headTop">
                <div className="logo">
                    <h2>NETFLIX</h2>
                </div>
                <div className="signin">
                    <div className="lang">
                        <RiTranslate2 />
                        <p>English</p>
                        <IoMdArrowDropdown />
                    </div>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header