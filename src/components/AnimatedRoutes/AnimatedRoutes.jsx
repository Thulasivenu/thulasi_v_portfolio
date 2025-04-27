import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// import {AnimatePresence, motion} from "framer-motion";

import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Pojects"
import { motion, AnimatePresence}  from "framer-motion"

const AnimatedRoutes = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 0, y: 20 },
    in: { opacity: 1, x: 0, y: 0 },
    out: { opacity: 0, x: 0, y: -20 },
    style:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',  // Ensures full viewport height
      }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  const location = useLocation();
  return (
    <>
      <div className="pageAnimation">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                 <About/>
                </motion.div>
              }
            />
            <Route
              path="/skills"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                 <Skills/>
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Projects/>
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default AnimatedRoutes;
