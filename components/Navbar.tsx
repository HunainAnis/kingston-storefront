import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {

    const [ showCart, setShowCart ] = useState(false)
    return(
        <nav className="bg-light">
            <div className="d-flex">
                <div className="flex-grow-1 d-flex justify-content-center">
                    <Image 
                        src={"https://kingstonkosher.store/logo.svg"}
                        width={200}
                        height={100}
                    />
                </div>
                <div onClick={()=>setShowCart(true)} className="bg-dark cursor-pointer text-white d-flex align-items-center px-5">
                    <FontAwesomeIcon className="h3" icon={faCartShopping} />
                </div>
            </div>
            <Cart 
                show={showCart}
                setShow={setShowCart}
            />
        </nav>
    )
}

export default Navbar;