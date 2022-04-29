import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { getOnePersonalInformation } from '../../../services/personalInformationService.js';

const PersonalInformationForm = () => {
    const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', nickName: '', profilePicture: '' })

    useEffect(() => {
        getPersonalInfoById('309d36de-b29f-4074-b8b1-41165909bd61');
    }, []);

    const getPersonalInfoById = async (id) => {
        let personInfo;
        try {
            personInfo = await getOnePersonalInformation(id);
        } catch (error) {
            console.error('Error retreiving personal information' + error)
        }
        setPersonalInfo(personInfo.data);
    }

    const handleChangeFirstName = (event) => {
        let newPersonalInfo = { ...personalInfo };
        newPersonalInfo.firstName = event.target.value;
        setPersonalInfo(newPersonalInfo);
    }

    const handleChangeLastName = (event) => {
        let newPersonalInfo = { ...personalInfo };
        newPersonalInfo.lastName = event.target.value;
        setPersonalInfo(newPersonalInfo);
    }

    const handleChangeNickName = (event) => {
        let newPersonalInfo = { ...personalInfo };
        newPersonalInfo.nickName = event.target.value;
        setPersonalInfo(newPersonalInfo);
    }

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
                src={personalInfo.profilePicture}
                sx={{
                    width: 100, height: 100, marginLeft: '50%'
                }}
            />
            <Box sx={{ width: '100%', marginLeft: '25%'}}>
                <TextField id="firstName" label="First Name" variant="outlined"
                    value={personalInfo.firstName} onChange={handleChangeFirstName}
                    fullWidth style={{ marginTop: 15, width: '60%' }} />
                <TextField id="lastName" label="Last Name" variant="outlined"
                    value={personalInfo.lastName}
                    onChange={handleChangeLastName}
                    fullWidth style={{ marginTop: 10, width: '60%' }} />
                <TextField id="nickName" label="Nick Name" variant="outlined"
                    value={personalInfo.nickName}
                    onChange={handleChangeNickName}
                    fullWidth style={{ marginTop: 10, width: '60%' }} />
            </Box>
            <Button variant="contained" style={{ marginTop: 15, marginLeft: '50%' }}>Submit</Button>
        </Box>
    )
}

export default PersonalInformationForm;