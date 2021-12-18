
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeSlide from '../components/home/HomeSlide';
import { FooterW } from '../components/Layouts/FooterW';

const StyleBoxHome = styled(Box)(({ theme }) => ({
  padding: '0 2vh',
  maxWidth: '120vh',
  margin: '2vh auto',
  backgroundColor: 'white',
  height: '74vh',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  position: 'relative',
  zIndex: '100',
  [theme.breakpoints.down('md')]: {
    height: '73vh',
  },
  
}));


const Home = () => {
  return (
    <>
      <StyleBoxHome >
        <HomeSlide />
        <FooterW />
      </StyleBoxHome>
      
    </>
  )
};

export default Home;
