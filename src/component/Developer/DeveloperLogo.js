import React from "react";

export default function Developerlogo() {
  return (
    <div className="dev_clients_logo_area">
      <div className="container">
        <div className="clients_intrigration">
          <a href=".#" className="c_items">
            <img src={require("../../image/asan.png")} alt="" />
          </a>
          <a href=".#" className="c_items">
            <img src={require("../../image/slack.png")} alt="" />
          </a>
          <a href=".#" className="c_items">
            <img src={require("../../image/Avast.png")} alt="" />
          </a>
          <a href=".#" className="c_items middle">
            <img src={require("../../image/h_pijom1.png")} alt="" />
          </a>
          <a href=".#" className="c_items">
            <img src={require("../../image/torrent.png")} alt="" />
          </a>
          <a href=".#" className="c_items">
            <img src={require("../../image/cool.png")} alt="" />
          </a>
          <a href=".#" className="c_items">
            <img src={require("../../image/twitter.png")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
