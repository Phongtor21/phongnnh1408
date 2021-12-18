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
      height: '37vh',
      borderRadius: 0,
      boxShadow: 'none',
    }}>
      <Link href={`/news/${news.slug}`}>
        <CardMedia sx={{
          height: '26vh',
        }}
          component="img"
          alt={news.title}

          image={`${process.env.REACT_APP_IMAGE_URL}/${news.image}`}
        />
      </Link>
      <CardContent sx={{ padding: "4px 0" }}>
        <CardActions sx={{ padding: "0" }}>
          <Link href={`/news/${news.slug}`} sx={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '300',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            ":hover": {
              color: '#6D6D6D'
            }
          }}>{news.title}</Link>
        </CardActions>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '12px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
          }}>
          <div dangerouslySetInnerHTML={{ __html: `${news.description}` }}></div>
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  news: PropTypes.object.isRequired
};
