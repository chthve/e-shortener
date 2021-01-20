/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./shorten.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import img from "../../assets/shorten.svg";
import img2 from "../../assets/shorten-2.svg";
import img3 from "../../assets/shorten-3.svg";
import img4 from "../../assets/shorten-4.svg";
import party from "../../assets/party.png";
import copy from "../../assets/copy.svg";
import { MainContainer, Input, Choice } from "../styles";
import { postShorten } from "../../services/api-service";
import Loader from "../Loader/loader";

const Shorten = () => {
  const [code, setCode] = useState(false);
  const [secondForm, setSecondForm] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [form, setForm] = useState({
    longUrl: "",
    code: "",
  });
  const [urlRes, setUrlRes] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const firstSubmit = (e) => {
    e.preventDefault();
    setLoader();
    setCode(true);
  };

  const secondSubmit = (e) => {
    e.preventDefault();
    setLoader();
    setSecondForm(true);
  };

  const handleChange = (e, identifier) => {
    const newForm = { ...form };
    newForm[identifier] = e.target.value;
    setForm(newForm);
  };

  const handleSubmit = (e, url) => {
    e.preventDefault();
    setLoader();
    postShorten(url).then((res) => setUrlRes(res.shortUrl));
    setSubmited(true);
  };

  return (
    <>
      {isLoading && (
        <MainContainer>
          <Loader />
          <img src={img} alt="shorten your url" className="shorten_img" />
          <img src={img2} alt="shorten your url" className="shorten_img_2" />
          <img src={img3} alt="shorten your url" className="shorten_img_3" />
          <img src={img4} alt="shorten your url" className="shorten_img_4" />
        </MainContainer>
      )}
      {!isLoading && (
        <MainContainer>
          {!code && !secondForm && !submited && (
            <div className="form_container">
              <h1 className="form_title">Please pass in a url</h1>
              <form className="shorten_form_first" onSubmit={firstSubmit}>
                <div className="input_container">
                  <Input
                    className="input_input"
                    type="text"
                    required
                    pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
                    onChange={(e) => handleChange(e, "longUrl")}
                  />
                  <label className="input_label">Your URL</label>
                </div>
                <Choice
                  className="centered_btn_first"
                  type="submit"
                  onSubmit={firstSubmit}
                >
                  Next
                </Choice>
              </form>
            </div>
          )}
          {code && !secondForm && !submited && (
            <div className="form_container">
              <h1 className="form_title">Would you like a custom URL ?</h1>
              <div>
                <Choice primary className="btn" onClick={secondSubmit}>
                  Yes
                </Choice>
                <Choice className="btn" onClick={(e) => handleSubmit(e, form)}>
                  No *
                </Choice>
              </div>
              <p className="choice_recommandation">*Recommended option</p>
            </div>
          )}
          {code && secondForm && !submited && (
            <div className="form_container">
              <h1 className="form_title">Please enter a custom URL code*</h1>
              <div className="form_list_container">
                <p className="form_list_title">
                  *The code should be at least 4 characters long and must
                  include:
                </p>
                <p className="form_list">- One lowercase letter</p>
                <p className="form_list">- One capital letter</p>
                <p className="form_list">- One number</p>
              </div>
              <form
                className="shorten_form_second"
                onSubmit={(e) => handleSubmit(e, form)}
              >
                <div className="input_container">
                  <Input
                    className="input_input"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
                    onChange={(e) => handleChange(e, "code")}
                    required
                  />
                  <label className="input_label">Your custom URL</label>
                </div>
                <Choice className="centered_btn_first" type="submit">
                  Next
                </Choice>
              </form>
            </div>
          )}
          {submited && (
            <div className="form_container">
              <h1 className="form_title">Your URL's ready</h1>
              <div className="final_url">
                <img className="final_img" src={party} alt="" />
                <a
                  className="final_text"
                  href={urlRes}
                  target="_blank"
                  rel="noreferrer"
                >
                  {urlRes}
                </a>
                <img className="final_img" src={party} alt="" />
              </div>
              <CopyToClipboard text={urlRes} onCopy={() => setCopied(true)}>
                <Choice>
                  Copy to clipboard
                  <img src={copy} alt="" className="copy_img" />
                </Choice>
              </CopyToClipboard>
            </div>
          )}
          {copied && <span className="copied">Copied!</span>}
          <img src={img} alt="shorten your url" className="shorten_img" />
          <img src={img2} alt="shorten your url" className="shorten_img_2" />
          <img src={img3} alt="shorten your url" className="shorten_img_3" />
          <img src={img4} alt="shorten your url" className="shorten_img_4" />
        </MainContainer>
      )}
    </>
  );
};

export default Shorten;
