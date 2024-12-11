import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://wonders-of-america-backend.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
