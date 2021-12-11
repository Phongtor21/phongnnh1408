import axiosClient from "./axiosClient";

const homeApi = {

    // [GET] /home
    allHome: () => {
        const url = `/`;
        return axiosClient.get(url);
    },

};

export default homeApi;