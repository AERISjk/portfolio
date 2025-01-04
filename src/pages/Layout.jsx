import React from 'react';
import NavBar from '../sections/Navbar';
import Footer from '../sections/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
            
            <Footer/>
        </div>
    );
};

export default Layout;