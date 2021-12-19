
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeSlide from '../components/home/HomeSlide';


const StyleBoxHome = styled(Box)(({ theme }) => ({
  padding: '0 2vh',
  maxWidth: '120vh',
  margin: '1vh auto',
  backgroundColor: 'white',
  height: '75vh',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  position: 'relative',
  zIndex: '100',
  [theme.breakpoints.down('md')]: {
    height: '70vh',
  },
  
}));


const Home = () => {
  return (
    <>
      <StyleBoxHome >
        <HomeSlide />
       
      </StyleBoxHome>
      
    </>
  )
};

export default Home;
