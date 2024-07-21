import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'

import planet from "../public/images/planet-neptune.svg"
import internal from "../public/images/planet-neptune-internal.svg"
import geology from "../public/images/geology-neptune.png"

export function Neptune() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[7]} images={[planet, internal, geology]}/>
            <Information data={data[7]} />
        </>
    )
}