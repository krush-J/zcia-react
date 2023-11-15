
import PostalCode from "./screens/PostalCode";
import PostalCodeInfo from "./screens/PostalCodeInfo";

import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostalCode />} />
          <Route path="/info/:postalCode" element={<PostalCodeInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
