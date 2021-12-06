
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeSlide from '../components/home/HomeSlide';


const StyleBoxHome = styled(Box)({
  padding: '20px 200px',
  backgroundColor: 'white',
  height: 'auto',
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
      <StyleBoxHome className="UTM-Avo">
        <HomeSlide />
      </StyleBoxHome>
    </>
  )
};




