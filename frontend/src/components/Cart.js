import React from "react";

const Cart = ({imagePath, index, bookTitle}) => {

  const bookImgPath = ""
  return  <div>
  <div class="col">
  <div className="card" style={{ height: "600px"}}>
    <img key={index} src={imagePath} className="card-img-top" alt="..." style={{ objectFit: "cover", height:"100%", width:"100%" }} />
    <div className="card-body">
      <h5 className="card-title">{bookTitle}</h5>
      <div className="cart_btns">
      <a href={bookImgPath} className="btn btn-outline-dark btn-lg">English</a>
      <a href={bookImgPath} className="btn btn-outline-dark btn-lg">हिन्दी</a>
    </div></div>
  </div>
  </div>
</div>;
};

export default Cart;
