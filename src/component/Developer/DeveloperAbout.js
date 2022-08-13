import React, { Component } from "react";

class DeveloperAbout extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section className="dev_about_area" id="about">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <div className="dev_about_content">
                {jhonData.devAbout.map((post) => {
                  return (
                    <React.Fragment key={post.id}>
                      <h6>{post.smalltitle}</h6>
                      <h2>{post.aHead}</h2>
                      <h5>{post.aHeadTwo}</h5>
                      <p>{post.adiscription}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dev_skill_item">
                {jhonData.aboutSkill.map((skill) => {
                  return (
                    <div className="item" key={skill.id}>
                      <h3>{skill.workName}</h3>
                      <p>{skill.text}</p>
                      <a href=".#">{skill.complateProject}</a>
                      <span className={`icon ${skill.icon}`}></span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default DeveloperAbout;
