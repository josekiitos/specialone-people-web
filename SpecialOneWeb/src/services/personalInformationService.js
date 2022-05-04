import axios from 'axios';
import { PEOPLE_API_URL } from '../constants/Environment.js';

export const getOnePersonalInformation = (id) => {
    return axios.get(PEOPLE_API_URL +'/personalInfo/' + id)
        .then((res) => res)
}

export const updatePersonalInformation = (id, body) => {
    return axios.put(PEOPLE_API_URL + '/personalInfo/' + id, body)
        .then((res) => res)
}