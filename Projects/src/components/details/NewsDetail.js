import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import newsApi from "../../api/newsApi";
import LoadingScreen from "../LoandingScreen";

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

    const [news, setNews] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await newsApi.getNews(pathname.split('/').pop());
                const { news, prevNews, nextNews } = response
                setNews({
                    current: news,
                    prevNews,
                    nextNews
                });

            } catch (error) {
                console.log('Failed to get news: ', error);
            }
        }

        getNews();
    }, []);

    function checkButtonPrev() {
        if (news.prevNews == null) {
            return true;
        }
    }
    function checkButtonNext() {
        if (news.nextNews == null) {
            return true;
        }
    }

    return (
        <>
            {news && (
                <>
                    <StyleBox >
                        <img className="img-news-detail" src={news.image} alt={news.name} />
                        <StyleBoxContent>
                            <Box>
                                <Typography className="section-title" sx={{ fontWeight: '900' }} >
                                    {news.name}
                                </Typography>
                                <Typography variant="p" sx={{ fontSize: '12px', color: '#6D6D6D' }}>
                                    <div class="scrollbar scrollbar-detail" id="style-4">
                                        <div class="force-overflow">
                                            {news.description}
                                        </div>
                                    </div>
                                </Typography>
                            </Box>

                        </StyleBoxContent>
                    </StyleBox>
                    <div className='pagination'>
                        <button
                            disabled={checkButtonPrev()}
                        // onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <button
                            disabled={checkButtonNext()}
                        // onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </>
            )}
            {!news && (<LoadingScreen />)}
        </>

    )
}