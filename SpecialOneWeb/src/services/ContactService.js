import axios from 'axios';
import { PEOPLE_API_URL } from '../constants/Environment.js';

export const getAllContactTypes = () => {
    return axios.get(PEOPLE_API_URL + '/contact-type')
        .then((res) => res)
}

export const createContactInfo = (id, body) => {
    return axios.post(PEOPLE_API_URL + '/contactInfo/' + id, body)
        .then((res) => res)
}