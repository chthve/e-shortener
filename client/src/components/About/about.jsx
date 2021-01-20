/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import "./about.css";
import React from "react";
import { MainContainer } from "../styles";
import img from "../../assets/about.svg";
import plant from "../../assets/about-plant.svg";
import cloud from "../../assets/about-cloud.svg";
import githublogo from "../../assets/github-1.svg";
import githublogo2 from "../../assets/github-2.svg";

const About = () => {
  return (
    <MainContainer>
      <h1 className="form_title">About us</h1>
      <div className="about-us_container">
        <p className="about-us_text">
          We are a URL shortening app established in 2020 with a desire to help
          you simplify and manage your most used URL’s.
        </p>
        <p className="about-us_text">
          Our platform is in constant evolution and any feedback for improvement
          will be appreciated. To do so you could contact us on our GitHub.
        </p>
        <p className="about-us_text_logo">
          <a
            href="https://github.com/chthve"
            className="github_link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github_logo"
              src={githublogo}
              alt=""
              onMouseOver={(e) => (e.currentTarget.src = githublogo2)}
              onMouseOut={(e) => (e.currentTarget.src = githublogo)}
            />
          </a>
        </p>
        <p className="about-us_text">
          We wish you to enjoy your shortened URL’s and to hit the web as fast
          as ever!
        </p>
      </div>
      <img className="about_img" src={img} alt="" />
      <img className="about_img_plant" src={plant} alt="" />
      <img className="about_img_cloud" src={cloud} alt="" />
    </MainContainer>
  );
};

export default About;
