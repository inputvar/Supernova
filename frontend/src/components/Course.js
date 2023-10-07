import React from 'react';
// import styled from 'styled-components';
// import {Link} from "react-router-dom";
// import { useCartContext } from '../context/cart_context';

// const Course = (props) => {
//   const {id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category} = props;
//   const {addToCart} = useCartContext();

//   return (
//     <CourseCard>
//       <div className='item-img'>
//         <img src = {image} alt = {course_name} />
//       </div>
//       <div className='item-body'>
//         <h5 className='item-name'>{course_name}</h5>
//         <span className='item-creator'>{creator}</span>
//         <div className='item-price'>
//           <span className='item-price-new'>${discounted_price}</span>
//           <span className='item-price-old'>${actual_price}</span>
//         </div>
//       </div>
//       <div className='item-btns flex'>
//         <Link to = {`/courses/${id}`} className = "item-btn see-details-btn">See details</Link>
//         <Link to = "/cart" className='item-btn add-to-cart-btn' onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)}>Add to cart</Link>
//       </div>
//     </CourseCard>
//   )
// }

// const CourseCard = styled.div`
//   margin-bottom: 20px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
//   display: flex;
//   flex-direction: column;
//   .item-body{
//     margin: 14px 0;
//     padding: 4px 18px;

//     .item-name{
//       font-size: 15px;
//       line-height: 1.4;
//       font-weight: 800;
//     }
//     .item-creator{
//       font-size: 12.5px;
//       font-weight: 500;
//       color: rgba(0, 0, 0, 0.6);
//     }
//     .rating-star-val{
//       margin-bottom: 5px;
//       font-size: 14px;
//       font-weight: 800;
//       color: #b4690e;
//       margin-right: 6px;
//     }
//     .rating-count{
//       font-size: 12.5px;
//       margin-left: 3px;
//       font-weight: 500;
//       opacity: 0.8;
//     }
//     .item-price-new{
//       font-weight: 700;
//       font-size: 15px;
//     }
//     .item-price-old{
//       opacity: 0.8;
//       font-weight: 500;
//       text-decoration: line-through;
//       font-size: 15px;
//       margin-left: 8px;
//     }
//   }

//   .item-btns{
//     justify-self: flex-start;
//     padding: 4px 8px 30px 18px;
//     margin-top: auto;
//     .item-btn{
//       font-size: 15px;
//       display: inline-block;
//       padding: 6px 16px;
//       font-weight: 700;
//       transition: var(--transition);
//       white-space: nowrap;

//       &.see-details-btn{
//         background-color: transparent;
//         border: 1px solid var(--clr-black);
//         margin-right: 5px;

//         &:hover{
//           background-color: rgba(0, 0, 0, 0.9);
//           color: var(--clr-white);
//         }
//       }

//       &.add-to-cart-btn{
//         background: rgba(0, 0, 0, 0.9);
//         color: var(--clr-white);
//         border: 1px solid rgba(0, 0, 0, 0.9);

//         &:hover{
//           background-color: transparent;
//           color: rgba(0, 0, 0, 0.9);
//         }
//       }
//     }
//   }
// `;


function Course({imagePath, index, CourseTitle}) {
  return (
    <div>
  <div class="col">
  <div className="card" style={{ height: "600px"}}>
    <img key={index} src={imagePath} className="card-img-top" alt="..." style={{ objectFit: "cover", height:"100%", width:"100%" }}  />
    <div className="card-body">
      <h5 className="card-title">{CourseTitle}</h5>
      <div className="cart_btns">
      <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smartprix.com%2Fbytes%2Fthe-new-naruto-announcement-is-mystifying-anime-remake-on-the-cards%2F&psig=AOvVaw3MpgpFz5gTca4mObMA-84L&ust=1696692396408000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCW8e3d4YEDFQAAAAAdAAAAABAE" className="btn btn-outline-dark btn-lg">English</a>
      <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smartprix.com%2Fbytes%2Fthe-new-naruto-announcement-is-mystifying-anime-remake-on-the-cards%2F&psig=AOvVaw3MpgpFz5gTca4mObMA-84L&ust=1696692396408000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCW8e3d4YEDFQAAAAAdAAAAABAE" className="btn btn-outline-dark btn-lg">हिन्दी</a>
    </div></div>
  </div>
  </div>
</div>
  )
}


export default Course