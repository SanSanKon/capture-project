import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from "./components/Nav";
//import MovieDetail from "./pages/MovieDetail";
//import TheAthlete from './pages/TheAthlete';
//Router
import { Route, Routes, useLocation } from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<AboutUs />}>
          {/* <AboutUs /> */}
        </Route>
        <Route path='/work' exact element={<OurWork />}>
          {/* <OurWork /> */}
        </Route>
        <Route path="/work/:id" element={<MovieDetail />}>
          {/* <MovieDetail /> */}
        </Route>
        <Route path='/contact' element={<ContactUs />}>
          {/* <ContactUs /> */}
        </Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
