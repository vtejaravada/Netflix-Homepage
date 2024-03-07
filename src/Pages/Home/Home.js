import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Enjoy from './Components/Enjoy on/Enjoy';
import Download from './Components/Download/Download';
import Watch from './Components/Watch/Watch';
import Create from './Components/CreatePro/Create';
import Frequently from './Components/Frequently/Frequently';
import Footer from '../../Components/Footer/Footer';

import '../../Pages/Home/Home.css';

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Enjoy/>
        <Download/>
        <Watch/>
        <Create/>
        <Frequently/>
        <Footer/>
    </>
  )
}

export default Home