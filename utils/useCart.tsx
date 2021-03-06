import axios from "axios";
import { useContext } from "react"
import { CartContext } from "../components/Layout"
import { Product } from "../pages";

export const useCart = () => {
    const { state, dispatch } = useContext(CartContext);

    const updateAllProducts = (products: any) => {
        dispatch({ type: "ALL_PRODUCTS", payload:products})
    }

    const setLoading = (type: boolean | number) => {
        dispatch({ type:"SET_LOADING", payload: type})
    }

    const addItem = (productId: number) => {
        setLoading(productId);
        axios.post("https://fakestoreapi.com/carts", {
            userId: 5,
            date: new Date(),
            products:[],
        })
        .then((response) => {
            if(response.status===200) {
                setLoading(false);
                dispatch({ type: "ADD_ITEM", payload:productId})
            }
            else {
                setLoading(false);
            }
        })
        .catch(()=>{
            setLoading(false);
        })

    }

    const updateItem = (productId: number, quantity:number) => {
        setLoading(productId);
        axios.patch("https://fakestoreapi.com/carts/7", {
            userId: 5,
            date: new Date(),
            products:[{ productId, quantity }],
        })
        .then((response) => {
            if(response.status===200) {
                setLoading(false);
                dispatch({ type: "UPDATE_ITEM", payload:{productId, quantity}})
            }
            else {
                setLoading(false);
            }
        })
        .catch(()=>{
            setLoading(false);
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
        loading:state.loading,
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