import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
    </>
  );
}
