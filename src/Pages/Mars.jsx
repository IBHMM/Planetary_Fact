import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'

import planet from "../public/images/planet-mars.svg"
import internal from "../public/images/planet-mars-internal.svg"
import geology from "../public/images/geology-mars.png"

export function Mars() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[3]} images={[planet, internal, geology]}/>
            <Information data={data[3]} />
        </>
    )
}