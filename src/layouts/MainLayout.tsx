import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

type propos = {
    children: React.ReactNode;
};

const MainLayout = ({ children } : propos) => {
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
};

export default MainLayout;
