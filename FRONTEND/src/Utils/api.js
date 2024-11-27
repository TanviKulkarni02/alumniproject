import axios from "axios";


export const searchAlumni = async (searchData) => {
  try {
    const response = await axios.post("http://localhost:8080/api/alumni/search", searchData);
    console.log("this is response",response.data)
    return response.data;
  } catch (error) {
    console.error("Search failed", error);
    throw error;
  }
};


export const registerAlumni = async (formData) => {
  try {
    const response = await axios.post("http://localhost:8080/api/alumni/register", formData);
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};


