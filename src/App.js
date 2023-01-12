import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="body-wrapper">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/offers/:id" element={<Offers />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
