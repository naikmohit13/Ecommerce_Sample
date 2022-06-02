import React from 'react'
import Card from './Card'

export default function Men() {
  return (
    <div className="container flex" id="men-content">
      <div className='row'>
        <div class='col'>
        <Card title="Shirts" img_url="https://nypost.com/wp-content/uploads/sites/2/2022/03/91TIoZtb-L._AC_SX679._SX._UX._SY._UY_.jpg?quality=90&strip=all"/>
        </div>
        <div class='col'>
        <Card title="Pants" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrj247uDZbRnCEliPseJrrgBq1kqL1bUDaw&usqp=CAU"/>
        </div>
        <div class='col'>
        <Card title="Shoes" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrAibxrtXx5PqvW4bDl_qTeAa9J-BDKY1Nw&usqp=CAU"/>
        </div>
        <div class='col'>
        <Card title="Watches" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdCQE68jhfV8U5tZ_tY_jnLI_lMV_7nP6SQ&usqp=CAU"/>
        </div>
        <div class='col'>
        <Card title="Sunglassess" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdCQE68jhfV8U5tZ_tY_jnLI_lMV_7nP6SQ&usqp=CAU"/>
        </div>
        <div class='col'>
        <Card title="Perfumes" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdCQE68jhfV8U5tZ_tY_jnLI_lMV_7nP6SQ&usqp=CAU"/>
        </div>
        
      </div>
    </div>
  )
}
