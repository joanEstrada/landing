import React, { Component } from "react";
import { Reveal } from "react-reveal/";

class DeveloperBanner extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section
        className="frelencer_banner_area developer_banner_area"
        id="home"
        style={{
          background:
            "linear-gradient( 1.14deg, rgb(244,247,252) 0%, rgb(255,255,255) 100%)",
        }}
      >
        <img
          className="d_shap"
          src={require("../../image/developer-img/shap.png")}
          alt=""
        />
        <div className="overlay_color"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="frelencer_content developer_content">
                <img
                  className="d_dot"
                  src={require("../../image/developer-img/dot.png")}
                  alt=""
                />
                {jhonData.devloperBanner &&
                  jhonData.devloperBanner.map((item) => {
                    return (
                      <React.Fragment key={item.id}>
                        <Reveal effect="fadeInUp" duration={500}>
                          <h4>
                            <span>{item.subtile}</span>
                          </h4>
                        </Reveal>
                        <Reveal effect="fadeInUp" duration={700}>
                          <h2 className="t_color">{item.title}</h2>
                        </Reveal>
                        <Reveal effect="fadeInUp" duration={900}>
                          <p className="t_color">{item.discription}</p>
                        </Reveal>
                        <Reveal effect="fadeInUp" duration={1000}>
                          <a href="./" className="chat_btn">
                            Let's Chat
                          </a>
                        </Reveal>
                      </React.Fragment>
                    );
                  })}
                <div className="developer_skill">
                  <div className="item">
                    <p>
                      <span>12</span> Years <br />
                      Experence
                    </p>
                  </div>
                  <div className="item">
                    <p>
                      <span>165</span> Projects Completed
                      <br /> on 18 Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="developer_img">
                <Reveal effect="fadeInLeft" duration={1400}>
                  <img
                    className="f_img_one"
                    src={require("../../image/developer-img/html.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInRight" duration={1200}>
                  <div className="f_img_two">
                    <img
                      className=""
                      src={require("../../image/developer-img/polygon.png")}
                      alt=""
                    />
                  </div>
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_seven"
                    src={require("../../image/developer-img/angular.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={1600}>
                  <img
                    className="f_img_four"
                    src={require("../../image/developer-img/man.png")}
                    alt=""
                  />
                </Reveal>
                <Reveal effect="fadeInDown" duration={2000}>
                  <div className="f_img_five">
                    <img
                      className=""
                      src={require("../../image/developer-img/code.png")}
                      alt=""
                    />
                  </div>
                </Reveal>
                <Reveal effect="fadeInDown" duration={2200}>
                  <div className="f_img_six">
                    <img
                      className=""
                      src={require("../../image/developer-img/mern.png")}
                      alt=""
                    />
                  </div>
                </Reveal>
                <Reveal effect="fadeInUp" duration={1200}>
                  <img
                    className="f_img_eight"
                    src={require("../../image/developer-img/react.png")}
                    alt=""
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DeveloperBanner;
