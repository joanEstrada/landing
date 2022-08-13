import React, { Component } from "react";
import Exprience from "./Exprience";

class DeveloperExprience extends Component {
  render() {
    return (
      <section className="exprience_area sec_pad">
        <img
          className="shape one"
          src={require("../../image/php.png")}
          alt=""
        />
        <img
          className="shape two"
          src={require("../../image/img-6.png")}
          alt=""
        />
        <img
          className="shape three"
          src={require("../../image/img-4.png")}
          alt=""
        />
        <img
          className="shape four"
          src={require("../../image/developer-img/dot_big.png")}
          alt=""
        />
        <div className="container">
          <div className="dev_tittle mb_70">
            <h2>Exprience</h2>
            <p>Some work exprience show on my site.</p>
          </div>
          <Exprience />
        </div>
      </section>
    );
  }
}
export default DeveloperExprience;
