import React from "react";
import TestimonialSlider from "../Testimonial/TestimonialSlider";

const DeveloperTestimonial = () => {
  return (
    <section
      id="testimonial"
      className="testimonial_area testimonial_area_three"
    >
      <img
        className="shape one"
        src={require("../../image/developer-img/testimonial_bg_circle.png")}
        alt=""
      />
      <img
        className="shape two"
        src={require("../../image/developer-img/dot.png")}
        alt=""
      />
      <div className="container">
        <div className="dev_tittle mb_70">
          <h2>Testimonials</h2>
          <p>What's clients say about me.</p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};
export default DeveloperTestimonial;
