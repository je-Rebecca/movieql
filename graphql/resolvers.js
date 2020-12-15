import {getMovies ,getMovie ,getSuggestions } from "./db";

const resolver= {
    Query :{
        movies: (_, {rating,limit}) => getMovies(limit,rating),
        movie:(_, {id}) =>getMovie(id),
        suggestions:(_, {id}) =>getSuggestions(id)
    }
};

export default resolver;