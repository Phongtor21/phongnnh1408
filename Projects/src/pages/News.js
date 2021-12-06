import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import NewsCard from '../components/news/NewsCard';
import newsMock from '../__mocks__/newsMock';

const StyleBox = styled(Box)({
  padding: '15px 260px',
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  marginBottom: '100px',
  zIndex: '100',
  position: 'relative'
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
