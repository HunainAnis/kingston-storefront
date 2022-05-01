import { Offcanvas } from "react-bootstrap";

interface CartComponent {
    show: boolean;
    setShow: (boolean: boolean)=>void;
}

const Cart = ({ show, setShow }:CartComponent) => {
    return (
        <Offcanvas show={show} placement="end" onHide={()=>setShow(false)}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>CART</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                No Items Available
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart;