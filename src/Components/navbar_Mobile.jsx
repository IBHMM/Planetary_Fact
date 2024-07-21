import { useState } from "react";
import {Logo} from './Logo';
import { Menu } from "./Menu";
import hamburger from "../public/images/icon-hamburger.svg"
import close from "../public/images/cross.png"

export function Mobile() {

    const [menu, setMenu] = useState(false);


    const handleMenu = () => setMenu(!menu);
 

    return (
        <nav className="relative flex flex-row w-full border-b-[1px] border-white items-center justify-between p-4 ">

           <section className="text-[90%] felx itens-center justify-center">
                <Logo />
           </section>

           <section className="h-[100%] flex items-center cursor-pointer" onClick={handleMenu}>
            {
                menu ? <img src={close} alt=""  className="mt-[6px] z-100 w-[30px] h-[30px]" /> : <img src={hamburger} alt=""  className="z-100" /> 
            }
           </section>

            {
            
                menu && <Menu isOpen={menu}/>
            
            }
        </nav>
    );
}
