import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './hawker.css'
import { styled } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

class Hawker extends React.Component {
    constructor(props){
        super(props)
    }

    Input = styled('input')({
        display: 'none',
    });

    render(){
        return (
            <div className='hawker-page'>
                <div className='hawker-section'>
                    <h1>ABC Restaurant</h1>
                    <Box m={0}>
                        <Link underline="always" onClick={() => this.props.setPage("home")} className="redirect-button">
                            Back to Home
                        </Link>
                    </Box>
                    <p>255B #1-01 Sample Street, Singapore</p>
                    <h3>POST FOOD</h3>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField
                        id="outlined-name"
                        label="Food Name"
                        />  
                        <TextField
                        id="outlined-name"
                        label="Quantity (max 10)"
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 10 } }}
                        />
                        <TextField
                        id="outlined-name"
                        label="Description"
                        multiline
                        rows={3}
                        />
                    </Box>
                    <label htmlFor="contained-button-file">
                        <this.Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload Photo
                        </Button>
                    </label>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="success" component="span">
                            Submit
                        </Button>
                    </label>
    
                </div>
                <div className='past-record-section'>
                    <h2>6th Apr 2022</h2>
                    <div className='past-record-foods'>
                        <Box m={2}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={require(`../images/banmian.jpeg`)}
                                    alt="banmian"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.primary">
                                        Ban Mian
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ordered by Jason (16/4/2022 21:00:00)
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Quantity Left: 0
                                    </Typography>
                                    <Alert severity="success">SOLD OUT!</Alert>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box m={2}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={require(`../images/banmian.jpeg`)}
                                    alt="banmian"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.primary">
                                            Ban Mian
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Ordered by John (16/4/2022 20:32:00)
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Quantity Left: 1
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box m={2}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={require(`../images/laksa.jpeg`)}
                                    alt="banmian"
                                />
                                <CardContent>
                                <Typography variant="body2" color="text.primary">
                                            Laksa
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Ordered by Emily (16/4/2022 20:31:00)
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Quantity Left: 3
                                </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                    </div>
                </div>
            </div>
        )
    }
}

export default Hawker