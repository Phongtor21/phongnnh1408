
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeSlide from '../components/home/HomeSlide';
import { FooterW } from '../components/Layouts/FooterW';

const StyleBoxHome = styled(Box)(({ theme }) => ({
  padding: '0 2vh',
  maxWidth: '120vh',
  margin: '0 auto',
  backgroundColor: 'white',
  height: '77vh',
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
      </StyleBoxHome>
      <FooterW />
    </>
  )
};

export default Home;
