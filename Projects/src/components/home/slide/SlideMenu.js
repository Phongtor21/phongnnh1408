import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1638767306392-a30224cc2d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1638631221632-c18b0a8a40ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1638631730118-b9b23df56255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    caption: 'Slide 3'
  },
];

export default function SlideMenu() {
    return (
      <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <img className="img-slide" src={slideImage.url}/>
          </div>
        ))} 
      </Slide>
    </div>
    )
}