import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/loader.svg";
import "./loader.css";

const Loader = () => {
  return (
    <div>
      <ReactLogo className="loader" />
    </div>
  );
};

export default Loader;
