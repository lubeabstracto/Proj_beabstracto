import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner'
import About from '../components/About';
import Contact from '../components/Contact';
import Servicos from '../components/Servicos';
import Pacotes from '../components/Pacotes';
import MovingBanner from '../components/MovingBanner';
import LoadingScreen from '../components/Loading';
import Builder from '../components/Builder';
import Portfolio from '../components/Portfolio';
//import VisualizerComponent from '../components/VisualizerComponent'; // Ajuste o caminho de importação conforme necessário

const Home = () => {
  // Estado para controlar se o loading está ativo ou não
  const [isLoading, setIsLoading] = useState(true);

  // Simulando a conclusão do loading (isso deve ser feito com base no estado do componente LoadingScreen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Assumindo que o loading dura 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Banner />
          <Header />
          <Hero />
          <MovingBanner/>
          <Servicos/>
          <Builder/>  
          <About />  
          <Portfolio />
          <Pacotes />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
