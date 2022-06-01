import React from "react";
import './style.css'
import {BrowserRouter,Route,Routes, Link} from 'react-router-dom';
import Home from "./Home";
import Usersignin from "./Usersignin";
import Usersignup from "./Usersignup";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <>
    <BrowserRouter>
        <Nav/>
       <Routes> 
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signin' element={<Usersignin/>}/>
        <Route exact path='/signup' element={<Usersignup/>}/>
      </Routes> 
      </BrowserRouter>
    </>
  );
}
