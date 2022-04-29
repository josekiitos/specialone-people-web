import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const PersonalInformationForm = () => {
    return (
        <Box
            component="form"
            sx={{
                width: '100%',
                justifyContent: 'center',
                alignItem: 'center'
            }}
            noValidate
            autoComplete="off"
        >
            <Avatar
                alt="Profile Picture"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                sx={{
                    width: 100, height: 100, marginLeft: '50%'
                }}
            />
            <Box sx={{ width: '100%', marginLeft: '25%'}}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth style={{ marginTop: 15, width: '60%' }} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth style={{ marginTop: 10, width: '60%'  }} />
                <TextField id="outlined-basic" label="Nick Name" variant="outlined" fullWidth style={{ marginTop: 10, width: '60%'  }} />
            </Box>
            <Button variant="contained" style={{ marginTop: 15, marginLeft: '50%' }}>Contained</Button>
        </Box>
    )
}

export default PersonalInformationForm;