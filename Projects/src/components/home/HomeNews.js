import { Box } from "@mui/system";
import React from "react";
import { Typography, Divider } from "@mui/material";
import newsMock from "../../__mocks__/newsMock";
import NewsCard from "../news/NewsCard";

export default function HomeNews() {
    const newsItem = new Array();
    for (let i = 0; i < 8; i++) {
        newsItem[i] = newsMock[i];
    }
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
                    News
                </Typography>
                <Divider sx={{ flexGrow: 1, ml: 1, borderColor: 'black', opacity: '1' }} />
            </Box>
            <Box
                sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    flexDirection: 'colurmn',
                    height: 'auto',
                    marginBottom: '350px',
                    zIndex: '100',
                    position: 'relative'
                }}
            >
                {newsItem.map((news) => (
                    <NewsCard news={news} />
                ))}
            </Box>
        </>
    )
};
