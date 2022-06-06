import React from 'react'
import {Link} from 'react-router-dom'
export default function Card(props) {
  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <div className="card_image">
      <img src={props.img_url} className="card-img-top" alt="..."/>
      
      </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    <Link to='/' className="btn btn-sm btn-primary shadow-sm">Go somewhere</Link>
  </div>
</div>
  )
}
