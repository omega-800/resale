import React from 'react';
import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer__topArea">
                <a>Back to top</a>
            </div>
            <div className="footer__links">
                <div className="footer__linkarea">
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
                </div>
                <div className="footer__linkarea">
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                </div>
                <div className="footer__linkarea">
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;