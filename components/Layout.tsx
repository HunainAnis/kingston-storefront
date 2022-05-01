import React, { createContext, useReducer } from 'react'
import  { reducer, intialState } from '../utils/reducer';
import Navbar from './Navbar';

export const CartContext = createContext({});

const Layout = ({ children }:{children:JSX.Element}) => {
    const [state, dispatch] = useReducer(reducer, intialState);
    return(
        <CartContext.Provider value={{state, dispatch}}>
            <div>
                <Navbar />
                {children}
            </div>
        </CartContext.Provider>
    )
}

export default Layout;