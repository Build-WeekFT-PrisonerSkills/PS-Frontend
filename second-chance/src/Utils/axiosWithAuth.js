import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    // return an instance of axios
    return axios.create({
        baseURL: 'https://prisoner-skills-bw.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};