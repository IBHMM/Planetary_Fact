import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'

import planet from "../public/images/planet-jupiter.svg"
import internal from "../public/images/planet-jupiter-internal.svg"
import geology from "../public/images/geology-jupiter.png"

export function Jupiter() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[4]} images={[planet, internal, geology]}/>
            <Information data={data[4]} />
        </>
    )
}