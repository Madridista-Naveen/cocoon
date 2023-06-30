// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './dist/output.css'

import LandingPage from "./pages/landing-page/LandingPage";
import DemoTailwind from "./DemoTailwind";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
// import 'https://cdn.tailwindcss.com/'

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/demo-tailwind", element: <DemoTailwind /> },
];
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((r: any) => {
            return <Route path={r.path} element={r.element} />;
          })}
          {/* <Route path="/" element={<FullPage/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/count" element={<CountComp />} />
      <Route path="/education" element={<EducationContent />} />
      <Route path="/howdoes" element={<HowDoes />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contest" element={<ContestComponent />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
