import React from 'react'
import Navbar from './Navbar';

const Layout = ({ children }:{children:JSX.Element}) => {
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;