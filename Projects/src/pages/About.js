import React from "react";
import { styled } from '@mui/material/styles';
import AboutUs from "../components/about/AboutUs";
import { Box } from "@mui/system";
import AboutTeam from "../components/about/AboutTeam";
import AboutContact from "../components/about/AboutContact";

const StyleBox = styled(Box)({
    // padding: '0 ',
    width: 900,
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


export const About = () => {
    return (
        <StyleBox>
            <div id="about" class="about section-padding" data-scroll-index="1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <AboutUs />
                            <AboutTeam />
                        </div>
                        <div class="col-md-5">
                            <AboutContact/>
                        </div>
                    </div>
                </div>
            </div>

        </StyleBox >
    )
};