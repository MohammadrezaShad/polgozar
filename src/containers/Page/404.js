import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "assets/images/rob.png";
import FourZeroFourStyleWrapper from "./404.style";

export default class extends Component {
  render() {
    return (
      <FourZeroFourStyleWrapper className="iso404Page" {...this.props}>
        <div className="iso404Content">
          <h1>404</h1>
          <h3>Looks like you got lost</h3>
          <p>The page youre looking for doesnt exist or has been moved.</p>
          <Link id="404_back_home_link" to="/">
            BACK HOME
          </Link>
        </div>
        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </FourZeroFourStyleWrapper>
    );
  }
}
