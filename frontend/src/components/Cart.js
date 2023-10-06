import React from "react";
import English from '../book_pdfs/mental_health.pdf'
import hindi from '../book_pdfs/mental_health_hindi.pdf'

const Cart = ({imagePath, index, bookTitle}) => {

  return  <div>
  <div class="col">
  <div className="card" style={{ height: "600px"}}>
    <img key={index} src={imagePath} className="card-img-top" alt="..." style={{ objectFit: "cover", height:"100%", width:"100%" }} />
    <div className="card-body">
      <h5 className="card-title">{bookTitle}</h5>
      <div className="cart_btns">
      <a href={English} className="btn btn-outline-dark btn-lg">English</a>
      <a href={hindi} className="btn btn-outline-dark btn-lg">हिन्दी</a>
    </div></div>
  </div>
  </div>
</div>;
};

export default Cart;
