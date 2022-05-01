import { Product } from "../pages";

export const intialState = {
    allProducts:[],
    cartItems:[],
}

export interface state {
    allProducts: Product[];
    cartItems: {
        productId:number;
        quantity:number;
    }[]
}

export const reducer = (state:state, { type, payload }:{ type:string; payload:number}) => {
    switch (type) {
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
            break;
    
        default:
            return state;
            break;
    }
}