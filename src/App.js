import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}
