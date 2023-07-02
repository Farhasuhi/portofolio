import React from 'react';
import './Skills.css'
import html from '../../assets/img/html.png'
import bootstrap from '../../assets/img/download.png'
import css from '../../assets/img/css.png'
import mongodb from '../../assets/img/mongodb.png'
import react from '../../assets/img/react.png'
import javascript from '../../assets/img/javascript.png'
import { motion } from "framer-motion";
const Skills = () => {
    return (
        <div className='skills'>
            <div className="awesome">
                <span>My Technical </span>
                <span>Skills </span>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}>
                </div>
                <div className='progress'>
                    <div className='skill'>
                        <div className='subject'>
                            HTML
                        </div>
                        <div className="progress-bar" value='94%'>
                            <div className="progress-line" style={{ maxWidth: '94%' }}></div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='subject'>
                            CSS
                        </div>
                        <div className="progress-bar" value='90%'>
                            <div className="progress-line" style={{ maxWidth: '90%' }}></div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='subject'>
                            Javascript
                        </div>
                        <div className="progress-bar" value='85%'>
                            <div className="progress-line" style={{ maxWidth: '85%' }}></div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='subject'>
                            ReactJs
                        </div>
                        <div className="progress-bar" value='75%'>
                            <div className="progress-line" style={{ maxWidth: '75%' }}></div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='subject'>
                            Bootstrap
                        </div>
                        <div className="progress-bar" value='95%'>
                            <div className="progress-line" style={{ maxWidth: '95%' }}></div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='subject'>
                            Mongodb
                        </div>
                        <div className="progress-bar" value='70%'>
                            <div className="progress-line" style={{ maxWidth: '70%' }}></div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='subject'>
                            Tailwind
                        </div>
                        <div className="progress-bar" value='94%'>
                            <div className="progress-line" style={{ maxWidth: '94%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='s-right'>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }} className='s-mainCircle'>
                    <div className='s-secCircle'>
                        <img src={react} alt="" />
                    </div>
                    <div className='s-secCircle'>
                        <img src={html} alt="" />
                    </div>
                    <div className='s-secCircle'>
                        <img style={{ width: '60px' }} src={javascript} alt="" />
                    </div>
                    <div className='s-secCircle'>
                        <img src={bootstrap} alt="" />
                    </div>
                    <div className='s-secCircle'>
                        <img src={mongodb} alt="" />
                    </div>
                    <div className='s-secCircle javascript'>
                        <img src={css} alt="" />
                    </div>
                </motion.div>
                <div className='s-backCircle blueCircle'></div>
                <div className='s-backCircle yellowCircle'></div>
            </div>
        </div>
    );
};

export default Skills;