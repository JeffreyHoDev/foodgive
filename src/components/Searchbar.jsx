import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


class Searchbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                <TextField 
                    id="standard-basic" 
                    label="Search food" 
                    onChange={(e) => this.props.searchingQuery(e)}
                />
                    {/* <TextField
                    id="outlined-name"
                    label="Search"
                    onChange={(e) => this.props.searchingQuery(e)}
                    />   */}
                </Box>

                {/* <input placeholder='Search Foods' onChange={(e) => this.props.searchingQuery(e)}></input> */}
            </>
        )
    }
}

export default Searchbar;