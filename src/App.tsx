import React from "react";
import "./utils/fontAwesome"; // Importer la configuration FontAwesome
import Menu from "./components/menu";
import Accueil from "./components/accueil";
import Experience from "./components/experiences";
import Formations from "./components/formations&diplomes";
import Competences from "./components/competences";
import About from "./components/about";
import Footer from "./components/footer";
import Analytics from "./components/Analytics";
import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Analytics />
        <Menu />
        <Accueil />
        <Experience />
        <Formations />
        <Competences />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
