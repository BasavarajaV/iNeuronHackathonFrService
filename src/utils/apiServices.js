import axios from "axios";
import requestService from "./requestService";

const BASE_URL = "http://13.233.178.114:8010/v1";

export const authUser = (data) =>
  axios({
    method: "POST",
    url: `${BASE_URL}/auth/login`,
    data,
  })
    .then((res) => res)
    .catch(function (error) {
      return error;
      // handle error
      console.log(error);
    });

export const getTicketList = () => {
  const token = localStorage.getItem("token");

  return axios({
    method: "GET",
    url: `${BASE_URL}/queries/getQueries`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log("res====>", res);
      return res;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error;
    });
};

export const getTicketDetail = (id) => {
  const token = localStorage.getItem("token");

  return axios({
    method: "GET",
    url: `${BASE_URL}/queries/getQuery/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log("res====>", res);
      return res;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error;
    });
};

export const addComment = (data) =>
  requestService({
    method: "POST",
    url: `/comments/add`,
    data,
  });
