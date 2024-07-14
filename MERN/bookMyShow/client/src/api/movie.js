import { axiosInstance } from "./index";

// get all movies
export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("api/movies/get-all-movies");
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllMovies API ", error);
  }
};

// add a movie

export const addMovie = async (movie) => {
  try {
    console.log("movie", movie);
    const response = await axiosInstance.post("api/movies/add-movie", movie);
    return response.data;
  } catch (error) {
    console.log("Error while calling addMovie API ", error);
  }
};

// update a movie
export const updateMovie = async (movie) => {
  try {
    const response = await axiosInstance.put("api/movies/update-movie", movie);
    return response.data;
  } catch (err) {
    console.log("Error while calling updateMovie API ", err);
  }
};

// delete a movie
export const deleteMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "api/movies/delete-movie",
      payload
    );
    return response.data;
  } catch (err) {
    console.log("Error while calling deleteMovie API ", err);
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/movies/movie/${id}`);
    return response.data;
  } catch (err) {
    console.log("Error while calling getMovieById API ", err);
  }
};
