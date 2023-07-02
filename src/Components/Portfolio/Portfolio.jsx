import React from 'react';
import './Portfolio.css'
import portfolio1 from '../../assets/img/chefs-corner-a5e7d.web.app_.png';
import portfolio2 from '../../assets/img/dream-diseny.web.app_.png';
import portfolio3 from '../../assets/img/storied-queijadas-256148.netlify.app_.png';
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='portfolio-heading'>
                <span>My Recent Projects</span>
                <span>Portfolio</span>
            </div>
            <div className='Cards'>
                <div className='portfolio-card'>
                    <div className='image-wrapper'>
                        <a href=""><img src={portfolio1} alt="" /></a>
                    </div>
                    <div className='portfolio-title'>
                        <span>Chefs Corner</span>
                    </div>
                    <div className='button p-buttons'>
                        <a href=""><button>Live Demo</button></a>
                        <a href=""><button>Client Site</button></a>
                        <a href=""><button>Server Site</button></a>
                    </div>
                </div>
                <div className='portfolio-card'>
                    <div className='image-wrapper'>
                        <a href=""><img src={portfolio2} alt="" /></a>
                    </div>
                    <div className='portfolio-title'>
                        <span>Dream Disney</span>
                    </div>
                    <div className='button p-buttons'>
                        <a href=""><button>Live Demo</button></a>
                        <a href=""><button>Client Site</button></a>
                        <a href=""><button>Server Site</button></a>
                    </div>
                </div>
                <div className='portfolio-card'>
                    <div className='image-wrapper'>
                        <a href=""><img src={portfolio3} alt="" /></a>
                    </div>
                    <div className='portfolio-title'>
                        <span>Art & Ink</span>
                    </div>
                    <div className='button p-buttons'>
                        <a href=""><button>Live Demo</button></a>
                        <a href=""><button>Client Site</button></a>
                        <a href=""><button>Server Site</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;