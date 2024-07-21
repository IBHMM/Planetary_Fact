import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'
import planet from "../public/images/planet-mercury.svg"
import internal from "../public/images/planet-mercury-internal.svg"
import geology from "../public/images/geology-mercury.png"

export function Mercury() {
    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[0]} images={[planet, internal, geology]}/>
            <Information data={data[0]} />
        </>
    )
}