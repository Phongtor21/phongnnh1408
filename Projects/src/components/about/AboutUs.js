import * as React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function AboutUs() {
    return (
        <>
            <Box sx={{ marginBottom: '20' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        padding: 0,
                        marginBottom: '5px'
                    }}
                >
                    <Typography className="section-title"
                        sx={{
                            marginRight: '16px',
                            fontSize: '18px'
                        }}
                    >
                        About Us
                    </Typography>

                </Box>

                
                        <Typography variant='p' sx={{ fontSize: '12px' }}>
                            Architecture innovation tristiue usto duision vitae diam nemue nivamus aesta atene artin arinian finibus ate viverra nec lacus. Nedana edino suscipe.
                            Savoye inila duman aten elit finibus vivera alacus themone the drudean seneice miuscibe noneten the fermen. Savoye architecture duiman at elit finibus viverra nec a lacus themo drudeane sene voice misuscipit non sagie the volume fermen.
                            Viverra tristique jusio the ivite dianne onen nivam acsestion augue artine. Savoye toverra ristique usto vitae diam nenon sovaye aesta vazio lacus.
                        </Typography>
                    
            </Box>

        </>
    );
}


