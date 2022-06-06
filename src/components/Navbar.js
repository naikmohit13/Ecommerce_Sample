import React from "react";
import './style.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./Home";
import Usersignin from "./Usersignin";
import Usersignup from "./Usersignup";
import Nav from "./Nav";
import Card from "./Card";
import Men from "./Men";

export default function Navbar() {
  return (
    <>
    <BrowserRouter>
        <Nav/>
       <Routes> 

        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signin' element={<Usersignin/>}/>
        <Route exact path='/signup' element={<Usersignup/>}/>
        <Route exact path='/women' element={<Card/>}/>
        <Route exact path='/men' element={<Men/>}/>

      </Routes> 

      </BrowserRouter>
    </>
  );
}
