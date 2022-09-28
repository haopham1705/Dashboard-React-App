import axios from 'axios';
// Axios Tracker
const axiosBaseURL = axios.create({
    baseURL: process.env.BASE_URL,
    header: {
        'Content-type': 'application/json',
    },
})

//request interceptor
axiosBaseURL.interceptors.request.use(function (config) {
    //before request
    return config;
}, function (error) {
    return Promise.reject(error);
});
//response interceptor
axiosBaseURL.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

const axiosPhotos = axios.create({
    baseURL: process.env.LIST_PHOTOS_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosPhotos.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axiosPhotos.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export { axiosBaseURL, axiosPhotos };