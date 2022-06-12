import axios from "axios";
const BASE_URL = "http://13.233.178.114:8010/v1";

export const requestService = (obj) => {
  const token = localStorage.getItem("token");

  return axios({
    ...obj,
    url: `${BASE_URL}${obj.url}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res)
    .catch(function (error) {
      console.log(error);
      return error;
      // handle error
    });
};

export default requestService;
