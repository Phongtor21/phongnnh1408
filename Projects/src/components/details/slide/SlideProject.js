import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Carousel } from 'react-bootstrap';

export default function SlideProject({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 img-slide"
            src={image}
            alt={image}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}