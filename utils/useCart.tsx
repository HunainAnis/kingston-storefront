import axios from "axios";
import { useContext } from "react"
import { CartContext } from "../components/Layout"

export const useCart = () => {
    const { state, dispatch } = useContext(CartContext);

    const updateAllProducts = (products: any) => {
        dispatch({ type: "ALL_PRODUCTS", payload:products})
    }

    const addItem = (productId: number) => {
        axios.post("https://fakestoreapi.com/carts", {
            userId: 5,
            date: new Date(),
            products:[],
        })
        .then((response) => {
            if(response.status===200) {
                dispatch({ type: "ADD_ITEM", payload:productId})
            }
        })

    }

    const updateItem = (productId: number, quantity:number) => {
        axios.patch("https://fakestoreapi.com/carts/7", {
            userId: 5,
            date: new Date(),
            products:[{ productId, quantity }],
        })
        .then((response) => {
            if(response.status===200) {
                dispatch({ type: "UPDATE_ITEM", payload:{productId, quantity}})
            }
        })
    }

    const removeItem = (productId: number) => {
        dispatch({ type: "REMOVE_ITEM", payload:productId})
    }

    const getProductWithId = (productId: number) => {
        let item = state.allProducts.filter((k:Product)=>k.id===productId);
        if(item[0]) {
            return item[0]
        }
        else return null
    }
    const totalAmount = () => {
        return state.cartItems.reduce((prev, curr)=> prev + (getProductWithId(curr.productId).price * curr.quantity),0).toFixed(2)
    }

    return { 
        updateAllProducts,
        addItem,
        removeItem,
        updateItem,
        getProductWithId,
        totalAmount,
        cartItems: state.cartItems,
        products: state.allProducts
    }
}