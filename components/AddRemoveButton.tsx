import { Button, ButtonGroup } from "react-bootstrap";
import { Product } from "../pages";
import { useCart } from "../utils/useCart";

const AddRemoveButton = ( { product }: {product:Product}) => {
    const { cartItems, addItem, updateItem, removeItem } = useCart();

    const isIncludedInCart = () => {
        if(cartItems.map((k:any) => k.productId).includes(product.id)) {
            return cartItems.filter((k:any)=>k.productId===product.id)[0]
        }
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
                </ButtonGroup>
                :
                <Button onClick={()=>addItem(product.id)}>ADD TO CART</Button>
            }
        </div>
    )
}

export default AddRemoveButton;