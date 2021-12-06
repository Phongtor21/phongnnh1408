
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeAbout from '../components/home/HomeAbout';
import HomeNews from '../components/home/HomeNews';
import HomeSlide from '../components/home/HomeSlide';


const StyleBoxHome = styled(Box)({
  padding: '50px 200px',
  backgroundColor: 'white',
  height: 'auto',
  marginBottom: '200px',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  position: 'relative',
  zIndex: '100'
});


export const Home = () => {
  return (
    <>
      <StyleBoxHome>
        <HomeSlide />
      </StyleBoxHome>
    </>
  )
};




