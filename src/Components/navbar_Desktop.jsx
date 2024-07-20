import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Desktop() {
    return (
        <nav className="flex flex-row w-full border-b-[1px] border-white justify-evenly p-4">
            <section>
                <Logo />
            </section>

            <section className='flex items-center gap-10 hover:text-[#38384F]'>
                <Link to="/mercury" className='text-[#419EBB] hover:text-[#fff]'>Mercury</Link>
                <Link to="/venus" className='text-[#EDA249] hover:text-[#fff]'>Venus</Link>
                <Link to="/earth" className='text-[#6f2ed6] hover:text-[#fff]'>Earth</Link>
                <Link to="/mars" className='text-[#D14C32] hover:text-[#fff]'>Mars</Link>
                <Link to="/jupiter" className='text-[#D83A34] hover:text-[#fff]'>Jupiter</Link>
                <Link to="/saturn" className='text-[#CD5120] hover:text-[#fff]'>Saturn</Link>
                <Link to="/uranus" className='text-[#1ec2a4] hover:text-[#fff]'>Uranus</Link>
                <Link to="/neptune" className='text-[#2d68f0] hover:text-[#fff]'>Neptune</Link>
            </section>
        </nav>
    );
}
