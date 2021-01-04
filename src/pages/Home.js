import React from "react";
import Landing from "../components/home/Landing";
import News from "../components/home/News";
import Footer from '../components/home/Footer'
const Home = () => {
  return (
    <div>
      <Landing />
      <News />
      <News/>
      <News/>
      <News/>
      <Footer/>
    </div>
  );
};

export default Home;
