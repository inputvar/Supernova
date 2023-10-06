import React from 'react'
import Cart from './Cart'

function EBooks() {

    const temp = "https://www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg"

  return (
    <div>
    <h1 className='fw-7 ebookSection'>READ, पढ़ने के लिए</h1>
    <div className='ebooksCards row row-cols-3 row-cols-md-4 g-4'>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/>
    <Cart/></div></div>
  )
}

export default EBooks