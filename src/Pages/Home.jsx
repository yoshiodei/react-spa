import React from 'react';
import Intro from '../components/Intro';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Quote from '../components/Quote';
import Service from '../components/Service';
import Products from '../components/Products';
import Contacts from '../components/Contacts';

const Home = () => {
    return (
        <>
            <Intro />
            <Benefits />
            <About />
            <Quote />
            <Service />
            <Products />
            <Contacts /> 
        </>
    );
}

export default Home;
