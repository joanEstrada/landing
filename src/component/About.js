import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

class About extends Component {
    render(){
        let jhonData = this.props.jhonData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{jhonData.aboutme}</h2>
                                    <h6>{jhonData.role}</h6>
                                    <p>{jhonData.aboutdetails}</p>
                                    <Link to="/"  className="theme_btn active">Hire Me</Link>
                                    <Link to="/" className="theme_btn">Download CV</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/apporoach_man_img.png')} alt=""/></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
