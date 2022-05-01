import { useContext } from "react"
import { CartContext } from "../components/Layout"

export const useCart = () => {
    const { state, dispatch } = useContext(CartContext);

    const updateAllProducts = (products: any) => {
        dispatch({ type: "ALL_PRODUCTS", payload:products})
    }

    const addItem = (productId: number) => {
        dispatch({ type: "ADD_ITEM", payload:productId})
    }

    const updateItem = (productId: number, quantity:number) => {
        dispatch({ type: "UPDATE_ITEM", payload:{productId, quantity}})
    }

    const removeItem = (productId: number) => {
        dispatch({ type: "REMOVE_ITEM", payload:productId})
    }

    return { 
        updateAllProducts,
        addItem,
        removeItem,
        updateItem,
        cartItems: state.cartItems,
        products: state.allProducts
    }
}