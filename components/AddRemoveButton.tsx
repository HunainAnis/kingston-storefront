import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { Product } from "../pages";
import { useCart } from "../utils/useCart";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddRemoveButton = ( { product }: {product:Product}) => {
    const { cartItems, addItem, updateItem, removeItem, loading } = useCart();

    const isIncludedInCart = () => {
        if(cartItems.map((k:any) => k.productId).includes(product.id)) {
            return cartItems.filter((k:any)=>k.productId===product.id)[0]
        }
        else return null
    };

    const increaseQuantity = () => {
        updateItem(product.id, isIncludedInCart().quantity+1)
    }

    const decreaseQuantity = () => {
        if(isIncludedInCart().quantity > 1) {
            updateItem(product.id, isIncludedInCart().quantity-1)
        }
        else {
            removeItem(product.id)
        }
    }

    console.log(cartItems);
    return (
        <div>
            {
                isIncludedInCart()
                ?
                <ButtonGroup>
                    <Button onClick={decreaseQuantity} variant="danger">-</Button>
                    <Button disabled variant="white">{isIncludedInCart().quantity}</Button>
                    <Button onClick={increaseQuantity} variant="success">+</Button>
                    <Button onClick={()=>removeItem(product.id)} variant="white"><FontAwesomeIcon icon={faTimes} /></Button>
                </ButtonGroup>
                :
                <Button disabled={loading} onClick={()=>addItem(product.id)}>{loading ? <Spinner animation="border" /> : "ADD TO CART"}</Button>
            }
        </div>
    )
}

export default AddRemoveButton;