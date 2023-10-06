import React from 'react'
import Cart from './Cart'
import ancientDawn from '../images/books/ancient_dawn.jpeg';
import boatBehind from '../images/books/boat_behind.jpeg';
import bookTitle from '../images/books/book_title.jpeg';
import climbHigh from '../images/books/Climb_high,jump_with_better_view.jpeg';
import getItTogether from '../images/books/get_it_together.jpeg';
import greatGatsby from '../images/books/great_gatsby.jpeg';
import iAmEnough from '../images/books/i_am_enough.jpeg';
import manifest from '../images/books/manifest.jpeg';
import modernSpaces from '../images/books/modern_spaces.webp';
import outOfTheWall from '../images/books/out_of_the_wall.jpeg';
import payToYourselfFirst from '../images/books/pay_to_yourself_first.jpeg';
import soThisIsUnfortunate from '../images/books/so_this_is_unfortunate.jpeg';


function EBooks() {

    const imagePaths = [
        ancientDawn,
        boatBehind,
        bookTitle,
        climbHigh,
        getItTogether,
        greatGatsby,
        iAmEnough,
        manifest,
        modernSpaces,
        outOfTheWall,
        payToYourselfFirst,
        soThisIsUnfortunate,
      ];

      const bookTitles = [
        'Ancient Dawn',
        'Boat Behind',
        'Book Title',
        'Climb High, Jump with a Better View',
        'Get It Together',
        'The Great Gatsby',
        'I Am Enough',
        'Manifest',
        'Modern Spaces',
        'Out of the Wall',
        'Pay Yourself First',
        'So This Is Unfortunate',
      ];

      const returnBookTitle = (bookTitles, index) => { 
        return bookTitles[index]
       }
    
    
  return (
    <div>
    <h1 className='fw-7 ebookSection'>READ, पढ़ने के लिए</h1>
    <div className='ebooksCards row row-cols-3 row-cols-md-4 g-4'>
    {imagePaths.map((imagePath, index) => (
        <Cart imagePath={imagePath} index={index} bookTitle={returnBookTitle(bookTitles, index)}/>
    ))}
    </div></div>
  )
}

export default EBooks