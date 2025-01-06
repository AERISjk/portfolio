import React from 'react';
import NavBar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Contact from '../sections/Contact';

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