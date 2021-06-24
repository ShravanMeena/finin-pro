import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import Footer from "./components/footer/Footer";
import GlobalStyle from "./globalStyles";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}
