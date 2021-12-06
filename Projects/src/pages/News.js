import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import NewsCard from '../components/news/NewsCard';
import { Typography, Divider } from "@mui/material";
import newsMock from '../__mocks__/newsMock';

const StyleBox = styled(Box)({
  padding: '50px 200px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  marginBottom: '200px',
  zIndex: '100',
  position: 'relative'
});

const StyleBoxTitle = styled(Box)({
  padding: '60px 200px 30px 200px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  zIndex: '100',
  position: 'relative',
  alignItems: 'center',
  px: 2,
  marginBottom: '0'
});

export default function News() {
  return (
    <React.Fragment >
      <StyleBox >
        {newsMock.map((news) => (
          <NewsCard news={news} />
        ))}
      </StyleBox>
    </React.Fragment >
  );
}
