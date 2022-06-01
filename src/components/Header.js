import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'  

export default function Header() {
  return (
    <>
    <div className="container-fluid">
      <img className='logo' src='https://cdn5.vectorstock.com/i/1000x1000/37/29/label-e-commerce-logo-vector-30103729.jpg'/>
    </div>
    
    <br/>
    <Navbar/>
    <Footer/>
    </>
  )
}
