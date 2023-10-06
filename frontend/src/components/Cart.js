import React from "react";

const Cart = () => {

  const temp = "https://www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg"

  return  <div>
  <div class="col">
  <div className="card">
    <img src={temp} className="card-img-top" alt="..." style={{ objectFit: "contain" }} />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <div className="cart_btns">
      <a href={temp} className="btn btn-outline-dark">English</a>
      <a href={temp} className="btn btn-outline-dark">हिन्दी</a>
    </div></div>
  </div>
  </div>
</div>;
};

export default Cart;
