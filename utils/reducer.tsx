import { Product } from "../pages";

export const intialState:state = {
    allProducts:[],
    cartItems:[],
    loading: false
}

export interface state {
    loading?:boolean | number;
    allProducts: Product[];
    cartItems: {
        productId:number;
        quantity:number;
    }[]
}

export const reducer = (state:state, { type, payload }:{ type:string; payload:any}) => {
    switch (type) {
        case "SET_LOADING":
            return {
                ...state,
                loading:payload
            }
        case "ALL_PRODUCTS":
            return {
                ...state,
                allProducts:payload
            }
        case "ADD_ITEM":
            return {
                ...state,
                cartItems:[...state.cartItems, { productId:payload, quantity: 1}]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems:state.cartItems.filter((k:any)=>k.productId!==payload)
            }
        case "UPDATE_ITEM":
            const itemIndex = state.cartItems.findIndex((k:any)=>k.productId===payload.productId)
            const itemsCopy = [...state.cartItems];
            itemsCopy[itemIndex].quantity = payload.quantity;
            return {
                ...state,
                cartItems:itemsCopy
            }
        default:
            return state;
            break;
    }
}