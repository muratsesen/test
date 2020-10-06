import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./components/Home/Home";
import Guestbook from "./components/Guestboook/Guestbook";
import Segment from "./components/Segment/Segment";
import Footer from "./components/Footer/Footer";

function App() {
  const [page,setPage] = useState("home");
  
  
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    console.log("top:",window.screenTop);
    console.log("y:",window.screenY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
    <Topbar page={page}/>
    <section id="home">     <Home /></section>
    <section id="segment" >     <Segment /></section>
    <section id="guestbook">    <Guestbook /></section>
    
    <Footer />
    </>
  );
}

export default App;
