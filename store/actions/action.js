const axios = require("axios");

const url = "https://toto-do-7.herokuapp.com/hotel";

export const get = () => (dispatch) => {
  return axios.get(url).then((res) => {
    dispatch(actualData(res.data, "GET"));
  });
};

function actualData(data, type) {
  return {
    type: type,
    payload: data,
  };
}

export const display = (data) => {
  return {
    type: "DISPLAY",
    payload: data,
  };
};
export const displayRoom = (data) => {
  return {
    type: "DISPLAYROOM",
    payload: data,
  };
};

export const getRooms = (id) => (dispatch) => {
  return axios.get(`${url}/${id}/rooms`).then((res) => {
    dispatch(actualData(res.data, "GETROOMS"));
  });
};
export const filter = (data) => {
  return {
    type: "FILTER",
    payload: data,
  };
};
