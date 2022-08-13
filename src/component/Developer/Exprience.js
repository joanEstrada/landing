import React from "react";

export default function Exprience() {
  return (
    <div className="exprience_inner">
      <div className="media exprience_item">
        <div className="media-left">
          <a href=".#">
            <img
              src={require("../../image/developer-img/design-logo1.png")}
              alt=""
            />
          </a>
        </div>
        <div className="media-body">
          <h4>Senior Graphic Designer</h4>
          <span>July, 2012 - Present (4 years)</span>
          <p>
            Proven ability to lead and manage a wide variety of design and
            development projects in team and independent situations.
          </p>
        </div>
      </div>
      <div className="media exprience_item">
        <div className="media-left">
          <a href=".#">
            <img
              src={require("../../image/developer-img/design-logo2.png")}
              alt=""
            />
          </a>
        </div>
        <div className="media-body">
          <h4>Former Graphic Designer</h4>
          <span>March, 2011 - June, 2012 (1 year, 3 Month)</span>
          <p>
            Proven ability to lead and manage a wide variety of design and
            development projects in team and independent situations.
          </p>
        </div>
      </div>
      <div className="media exprience_item">
        <div className="media-left">
          <a href=".#">
            <img
              src={require("../../image/developer-img/design-logo3.png")}
              alt=""
            />
          </a>
        </div>
        <div className="media-body">
          <h4>Head of Design</h4>
          <span>March, 2005 - March, 2011 (6 years)</span>
          <p>
            Proven ability to lead and manage a wide variety of design and
            development projects in team and independent situations.
          </p>
        </div>
      </div>
      <div className="media exprience_item">
        <div className="media-left">
          <a href=".#">
            <img
              src={require("../../image/developer-img/design-logo4.png")}
              alt=""
            />
          </a>
        </div>
        <div className="media-body">
          <h4>Graphic Designer (intern)</h4>
          <span>March, 2015 - June, 2017 (1 year, 3 Month)</span>
          <p>
            Proven ability to lead and manage a wide variety of design and
            development projects in team and independent situations.
          </p>
        </div>
      </div>
    </div>
  );
}
