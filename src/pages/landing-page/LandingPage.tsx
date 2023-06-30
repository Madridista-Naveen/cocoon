import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Home from "./components/home/Home";
import CountComp from "./components/count/CountComp";
import EducationContent from "./components/educationcontent/EducationContent";
import HowDoes from "./components/howdoes/HowDoes";
import Awards from "./components/awards/Awards";
import Gallery from "./components/gallery/Gallery";
import Footer from "../../Components/footer/Footer";
import ContestComponent from "./components/contestcomponents/ContestComponent";
import DemoTailwind from "../../DemoTailwind";


const FullPage = () => {

  return (
    <>
      <Home />
      <CountComp />
      <ContestComponent />
      <EducationContent />
      <HowDoes />
      <Awards />
      <Gallery />
    </>
  );
};


const LandingPage = () => {
  return (
    <FullPage/>
  );
};
export default LandingPage;
