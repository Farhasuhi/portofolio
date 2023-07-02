import React from 'react';
import './Footer.css'
import wave from '../../assets/img/wave.png'
import { FaFacebookSquare ,FaGithubSquare, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>suhifarhaislam@gmail.com</span>
                <div className="f-icons">
                    <FaFacebookSquare style={{color:'white',fontSize:'40px'}}></FaFacebookSquare>
                    <FaGithubSquare style={{color:'white',fontSize:'40px'}}></FaGithubSquare>
                    <FaLinkedin style={{color:'white',fontSize:'40px'}}></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;