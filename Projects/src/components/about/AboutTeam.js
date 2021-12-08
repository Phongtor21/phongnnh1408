import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import MemberCard from "./MemberCard";
import teamMock from "../../__mocks__/teamMock";
import { styled } from '@mui/material/styles';

const StyleBox = styled(Box)({
    margin: '0 auto',
    backgroundColor: 'white',
    height: 'auto',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'colurmn',
    display: 'flex'
});

export default function AboutTeam() {
    return (
        <>
            <Box sx={{ padding: '20px 0' }}>
                <Typography className="section-title"
                    sx={{
                        marginRight: '16px',
                        fontSize: '18px'
                    }}>
                    About
                </Typography>
                <StyleBox>
                    <div class="scrollbar scrollbar-about" id="style-1">
                        <div class="force-overflow">

                            {teamMock.map((member) => (
                                <MemberCard member={member} />
                            ))}

                        </div>
                    </div>
                </StyleBox>
            </Box>
        </>
    )
}
