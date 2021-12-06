import React from "react";
import { styled } from '@mui/material/styles';
import AboutUs from "../components/about/AboutUs";
import { Box } from "@mui/system";
import AboutTeam from "../components/about/AboutTeam";

const StyleBox = styled(Box)({
    padding: '50px 200px',
    backgroundColor: 'white',
    height: 'auto',
    marginBottom: '200px',
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
            <AboutUs />
            <AboutTeam />
        </StyleBox>
    )
};