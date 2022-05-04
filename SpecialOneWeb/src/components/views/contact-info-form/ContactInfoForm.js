import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAllContactTypes } from '../../../services/ContactService.js';

const ContactInfoForm = () => {
    const [contactType, setContactType] = useState('');
    const [contactTypes, setContactTypes] = useState([]);
    const [contactDetail, setContactDetail] = useState('');

    useEffect(() => {
        fetchContactTypes();
    }, [])

    const fetchContactTypes = async () => {
        let contactTypeList = [];
        try {
            contactTypeList = await getAllContactTypes();
            setContactTypes(contactTypeList)
        } catch (error) {
            console.error('Error retreiving contact types' + error);
        }
    }

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
                <InputLabel id="demo-simple-select-label">Contact Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={contactType}
                    label="Contact Type"
                    onChange={handleChange}
                >
                    {contactTypes.map((contactT, index) => (
                        <MenuItem value={contactT} key={index}>{contactT.name}</MenuItem>
                     ))}
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