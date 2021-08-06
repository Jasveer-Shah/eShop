import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';


function Footer() {


    return (
        <div className="footer__container">
            <div className="footer__inner">
                <div className="footer__links">
                    <a href="">Link 1</a>
                    <a href="">Line 2</a>
                    <a href="">Link 3</a>
                </div>
                <div className="footer__social">
                    <a href=""><FontAwesomeIcon className="facebook social__icon" icon={faFacebook} size="2x" color="#4267B2" /></a>
                    <a href=""><FontAwesomeIcon className="twitter social__icon" icon={faTwitter} size="2x" color="#1DA1F2" /></a>
                    <a href=""><FontAwesomeIcon className="instagram social__icon" icon={faInstagram} size="2x" color="#000000" /></a>
                    <a href=""><FontAwesomeIcon className="pinterest social__icon" icon={faPinterest} size="2x" color="#E60023" /></a>
                </div>
                <div>
                    <p>COPYRIGHT © 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
