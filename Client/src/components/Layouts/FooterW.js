import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Typography } from "@mui/material";
import footerApi from '../../api/footerApi';
 

const BootstrapButton = styled(Button)({
    boxShadow: "none",
    boxSizing: "small",
    textTransform: "none",
    fontSize: '12px',
    fontWeight: 300,
    color: "#333333",
    lineHeight: 0,
    padding: 0,
    backgroundColor: "#ffff",
    marginLeft: "-24px",
    marginRight: "-24px",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#999999",
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#fff",
        borderColor: "#fff"
    },
});

const DisabledButton = styled(BootstrapButton)({
    pointerEvents: 'none',
});

// const GridMenu = styled(Grid)(({
//     textAlign: 'center',
//     boxShadow: "none",
//     textTransform: "none",
//     marginTop: "2px",
//     color: "#333333",
// }));
// const MenuItem = {
//     textDecoration: "none",
//     textAlign: 'center',
//     textTransform: "none",
//     color: "#333333",
//     paddingBottom: "10px",
//     width: "1vh"
// }
const LineItemL = {
    textDecoration: "none",
    textAlign: 'center',
    textTransform: "none",
    color: "#333333",
    paddingLeft: "14px",
    paddingRight: "6px"
}
const LineItemR = {
    textDecoration: "none",
    textAlign: 'center',
    textTransform: "none",
    color: "#333333",
    paddingLeft: "6px",
    paddingRight: "14px"

}

const itemFoot = {
    magrinRight: "1.5vh",
    marginLeft: "1.5vh",
   
}
const chinhFoot = {
   
}

const LogoItem = {
    textDecoration: "none",
    paddingBottom: "1vh",
    paddingTop: "0vh",
    marginBottom:"2vh",
}
export const FooterW = () => {
    const [footer, setFooter] = React.useState(null);

    React.useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await footerApi.allFooter();
                setFooter(response);

            } catch (error) {
                console.log('Failed to fetch banners: ', error)
            }
        }
        fetchBanners();
    }, [])

    return (
        
        <>
            {footer && (
                <div className="content-footer App-footer">
                    <Link to="/" style={LogoItem}>
                        <Typography sx={{
                            fontSize: "16px",
                            fontWeight:500,
                            color: "#333333"
                        }}>
                            A7 STUDIO
                        </Typography>
                    </Link>
                    <Box  sx={{ flexGrow: 1 }} style={{ marginBottom: "3vh" }}>
                        <Grid container
                            spacing={3}
                            sx={{ width: '100vh',justifyContent: 'center',alignItems:'center'  }} 
                        >
                            <li item xs={3} >
                                <a className='footer-button' href={footer[0]?.contact[0]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.connect[0]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                                
                            </li>
                            <li item xs={1}>
                                <Link to="" style={LineItemL}>|</Link>
                            </li>
                            <li item xs={4}>
                                <a className='footer-button' href={footer[0]?.contact[1]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.connect[1]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </li>
                            <li item xs={1}>
                                <Link to="" style={LineItemR}>|</Link>
                            </li>
                            <li item xs={3}>
                                <a className='footer-button' href={footer[0]?.contact[2]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.connect[2]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </li>
                        </Grid>

                    </Box>
                    
                    <Box sx={{ flexGrow: 2 }}   >
                        <Grid container
                            spacing={3}
                      
                            sx={{ width: '100vh',justifyContent: 'center',alignItems:'center'  }} 
                        >
                            <li item xs={3}   >
                                <a className='footer-button' href={footer[0]?.contact[0]?.link}  >
                                    <DisabledButton style={chinhFoot}>
                                        {footer[0]?.contact[0]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </li>
                            <li item xs={1} style={itemFoot}  >
                                <a className='footer-button' href={footer[0]?.connect[0]?.link}>
                                    <DisabledButton></DisabledButton>
                                </a>
                            </li>
                            <li item xs={4}    >
                                <a className='footer-button' href={footer[0]?.contact[1]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.contact[1]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </li>
                            <li item xs={1} style={itemFoot}  >
                                <a className='footer-button' href={footer[0]?.connect[0]?.link}>
                                <DisabledButton></DisabledButton>
                                </a>
                            </li>
                            <li item xs={3} >
                                <a className='footer-button' href={footer[0]?.contact[2]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.contact[2]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </li>
                        </Grid>

                    </Box>
                      
                   
                </div>
            )}
            {!footer && ('')}
        </>

    )
};

