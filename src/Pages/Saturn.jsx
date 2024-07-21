import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'

import planet from "../public/images/planet-saturn.svg"
import internal from "../public/images/planet-saturn-internal.svg"
import geology from "../public/images/geology-saturn.png"

export function Saturn() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[5]} images={[planet, internal, geology]}/>
            <Information data={data[5]} />
        </>
    )
}