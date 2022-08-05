import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Body from "./Body";
import Experience from "./Experience";
import Project from "./Project";
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";
import About from "./About";
import LoadingBar from "./LoadingBar";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <LoadingBar />
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Body />{" "}
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
