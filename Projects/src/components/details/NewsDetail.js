import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SlideProject from "./slide/SlideProject";
import { Typography } from "@mui/material";

const StyleBox = styled(Box)({
    padding: '10px 255px',
    backgroundColor: 'white',
    height: 'auto',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    position: 'relative',
    zIndex: '100'
});

const StyleBoxContent = styled(Box)({
    display: 'flex',
    padding: '10px 55px 0 55px'
});

export default function ProjectDetail() {
    return (
        <StyleBox>
            <SlideProject />
            <StyleBoxContent>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: '900' }} >
                        B U I L D I N G   A R C H E T E C
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Box>
            </StyleBoxContent>

        </StyleBox>
    )
}