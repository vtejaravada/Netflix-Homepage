import React from 'react';
import { RiTranslate2 } from "react-icons/ri";
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headTop">
                    <div className="logo">
                        <h2>Entertainment</h2>
                    </div>
                    <div className="signin">
                        <div className="lang">
                            <RiTranslate2 />
                            <div id="google_translate_element" className="translate-element"></div>
                        </div>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
