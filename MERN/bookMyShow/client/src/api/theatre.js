import { axiosInstance } from ".";

export const addTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "api/theatres/add-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllTheatresForAdmin = async () => {
  try {
    const response = await axiosInstance.get("api/theatres/get-all-theatres");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
// get theatre for a specific owner

export const getAllTheatres = async (ownerId) => {
  try {
    const response = await axiosInstance.get(
      `api/theatres/get-all-theatre-by-owner/${ownerId}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "api/theatres/update-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTheatre = async (theatreId) => {
  try {
    const response = await axiosInstance.delete(
      `api/theatres/delete-theatre/${theatreId}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
