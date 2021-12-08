import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import projectMock from '../__mocks__/projectsMock';
import ProjectCard from '../components/project/ProjectCard';

const StyleBox = styled(Box)({
  padding: '0',
  width: 900,
  margin: '0 auto',
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: 'auto',
  zIndex: '100',
  position: 'relative'
});


export default function Projects() {
  
  return (
    <React.Fragment >

      <StyleBox >
        {projectMock.map((project) => (
          <ProjectCard project={project} />
        ))}
      </StyleBox>
          
    </React.Fragment>
  );
}

