// Configure all the routes in this file
import React, { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Body from "../components/Body";
import Experience from "../components/Experience";
import Project from "../components/Project";
import NavBar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";
import About from "../components/About";
import LoadingBar from "../components/LoadingBar";

function AnimatedRoutes() {
  const location = useLocation();
  const ref = useRef(null);
  return (
    <AnimatePresence>
      <LoadingBar />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <div className="h-screen flex-col relative">
                <NavBar refToLastComp={ref} />
                <Body />
              </div>
              <div>
                <About ref={ref} />
              </div>
              <div className="md:hidden sm:flex-col ssm:flex-col">
                <Experience />
                <Project />
              </div>
            </>
          }
        />
        <Route path="/a" element={<About />} />
        <Route path="/e" element={<Experience />} />
        <Route path="/p" element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
