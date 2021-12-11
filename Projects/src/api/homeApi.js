import axiosClient from "./axiosClient";

const homeApi = {

    // [GET] /home
    allHome: () => {
        const url = `/home/`;
        return axiosClient.get(url);
    },

};

export default homeApi;