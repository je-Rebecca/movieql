
import fetch from "node-fetch";
const API_URL =" https://yts-proxy.nomadcoders1.now.sh/list_movies.json?"

export const getMovies =(limit,rating) => {
    let REQUEST_URL = API_URL;
    if(limit >0){
        REQUEST_URL += `limit =${limit}`;
    }
    if(rating >0){
        REQUEST_URL += `&miniumn_rating =${rating}`;
    }
    return fetch(REQUEST_URL)
    .then(res =>res.json())
    .then(json => json.data.movies);
};