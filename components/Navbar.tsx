import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../utils/useCart";
import Cart from "./Cart";

const Navbar = () => {

    const [ showCart, setShowCart ] = useState(false);
    const { cartItems } = useCart();

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
                <div onClick={()=>setShowCart(true)} className={`${cartItems.length ?"bg-success" : "bg-dark"} cursor-pointer h3 text-white d-flex align-items-center px-5`}>
                    <FontAwesomeIcon className="me-2" icon={faCartShopping} /> {cartItems.length}
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