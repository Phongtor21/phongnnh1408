import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Carousel } from 'react-bootstrap';


const slideImages = [
  {
    url: 'https://media.istockphoto.com/photos/low-angle-view-of-futuristic-architecture-skyscraper-of-office-with-picture-id1300284976?b=1&k=20&m=1300284976&s=170667a&w=0&h=cT8cItX3FH14XO38mmI7WFgnRV-DAHmrmMTNVdQPKMk=',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1527147870913-e4a533fafaa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caption: 'Slide 3'
  },
];

export default function SlideNews() {
    return (
      
      <Carousel>
        {slideImages.map((slideImage, index) => (
          // <div className="each-slide" key={index}>
          //   <img className="img-slide" src={slideImage.url} alt={slideImage.caption} />
          // </div>
          <Carousel.Item>
          <img
            className="d-block w-100 img-slide"
            src={slideImage.url}
            alt={slideImage.caption}
            
          />
          
        </Carousel.Item>
        ))}
      </Carousel>
    )
}