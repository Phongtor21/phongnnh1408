import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';


export default function NewsCard({ news }) {
  return (
    <Card sx={{
      maxWidth: 268,
      margin: '5.5px',
      borderRadius: 0,
      boxShadow: 'none',
      height: '250px'
    }}>
      <Link href="/news-detail">
        <CardMedia sx={{
          height: 200,
          width: 268,
        }}
          component="img"
          alt="green iguana"
          image={news.image}
        />
      </Link>
      <CardContent sx={{ padding: "0" }}>
        <CardActions sx={{ padding: "0" }}>
          <Link href="/news-detail" sx={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '300',
            fontSize: '14px',
            ":hover": {
              color: '#6D6D6D'
            }
          }}>{news.title}</Link>
        </CardActions>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '10px' }}>
          {news.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  news: PropTypes.array.isRequired
};
