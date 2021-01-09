/* eslint-disable consistent-return */
/* eslint-disable no-console */
const BASE_URL = "http://localhost:3001";

exports.postURL = async (url) => {
  try {
    console.log(url);
    return fetch(`${BASE_URL}/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (error) {
    console.log(error);
  }
};

exports.getURL = async (url) => {
  try {
    return fetch(`${BASE_URL}/shorten`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    });
  } catch (error) {
    console.log(error);
  }
};
