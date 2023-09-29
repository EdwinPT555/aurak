/* eslint-disable max-len */
import React from "react";
import TopNavBar from "./components/TopNavBar";
import SecondaryNavBar from "./components/SecondaryNavBar";
import Footer from "./components/Footer";
import { TbError404 } from "react-icons/tb";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Programs from "./pages/Programs";

const App = () => {
  return (
    <>
      <TopNavBar />
      <SecondaryNavBar />
      <Routes>
        <Route path="/programs" element={<Programs />} />
        <Route path="/" element={<About />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TbError404 className="text-6xl text-red-500" />
      <h1 className="text-2xl mt-4">Oops! Page not found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for might have been removed or does not exist.</p>
    </div>
  );
};
