/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./page404.css";
import img from "../../assets/page404.svg";
import { MainContainer } from "../styles";

const Page404 = () => {
  return (
    <MainContainer className="overflow">
      <div className="four_container">
        <h1 className="four_title">404</h1>
        <h1 className="four_text">Oups this page doesn't exist</h1>
      </div>
      <img src={img} alt="" className="error_img" />
    </MainContainer>
  );
};

export default Page404;
