
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HomeSlide from '../components/home/HomeSlide';
import { FooterW } from '../components/Layouts/FooterW';
import homeApi from '../api/homeApi';
import LoadingScreen from '../components/LoandingScreen';

const StyleBoxHome = styled(Box)({
  // padding: '20px 200px',
  width: '900px',
  margin: '0 auto',
  backgroundColor: 'white',
  height: 'auto',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  position: 'relative',
  zIndex: '100'
});


const Home = () => {
  const [home, setHome] = React.useState(null);

  React.useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await homeApi.allHome();
        // setHome(response);
      } catch (error) {
        console.log('Failed to fetch about: ', error)
      }
    }
    fetchHome();
  }, [])

  console.log(home)

  return (
    <>
    {home && (
      <StyleBoxHome >
        <HomeSlide />
        <FooterW />
      </StyleBoxHome>
    )}
      {!home && (<LoadingScreen/>)}
    </>
  )
};

export default Home;
