import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import Form from "./Form";

class Contact extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row row-reverse">
            {jhonData.contact &&
              jhonData.contact.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="col-md-5">
                      <Reveal effect="fadeInLeft" duration={500}>
                        <div className="contact_info">
                          <h4>{item.title}</h4>
                          <ul className="nav">
                            {item.menuItems.map((info) => {
                              return (
                                <li className="item" key={info.id}>
                                  <div className="media">
                                    <a href="/#">
                                      <i className={info.icon}></i>
                                    </a>
                                    <div className="media-body">
                                      <a href="/#">{info.text}</a>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </Reveal>
                    </div>
                  </React.Fragment>
                );
              })}
            <div className="col-md-7">
              <Reveal effect="fadeInRight" duration={800}>
                <div className="input_form">
                  <h4>{jhonData.contacttitle}</h4>
                  <Form />
                  <div id="success">Your message succesfully sent!</div>
                  <div id="error">
                    Opps! There is something wrong. Please try again
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
