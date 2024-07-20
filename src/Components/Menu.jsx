import React from 'react';
import { Link } from 'react-router-dom';
import mercuryIcon from '../assets/planets/images/planet-mercury.svg';
import venusIcon from '../assets/planets/images/planet-venus.svg';
import earthIcon from '../assets/planets/images/planet-earth.svg';
import marsIcon from '../assets/planets/images/planet-mars.svg';
import jupiterIcon from '../assets/planets/images/planet-jupiter.svg';
import saturnIcon from '../assets/planets/images/planet-saturn.svg';
import uranusIcon from '../assets/planets/images/planet-uranus.svg';
import neptuneIcon from '../assets/planets/images/planet-neptune.svg';

export function Menu({ isOpen }) {
    return (
        <section className={`flex absolute top-[75px] right-0 p-2 w-[100%] justify-evenly items-center z-[100000] gap-5 bg-[#202029ce] border-l-[2px] border-[#4c1f69] menu ${isOpen ? 'open' : 'closed'}`}>
            <div className="flex flex-col h-full items-center justify-evenly relative w-full">
                <Link to="/mercury" className='text-[#419EBB] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px]" src={mercuryIcon} alt="Mercury" />
                    Mercury
                </Link>
                <Link to="/venus" className='text-[#EDA249] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px]" src={venusIcon} alt="Venus" />
                    Venus
                </Link>
                <Link to="/earth" className='text-[#6f2ed6] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px] mr-2" src={earthIcon} alt="Earth" />
                    Earth
                </Link>
                <Link to="/mars" className='text-[#D14C32] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px] mr-3" src={marsIcon} alt="Mars" />
                    Mars
                </Link>
            </div>
            <div className="flex flex-col h-full items-center relative justify-evenly w-full">
                <Link to="/jupiter" className='text-[#D83A34] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px]" src={jupiterIcon} alt="Jupiter" />
                    Jupiter
                </Link>
                <Link to="/saturn" className='text-[#CD5120] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px]" src={saturnIcon} alt="Saturn" />
                    Saturn
                </Link>
                <Link to="/uranus" className='text-[#1ec2a4] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px]" src={uranusIcon} alt="Uranus" />
                    Uranus
                </Link>
                <Link to="/neptune" className='text-[#2d68f0] hover:text-[#fff] relative flex gap-10 items-center w-[80%]'>
                    <img className="w-[30px] h-[30px]" src={neptuneIcon} alt="Neptune" />
                    Neptune
                </Link>
            </div>
        </section>
    );
}
