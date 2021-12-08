import React from 'react';
import { Slide } from 'react-slideshow-image';
import Projects from '../../../pages/Projects';
import { FooterW } from '../../Layouts/FooterW';


const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <Projects />
        </div>
        <div className="each-slide">
          <Projects />
        </div>
        <div className="each-slide">
          <Projects />
        </div>
      </Slide>
    </div>
  )
};
export default function SlideTest() {
  return (
    <>
      <Slideshow />
      <FooterW />
    </>

  );
}