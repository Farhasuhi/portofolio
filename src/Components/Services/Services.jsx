import React from 'react';
import './Services.css'
import HeartEmoji from '../../assets/img/heartemoji.png'
import Glasses from '../../assets/img/glasses.png'
import humble from '../../assets/img/humble.png'
import Card from '../Card/Card';
import { motion } from "framer-motion";
const Services = () => {
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <div className='services'>
            <div className="awesome">
                <span>My Awesome </span>
                <span>Services </span>
                <span>
                    Born in 1996, AB type living in Bangladesh. I provide on-screen design for websites, <br /> as well as front-end implementation. I will continue to pursue a wide range of expressions <br /> and  better code  by pursuing our “likes”.
                </span>
                <button className='button s-button'>Hire me</button>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}>
                </div>
            </div>
            <div className="cards">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}>
                    <Card emoji={HeartEmoji} heading={'Frontend Developer'} details={'Javascript,ReactJs,Html,Css'}></Card>
                </motion.div>
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}>
                    <Card emoji={Glasses} heading={'React Developer'} details={'Javascript,ReactJs'}></Card>
                </motion.div>
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}>
                    <Card emoji={humble} heading={'Mern  stack Developer'} details={'ReactJs,Mongodb'}></Card>
                </motion.div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    );
};

export default Services;