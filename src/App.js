import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Switch, Route,NavLink, Router } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Home from "./components/Home/Home";
import Guestbook from "./components/Guestboook/Guestbook";
import Segment from "./components/Segment/Segment";
import Footer from "./components/Footer/Footer";



function App() {
  const [page,setPage] = useState("home");
  
  const onPageChange=(value)=>{
    console.log(value)
    setPage(value)
  }
  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset)
    if(offset > 130)
    setPage("segment");
    if(offset > 170)
    setPage("guestbook");
  };

  useEffect(() => {
    //window.addEventListener("scroll", handleScroll);
  });

  const getPage=()=>{
    if(page === "home")
    return <Home/>
    else if(page === "segment")
    return <Segment/>
    else return <Guestbook/>
  }
  return (
    <>
    <Topbar page={page} onPageChange={onPageChange}/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/segment" component={Segment}/>
      <Route exact path="/guestbook" component={Guestbook}/>
    </Switch>
    {/* {getPage()} */}
    <Footer />
    </>
  );
}

export default App;
