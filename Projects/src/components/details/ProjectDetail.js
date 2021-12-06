import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SlideProject from "./slide/SlideProject";
import { Typography } from "@mui/material";

const StyleBox = styled(Box)({
    padding: '20px 200px',
    backgroundColor: 'white',
    height: 'auto',
    marginBottom: '100px',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    position: 'relative',
    zIndex: '100'
});

const StyleBoxContent = styled(Box)({
    display: 'flex',
    padding: '55px 55px 0 55px'
});

export default function ProjectDetail() {
    return (
        <StyleBox>
            <SlideProject />
            <StyleBoxContent>
                <Box sx={{ width: '70%' }}>
                    <Typography variant="h5" sx={{ fontWeight: '900' }} >
                        B U I L D I N G     A R C H E T E C
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Box>
                <Box sx={{ width: '30%', }}>
                    <ul>
                        <Typography variant="p" sx={{ color: '#6D6D6D' }}>
                            DATE:
                            <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D', marginLeft: '15px' }}>
                                06/12/2021
                            </Typography>
                        </Typography>
                        <br />
                        <Typography variant="p" sx={{ marginTop: '80px', color: '#6D6D6D' }} >
                            ARCHETEC:
                            <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D', marginLeft: '15px' }}>
                                Anthony Lopez
                            </Typography>
                        </Typography>
                    </ul>
                </Box>
            </StyleBoxContent>

        </StyleBox>
    )
}