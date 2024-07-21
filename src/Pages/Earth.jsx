import {Navbar} from '../Components/Navbar'
import {Main} from '../Components/Main.jsx'
import { useContext } from 'react';
import { PlanetContext } from '../App';
import { Information } from '../Components/Information.jsx'
import planet from "../public/images/planet-earth.svg"
import internal from "../public/images/planet-earth-internal.svg"
import geology from "../public/images/geology-earth.png"

export function Earth() {

    const data = useContext(PlanetContext);

    return(
        <>
            <Navbar />
            <Main data={data[2]} images={[planet, internal, geology]}/>
            <Information data={data[2]} />
        </>
    )
}