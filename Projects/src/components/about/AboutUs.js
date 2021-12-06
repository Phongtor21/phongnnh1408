import * as React from 'react';
import { Box } from '@mui/system';
import { Typography, Divider } from '@mui/material';

export default function AboutUs() {
    return (
        <>
            <div id="about" class="about section-padding" data-scroll-index="1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
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
                                    About
                                </Typography>
                                {/* <Divider sx={{ flexGrow: 1, ml: 1, height: '1.5px', borderColor: 'black', opacity: '1' }} /> */}
                            </Box>
                            <p>Architecture innovation tristiue usto duision vitae diam nemue nivamus aesta atene artin arinian finibus ate viverra nec lacus. Nedana edino suscipe.</p>
                            <p>Savoye inila duman aten elit finibus vivera alacus themone the drudean seneice miuscibe noneten the fermen. Savoye architecture duiman at elit finibus viverra nec a lacus themo drudeane sene voice misuscipit non sagie the volume fermen.</p>
                            <p>Viverra tristique jusio the ivite dianne onen nivam acsestion augue artine. Savoye toverra ristique usto vitae diam nenon sovaye aesta vazio lacus.</p>
                            <Typography className="section-title"
                                sx={{
                                    marginRight: '16px',
                                    fontSize: '20px'
                                }}>
                                About
                            </Typography>
                        </div>
                        <div class="col-md-5">
                            <div class="about-img">
                                <div class="img"> <img src="http://duruthemes.com/demo/html/savoye/multipage-light/img/about.png" class="img-fluid" alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


