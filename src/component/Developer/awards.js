import React, { Component } from "react";

class awards extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <React.Fragment>
        {jhonData.awards.map((item) => {
          return (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <div className="awards_item wow fadeInUp">
                <div className="icon">
                  <img
                    src={require("../../image/developer-img/" +
                      `${item.image}`)}
                    alt=""
                  />
                </div>
                <h4>{item.ctile}</h4>
                <p>{item.description}</p>
                <a href={item.url} className="dev_btn">
                  {item.linktext}
                </a>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default awards;
