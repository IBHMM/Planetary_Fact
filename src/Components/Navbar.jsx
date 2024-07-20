import { useState, useEffect } from 'react';
import { Desktop } from './navbar_Desktop.jsx';
import { Tablet } from './navbar_Tablet.jsx';
import { Mobile } from './navbar_Mobile.jsx';

export function Navbar() {
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1000 && window.innerWidth > 500);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    const handleResize = () => {
        setIsTablet(window.innerWidth <= 1000 && window.innerWidth > 500);
        setIsMobile(window.innerWidth <= 500);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <>
            {!isTablet && !isMobile ? <Desktop /> : isTablet ? <Tablet /> : <Mobile />}
        </>
    );
}
