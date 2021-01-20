/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import homeImg from "../../assets/home.png";
import linkImg from "../../assets/url.svg";
import home3img from "../../assets/home_3.png";
import form1 from "../../assets/forms/Asset-9.png";
import form2 from "../../assets/forms/Asset-10.svg";

import { Button, MainContainer } from "../styles";

const Home = () => {
  return (
    <>
      <MainContainer>
        <div className="home_text">
          <h1 className="home_text_title">Welcome to E-Shortener </h1>
          <p className="home_text_tagline">
            A simple way to shorten your URL's and review their stats
          </p>
        </div>
        <div className="home_button">
          <Link to="/shorten" className="btn">
            <Button>
              Let's shorten a URL
              <img src={linkImg} alt="url_img" className="link_img" />
            </Button>
          </Link>
          <Link to="info" className="btn">
            <Button primary>Get info on a URL</Button>
          </Link>
        </div>
        <img src={homeImg} alt="info" className="home_img" />
        <img src={home3img} alt="info" className="home2_img" />
        <img src={form1} alt="" className="form_1" />
        <img src={form2} alt="" className="form_2" />
      </MainContainer>
    </>
  );
};

export default Home;
