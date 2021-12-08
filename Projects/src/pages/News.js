import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import NewsCard from '../components/news/NewsCard';
import newsMock from '../__mocks__/newsMock';
import Pagination from '../components/Pagination/Pagination';

const StyleBox = styled(Box)({
  // padding: '15px 310px',
  width: 870,
  margin: '0 auto',
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  // marginBottom: '100px',
  zIndex: '100',
  position: 'relative'
});

export default function News() {
  const [ pagination, getPagination ] = React.useState({
    page: 1,
    limit: 6,
    totalRows: 12,
  });
  const [filters, setFilters] = React.useState({
    limit: 10,
    page: 1,
  });

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
  }
  return (
    <React.Fragment >
      <StyleBox >
        {newsMock.map((news) => (
          <NewsCard news={news} />
        ))}
        <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
      </StyleBox>
      
    </React.Fragment >
  );
}
