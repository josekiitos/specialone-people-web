import React, { useState, useEffect} from "react";
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
        console.log(personInfo.data)
        setPersonalInfo(personInfo.data);
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
                <TextField id="outlined-basic" label="First Name" variant="outlined"
                    value={personalInfo.firstName}
                    fullWidth style={{ marginTop: 15, width: '60%' }} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined"
                    value={personalInfo.lastName}
                    fullWidth style={{ marginTop: 10, width: '60%' }} />
                <TextField id="outlined-basic" label="Nick Name" variant="outlined"
                    value={personalInfo.nickName}
                    fullWidth style={{ marginTop: 10, width: '60%' }} />
            </Box>
            <Button variant="contained" style={{ marginTop: 15, marginLeft: '50%' }}>Submit</Button>
        </Box>
    )
}

export default PersonalInformationForm;