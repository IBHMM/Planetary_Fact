import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Tablet() {
    return (
        <nav className="w-full flex-col gap-4 items-center justify-center border-b-[1px] border-white p-4">
            
            <section className='w-full flex justify-center items-center'>
                <Logo />
            </section>

            <section className='flex items-center justify-center hover:text-[#38384F] my-2 gap-10 max-[600px]:gap-6'>
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
