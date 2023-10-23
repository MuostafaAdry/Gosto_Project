import React, { useEffect, useState } from "react";
import Main from "./Main";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourCart from "./pages/YourCart";

const App = () => {
  const [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true);
    setTimeout(() => {
      setloder(false);
    }, 1000);
  }, []);
  return (
    <>
      <BrowserRouter>
        {loder ? (
          <div className="ScaleLoader-div">
            <ScaleLoader
              className="ScaleLoader"
              color={"#f87765"}
              loder={loder}
              height={100}
              margin={10}
            />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/yourcart" element={<YourCart />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
