/* eslint-disable consistent-return */
/* eslint-disable no-console */
const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

export async function postShorten(url) {
  try {
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
}

export async function postURL(url) {
  try {
    return fetch(`${BASE_URL}/info`, {
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
}
