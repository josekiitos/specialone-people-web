import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ContactInfoForm = () => {
    const [contactType, setContactType] = useState('');
    const [contactDetail, setContactDetail] = useState('');

    const handleChange = (event) => {
        setContactType(event.target.value);
    };

    const handleContactDetail = (event) => {
        setContactDetail(event.target.value)
    }

    const hendleClickSubmit = () => {
        console.log('submit');
    }

    return (
        <Box sx={{ minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={contactType}
                    label="Contact Type"
                    onChange={handleChange}
                >
                    <MenuItem value={'email'}>EMAIL</MenuItem>
                    <MenuItem value={'phone'}>PHONE</MenuItem>
                    <MenuItem value={'slack'}>SLACK</MenuItem>
                </Select>
                <TextField id="nickName" label="Detail" variant="outlined"
                    value={contactDetail}
                    onChange={handleContactDetail}
                    fullWidth style={{ marginTop: 10 }}
                    multiline
                    rows={4} />
            </FormControl>
            <Button variant="contained" style={{ marginTop: 15 }} onClick={() => hendleClickSubmit()}>Submit</Button>
        </Box>
        )
}

export default ContactInfoForm;