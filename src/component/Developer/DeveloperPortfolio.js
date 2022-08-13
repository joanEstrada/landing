import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";

class DeveloperPortfolio extends Component {
  componentDidMount() {
    var imgLoad = new ImagesLoaded(".grid");

    imgLoad.on("progress", function (instance, image) {
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
      });
    });
  }

  render() {
    return (
      <section className="dev_work_area" id="portfolio">
        <div className="container custome_container">
          <div className="row grid">
            <div className="col-lg-6 col-md-6 grid-item">
              <div className="dev_tittle">
                <h2>Latest Work</h2>
                <p>Some of my recent work, Perfect solutions for web.</p>
              </div>
            </div>
            <div className="col-md-6 grid-item">
              <div className="work_item">
                <a href=".#">
                  <img
                    src={require("../../image/developer-img/pr1.jpg")}
                    alt=""
                  />
                </a>
                <div className="content">
                  <h3>Facilio</h3>
                  <div className="category">
                    <a href=".#">HTML</a>
                    <a href=".#">React</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-item">
              <div className="work_item">
                <a href=".#">
                  <img
                    src={require("../../image/developer-img/pr2.jpg")}
                    alt=""
                  />
                </a>
                <div className="content">
                  <h3>John</h3>
                  <div className="category">
                    <a href=".#">React</a>
                    <a href=".#">PHP</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-item">
              <div className="work_item">
                <a href=".#">
                  <img
                    src={require("../../image/developer-img/pr3.jpg")}
                    alt=""
                  />
                </a>
                <div className="content">
                  <h3>Facilio</h3>
                  <div className="category">
                    <a href=".#">Jacascript</a>
                    <a href=".#">HTML</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-item">
              <div className="work_item">
                <a href=".#">
                  <img
                    src={require("../../image/developer-img/pr3.jpg")}
                    alt=""
                  />
                </a>
                <div className="content">
                  <h3>John</h3>
                  <div className="category">
                    <a href=".#">React</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 grid-item">
              <a href=".#" className="dev_btn">
                ALL Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DeveloperPortfolio;
