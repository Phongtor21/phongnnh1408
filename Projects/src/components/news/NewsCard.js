import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';



export default function NewsCard({ news }) {
  return (
    <Card sx={{
      maxWidth: 268,
      marginTop: 0,
      marginBottom: 0,
      borderRadius: 0,
      boxShadow: 'none'
    }}>
      <CardMedia sx={{
        height: 200,
        width: 268,
      }}
        component="img"
        alt="green iguana"
        image={news.image}
      />
      <CardContent sx={{ padding: "0" }}>
        <CardActions sx={{ padding: "10px 0" }}>
          <Link href={news.url} sx={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '700'
          }}>{news.title}</Link>
        </CardActions>
        <Typography variant="body2" color="text.secondary" sx={{fontsize: '11px'}}>
          {news.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  news: PropTypes.array.isRequired
};
