import React from "react";
import "./App.css";
import Botmenu from "./components/botmenu";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Einstellungen from "./container/Einstellungen";
import Informationen from "./container/Informationen";
import Hero from "./components/Hero";
import Home from "./container/Home";
import Standort from "./container/Standort";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/Einstellungen" component={Einstellungen}/>
        <Route path="/Informationen" component={Informationen}/>
        <Route path="/Standort" component={Standort}/>
        <Botmenu />
      </div>
    </Router>
  );
}

export default App;
