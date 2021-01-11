/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./info.css";
import { MainContainer, Input, Choice } from "../styles";
import img from "../../assets/home_2.svg";
import { postURL } from "../../services/api-service";

const Info = () => {
  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState({});
  const [next, setNext] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postURL(url).then((res) => setResUrl(res));
    setNext(true);
  };
  return (
    <>
      <MainContainer>
        {!next && (
          <div className="form_container">
            <h1 className="form_title">What URL are you looking after ?</h1>
            <form onSubmit={handleSubmit}>
              <div className="input_container">
                <Input
                  className="input_input"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <label className="input_label">Your URL</label>
              </div>
              <Choice className="centered_btn_first">Next</Choice>
            </form>
          </div>
        )}
        {next && (
          <>
            <h1>{resUrl.clickCounter}</h1>
            <div>
              <p>Last accessed:</p>
              <p>{resUrl.clickCounter[resUrl.clickCounter.length - 1]}</p>
            </div>
          </>
        )}
        <img src={img} alt="" className="img_info" />
      </MainContainer>
    </>
  );
};

export default Info;
