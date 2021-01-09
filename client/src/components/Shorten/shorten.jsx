import React, { useState } from "react";
import "./shorten.css";
import img from "../../assets/shorten.png";
import party from "../../assets/party.png";
import { MainContainer, Input, Choice } from "../styles";
import { postURL } from "../../services/api-service";

const Shorten = () => {
  const [code, setCode] = useState(false);
  const [secondForm, setSecondForm] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [form, setForm] = useState({
    longUrl: "",
    code: "",
  });
  const [urlRes, setUrlRes] = useState("");

  const firstSubmit = (e) => {
    e.preventDefault();
    setCode(true);
  };

  const secondSubmit = (e) => {
    e.preventDefault();
    setSecondForm(true);
  };

  const handleChange = (e, identifier) => {
    const newForm = { ...form };
    newForm[identifier] = e.target.value;
    setForm(newForm);
  };

  const handleSubmit = (e, url) => {
    e.preventDefault();
    setSubmited(true);
    postURL(url).then((res) => setUrlRes(res.shortUrl));
  };

  return (
    <MainContainer>
      {!code && !secondForm && !submited && (
        <form className="shorten_form_first" onSubmit={firstSubmit}>
          <Input
            placeholder="Your url"
            pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
            onChange={(e) => handleChange(e, "longUrl")}
          />
        </form>
      )}
      {code && !secondForm && !submited && (
        <div className="shorten_choice">
          <h1 className="choice_title">Would you like a custom URL ?</h1>
          <div>
            <Choice primary className="btn" onClick={secondSubmit}>
              Yes
            </Choice>
            <Choice className="btn" onClick={(e) => handleSubmit(e, form)}>
              No *
            </Choice>
          </div>
          <p className="choice_recommandation">*Recommended choice</p>
        </div>
      )}
      {code && secondForm && !submited && (
        <form
          className="shorten_form_second"
          onSubmit={(e) => handleSubmit(e, form)}
        >
          <Input
            placeholder="Your custom URL"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
            onChange={(e) => handleChange(e, "code")}
            required
          />
        </form>
      )}
      {submited && (
        <div className="final_form">
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
        </div>
      )}
      <img src={img} alt="shorten your url" className="shorten_img" />
    </MainContainer>
  );
};

export default Shorten;
