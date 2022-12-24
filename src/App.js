import React from "react";
import Header from "./components/header"
import { BrowserRouter } from "react-router-dom"
import Main from "./components/main";
import Footer from "./components/footer";
import "./index.scss"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer /> 
    </BrowserRouter>

  );
}

export default App;
