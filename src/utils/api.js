import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGJmYWE1ZjhlZjNmYTY3MzAzZDdhMjFmNTk1YjE3YyIsInN1YiI6IjYzZGJkZTMyZDVmZmNiMDA4ZTBkMTY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xazuVPSKmjTNq-1-0bFj0m81IkbCgh1pC1Rws7ycBSM"

const headers = {
    Authorization: "bearer " + API_KEY,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};