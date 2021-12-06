import { Box } from "@mui/system";
import React from "react";
import { Typography, Divider } from "@mui/material";
import SlideMenu from "./slide/SlideMenu";

export default function HomeSlide() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    padding: 0,
                    marginBottom: '20px'
                }}
            >
                <Typography className="section-title"
                    sx={{
                        marginRight: '16px',
                        fontSize: '20px'
                    }}
                >
                    We are
                </Typography>
                <Divider sx={{ flexGrow: 1, ml: 1, height: '1.5px', borderColor: 'black', opacity: '1' }} />
            </Box>
            <Box>
                <SlideMenu />
            </Box>
        </>
    )
};
