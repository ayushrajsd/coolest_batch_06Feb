import { axiosInstance } from ".";

export const addShow = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/shows/add-show", payload);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateShow = async (payload) => {
  try {
    const response = await axiosInstance.put("/api/shows/update-show", payload);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getShowsByTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/get-all-shows-by-theatres",
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/delete-show",
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/get-all-theatres-by-movie",
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/get-show-by-id",
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
