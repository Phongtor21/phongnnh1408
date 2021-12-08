import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';


export default function ProjectCard({ project }) {
  return (
    <Card sx={{
      maxWidth: 210,
      height: 190,
      margin: '6.5px',
      borderRadius: 0,
      boxShadow: 'none'
    }}>
      <Link href="/project-detail">
        <CardMedia sx={{
          height: 140,
          width: 210,
        }}
          component="img"
          alt="green iguana"
          image={project.image}
        />
      </Link>
      <CardContent sx={{ padding: "0" }}>
        <CardActions sx={{ padding: "0" }}>
          <Link href="/project-detail" sx={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '300',
            fontSize: '12px',
            ":hover": {
              color: '#6D6D6D'
            }
          }}>{project.title}</Link>
        </CardActions>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '10px'}}>
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  Project: PropTypes.array.isRequired
};
