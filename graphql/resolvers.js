import {getMovies } from "./db";

const resolver= {
    Query :{
        movies: (_, {rating,limit}) => getMovies(limit,rating)
    }
};

export default resolver;