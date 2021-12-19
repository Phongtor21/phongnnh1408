import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from './logo.svg';
import { Button } from '@mui/material';
import menusApi from '../../api/menusApi';

export const HeaderW = () => {
    return (
        <div>
            <AutoGrid />
        </div>
    )
};
const BootstrapButton = styled(Button)({
    boxShadow: "none",
    boxSizing: "small",
    textTransform: "none",
    fontSize: '14px',
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


const GridMenu = styled(Grid)(({
    textAlign: 'center',
    boxShadow: "none",
    textTransform: "none",
    color: "#333333",
    
}));
const MenuItem ={
    textDecoration: "none",
    textAlign: 'center',
    textTransform: "none",
    color: "#333333",
    paddingBottom:"10px"
}
const LineItemL ={
    textDecoration: "none",
    textAlign: 'center',
    textTransform: "none",
    color: "#333333",
    paddingLeft:"6px"
}
const LineItemR ={
    textDecoration: "none",
    textAlign: 'center',
    textTransform: "none",
    color: "#333333",
    paddingRight:"6px"
}
const LogoItem ={
    textDecoration: "none",
    paddingBottom:"3vh",
    paddingTop:"1vh"
}
export default function AutoGrid() {
    const [menu, setMenu] = React.useState(null);

    React.useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await menusApi.allMenu();
                setMenu(response);
            } catch (error) {
                console.log('Failed to fetch menu: ', error)
            }
        }
        fetchMenu();
    }, [])

    return (
        <>
            {menu && (
                <div className="App-header">
                    <Link to="/" style={LogoItem}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={3}>
                            
                            <li item xs >
                            <Link to="/projects" style={MenuItem}>
                                    <BootstrapButton>
                                        {menu[0]?.title || 'Chưa có'}
                                    </BootstrapButton>
                            </Link>
                            </li>
                            <li item xs>
                            <Link to="" style={LineItemL }>|</Link>
                            </li>
                            <li item xs>
                            <Link to="/news" style={MenuItem}>
                                    <BootstrapButton>
                                        {menu[1]?.title || 'Chưa có'}
                                    </BootstrapButton>
                            </Link>
                            </li>
                            <li item xs>
                            <Link to="" style={LineItemR }>|</Link>
                            </li>
                            <li item xs>
                            <Link to="/about" style={MenuItem}>
                                    <BootstrapButton>
                                        {menu[2]?.title || 'Chưa có'}
                                    </BootstrapButton>
                            </Link>
                            </li>
                        </Grid>
                    </Box>
                    
                </div>
                
            )}
            {!menu && ('')}
        </>

    );
}


