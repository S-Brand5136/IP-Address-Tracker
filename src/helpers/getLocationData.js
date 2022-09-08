import axios from "axios";

export const getLocationData = async (ipAddress) => {
  try {
    const { data } = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?ipAdress=${ipAddress}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return data;
  } catch (error) {
    console.error("here");
    return error;
  }
};
