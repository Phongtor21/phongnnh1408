import { Typography, Divider } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

export default function AboutTeam() {
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
                    About Team
                </Typography>
                <Divider sx={{ flexGrow: 1, ml: 1, borderColor: '--bs-dark', opacity: '1' }} />
            </Box>
        </>
    )
}
