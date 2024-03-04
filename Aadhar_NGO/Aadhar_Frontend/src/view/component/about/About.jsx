import React from "react";
import "../../../styles/about/AboutStyle.css";
// import grow from "../../../assets/image/sasi-image/aboutUs.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-heading">
        About <span>Us</span>
      </h2>
      <div className="about-content">
        <h3>
          Grow Up Humanity
        </h3>
      
      </div>
      <div className="about-p">
          <h2>Who We Are</h2>
        <p>
        "Aadhar" is an NGO dedicated to social welfare, focusing on education, healthcare, women's empowerment, and environmental sustainability.
Through grassroots interventions and advocacy, it provides access to education and healthcare, empowers women economically and socially, and promotes environmental conservation.
With a community-centered approach, Aadhar aims to create lasting positive impact in marginalized communities.

        </p>
      </div>
      <div className="about-p">
          <h2>Our Vision</h2>
        <p>
          We are always delighted to support these schools with variety of materials to enhance the learning experience of the learners,<br />
          expand their educational horizon, and boost their fighting chance for a bright future and afford them a competitive advantage in these 
          technological times.

        </p>
      </div>
      <div className="about-p">
          <h2>Our Mission</h2>
        <p>
          We run our outreaches on a yearly basis, with this being our third edition - we have had the privilege of contributing to the Makoko community, the Pacelli School for the Blind, and the Wesley School for the Hearing Impaired.
          We want them to know that we and many others are rooting for them; we believe in them; and we will keep cheering them on as they progress towards greater heights beyond societal limitations.
        </p>
      </div>

      <div className="about-image">
        <img src='https://i0.wp.com/give.do/blog/wp-content/uploads/2022/12/5-ngo-blog-banner.png?fit=1920%2C1080&ssl=1' alt="" />
      </div>
    </section>
  );
};

export default About;
