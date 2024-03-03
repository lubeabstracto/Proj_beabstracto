import React from 'react'; 
import Header from '../components/Header';
import SOPDoc from '../components/SOPDoc.jsx';
import SOPHero from '../components/SOPHero';
import SOPList from '../components/SOPList';
import StackedList from '../components/StackedList';
import Footer from '../components/Footer';

const SOP = () => {
  return (
    <>
        <Header />
        <SOPHero/>
        <StackedList/>
        <SOPList/>
        <SOPDoc/>
        <Footer/>
    </>
  )
}

export default SOP