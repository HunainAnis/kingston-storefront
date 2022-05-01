import Image from "next/image";
import { Offcanvas } from "react-bootstrap";
import { Product } from "../pages";
import { useCart } from "../utils/useCart";
import AddRemoveButton from "./AddRemoveButton";

interface CartComponent {
    show: boolean;
    setShow: (boolean: boolean)=>void;
}

const Cart = ({ show, setShow }:CartComponent) => {
    const { cartItems, products, totalAmount, getProductWithId } = useCart();
    return (
        <Offcanvas show={show} placement="end" onHide={()=>setShow(false)}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>CART</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>
                    <div className="mb-5">
                        {
                            !cartItems.length
                            ?
                            <div>No Items available</div>
                            :
                            <div>
                                {
                                    cartItems.map((item: any) => {
                                        let currItem = getProductWithId(item.productId);
                                        return (
                                            <div className="border rounded p-3 d-flex">
                                                <div className="me-3">
                                                    <Image 
                                                        src={currItem.image}
                                                        width={50}
                                                        height={60}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="fw-bold mb-2">{currItem.title}</div>
                                                    <AddRemoveButton product={currItem} />
                                                    <div>${(currItem.price * item.quantity).toFixed(2)}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className=" p-3 position-absolute bottom-0 start-0 end-0 border bg-light">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fw-bold">TOTAL</div>
                            <div>${totalAmount()}</div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart;