import React from 'react';
import Intro from '../components/Intro';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Quote from '../components/Quote';
import Service from '../components/Service';
import Product from '../components/Product';
import Contacts from '../components/Contacts';
import Nav from "./../components/Nav";


const Home = () => {

    return (
        <>
            <Nav />
            <Intro />
            <Benefits />
            <About />
            <Quote />
            <Service />
            <Product />
            <Contacts /> 
        </>
    );
}



export default Home;
