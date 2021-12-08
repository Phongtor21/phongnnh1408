import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SlideProject from "./slide/SlideProject";
import { Typography } from "@mui/material";
import SlideNews from "./slide/SlideNews";


const StyleBox = styled(Box)({
    // padding: '10px 255px',
    width: '900px',
    margin: '0 auto',
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
    width: '900px',
    margin: '0 auto',
    paddingTop: '20px'
});

export default function NewsDetail() {
    return (
        <StyleBox >
            <SlideNews />
            <StyleBoxContent>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: '900' }} >
                        B U I L D I N G   A R C H E T E C
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                        <div class="scrollbar scrollbar-detail" id="style-1">
                            <div class="force-overflow">
                                {[...new Array(50)]
                                    .map(
                                        () => `Cras mattis consectetur purus sit amet fermentum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                    )
                                    .join('\n')}
                            </div>
                        </div>
                    </Typography>
                </Box>

            </StyleBoxContent>
        </StyleBox>
    )
}