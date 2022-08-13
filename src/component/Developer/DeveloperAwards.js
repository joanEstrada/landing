import React, { Component } from "react";
import jhonData from "../jhonData";
import Award from "./awards";

class DeveloperAwards extends Component {
  render() {
    return (
      <section className="awards_area bg_color_two sec_pad">
        <img
          className="shape one"
          src={require("../../image/developer-img/video_shap.png")}
          alt=""
        />
        <div className="container">
          <div className="dev_tittle mb_70">
            <h2>Awards</h2>
            <p>Working time some of my product wining awards.</p>
          </div>
          <div className="row">
            <Award jhonData={jhonData} />
          </div>
        </div>
      </section>
    );
  }
}
export default DeveloperAwards;
