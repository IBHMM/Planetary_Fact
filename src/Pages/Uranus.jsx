import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'

import planet from "../public/images/planet-uranus.svg"
import internal from "../public/images/planet-uranus-internal.svg"
import geology from "../public/images/geology-uranus.png"

export function Uranus() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[6]} images={[planet, internal, geology]}/>
            <Information data={data[6]} />
        </>
    )
}