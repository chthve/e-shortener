/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./info.css";
import moment from "moment";
import { MainContainer, Input, Choice } from "../styles";
import img from "../../assets/home_2.svg";
import img2 from "../../assets/forms/Asset-4.svg";
import img3 from "../../assets/forms/Asset-2.svg";
import img4 from "../../assets/forms/Asset-5.svg";
import { postURL } from "../../services/api-service";
import Loader from "../Loader/loader";

const Info = () => {
  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState({});
  const [resUndefined, setResUndefined] = useState(false);
  const [next, setNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUrl({ url: e.target.value });
  };

  const handleSubmit = (e, clientUrl) => {
    setIsLoading(true);
    e.preventDefault();
    postURL(clientUrl)
      .then((res) => (res ? setResUrl(res) : setResUndefined(true)))
      .then(setNext(true));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {isLoading && (
        <MainContainer>
          <Loader />
          <img src={img} alt="" className="img_info" />
          <img src={img2} alt="" className="img_info_2" />
          <img src={img3} alt="" className="img_info_3" />
          <img src={img4} alt="" className="img_info_4" />
        </MainContainer>
      )}
      {!isLoading && (
        <MainContainer>
          {!next && (
            <div className="form_container">
              <h1 className="form_title">What URL are you looking after ?</h1>
              <form onSubmit={(e) => handleSubmit(e, url)}>
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
          {next && resUrl && (
            <>
              {resUrl.clickCounter && (
                <div className="info_container">
                  <p>Your URL has been accessed </p>
                  <p className="info_text">{resUrl.clickCounter.length}</p>
                  <p>times</p>
                  {resUrl.clickCounter.length > 1 && (
                    <>
                      <p>, and for the last time</p>
                      <p className="info_text">
                        {moment(
                          resUrl.clickCounter[resUrl.clickCounter.length - 1]
                        )
                          .startOf("minutes")
                          .fromNow()}
                      </p>
                    </>
                  )}
                </div>
              )}
            </>
          )}
          {next && resUndefined && (
            <>
              <h1 className="form_title">Sorry we cant find your url</h1>
            </>
          )}
          <img src={img} alt="" className="img_info" />
          <img src={img2} alt="" className="img_info_2" />
          <img src={img3} alt="" className="img_info_3" />
          <img src={img4} alt="" className="img_info_4" />
        </MainContainer>
      )}
    </>
  );
};

export default Info;
