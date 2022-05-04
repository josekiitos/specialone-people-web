import axios from 'axios';
import { PEOPLE_API_URL } from '../constants/Environment.js';

export const getAllContactTypes = () => {
    //return axios.get(PEOPLE_API_URL + '/contact-types')
      //  .then((res) => res)
    return [{ id: '1', name: 'EMAIL' }, { id: '2', name: 'PHONE' }, {id: '3', name: 'SLACK'}]
}