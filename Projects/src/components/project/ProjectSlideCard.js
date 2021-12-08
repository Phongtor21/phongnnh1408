import { Card } from '@mui/material';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Projects from '../../pages/Projects';
const slideImages = [
    Projects,
    Projects
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            
              <Projects/>
           
          </div>
          <div className="each-slide">
          <Projects/>
          </div>
          <div className="each-slide">
             <Projects/>
          </div>
        </Slide>
      </div>
    )
};
export default function SlideBau2() {
    return (
      <Slideshow/>
    );
  }