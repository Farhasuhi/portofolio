import './Intro.css'
import Lottie from "lottie-react";
import Github from '../../assets/img/github.png'
import Linkedin from '../../assets/img/linkedin.png'
import vector1 from '../../assets/img/Vector1.png'
import vector2 from '../../assets/img/Vector2.png'
import animation from '../../assets/Web-development.json'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import thumbup from '../../assets/img/thumbup.png'
import Crown from '../../assets/img/crown.png'
import Resume from '../../assets/FARHAISLAMSUHI.pdf'
import { motion } from 'framer-motion'
const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi!!I am </span>
                    <span>Farha Islam Suhi</span>
                    <span>I am a positive, enthusiastic and competent Web Developer who has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role.</span>
                </div>
                <a href={Resume} style={{ textDecoration: 'none' }} download><button className='button i-button'>Download CV</button></a>
                <div className="i-cons">
                    <a href="https://github.com/Farhasuhi"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/farha-islam-suhi-a93214258/"><img src={Linkedin} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <Lottie animationData={animation} className="w-80 animation" loop={true} />
                <motion.div initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div">
                    <FloatingDiv image={Crown} text1={"Frontend Web"} text2={" Developer"}></FloatingDiv>
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" ,top:'25rem' }}
                    transition={transition}
                    className="floating-div">
                    <FloatingDiv image={thumbup} text1={"Mern Stack"} text2={"Developer"}></FloatingDiv>
                </motion.div>
                <div className='blur' style={{ background: "rgb(236 210 255)" }}>
                </div>
                <div className='blur' style={{ background: "#C1F5FF", top: '23rem', width: '21rem', height: '11rem', left: '-11rem' }}>
                </div>
            </div>
        </div >
    );
};

export default Intro;