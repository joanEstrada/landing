import React from "react";
import Navbar from "./component/Navbar/Navbar";
import DBanner from "./component/Banner/DeveloperBanner";
import DAbout from "./component/Developer/DeveloperAbout";
import DLogo from "./component/Developer/DeveloperLogo";
import DPortfolio from "./component/Developer/DeveloperPortfolio";
import DTestimonial from "./component/Developer/DeveloperTestimonial";
import DExprience from "./component/Developer/DeveloperExperience";
import DAwards from "./component/Developer/DeveloperAwards";
import DBlog from "./component/Blog/DeveloperBlog";
import ContactTwo from "./component/ContactTwo";
import FooterTwo from "./component/FooterTwo";
import jhonData from "./component/jhonData";

export const HomeDeveloper = () => (
  <div className="body_wrapper">
    <Navbar
      mClass="dark_menu"
      mContainer="custome_container"
      mainlogo="logo2.png"
      stickylogo="logo.png"
    />
    <DBanner jhonData={jhonData} />
    <DAbout jhonData={jhonData} />
    <DLogo />
    <DPortfolio />
    <DTestimonial />
    <DExprience />
    <DAwards jhonData={jhonData} />
    <DBlog />
    <ContactTwo secClass="dContact" jhonData={jhonData} />
    <FooterTwo className="d_footer_area" jhonData={jhonData} />
  </div>
);
