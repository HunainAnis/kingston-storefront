import React, { createContext, useReducer } from 'react'
import  { reducer, intialState, state } from '../utils/reducer';
import Navbar from './Navbar';

interface cartContextType {
    state?: state;
    dispatch?: React.Dispatch<any>;
    
}
export const CartContext= createContext<cartContextType>({});

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