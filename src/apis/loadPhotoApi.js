import { axiosNews} from "./axiosClient";

const loadPhotoApi = { 
    getAllPhotos(params){
        const url = '/images.json';
        return axiosNews.get(url, {params});
    }
};

export default loadPhotoApi;