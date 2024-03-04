import { React, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../../../assets/mission.jpg";
import Facebook from "../../../assets/facebook.png";
import Youtube from "../../../assets/youtube.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/x.png";
import ScrollButton from "./ScrollButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../styles/landingpage/LandingPage.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const year = () => {
    const date = new Date();
    return date.getFullYear();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <main>
     
      <div id="hero-section">
        <h2>
          Help The <span>People</span>
        </h2>
        <h1>
          Grow up <span>humanity</span> & <span>kindness</span>
        </h1>
        
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer"]}
      />
      <div id="about">
        <div id="about-heading">
          <h2 className="headings">About <span className="text-orange-400">Aadhar</span></h2>
          <p>
          "Aadhar" is an NGO dedicated to social welfare, focusing on education, healthcare, women's empowerment, and environmental sustainability. <br/>Through grassroots interventions and advocacy, it provides access to education and healthcare, empowers women economically and socially, and promotes environmental conservation. <br/>With a community-centered approach, Aadhar aims to create lasting positive impact in marginalized communities.
          </p>
        </div>
        <div className="vision-mission">
          <div>
            <div className="vision-mission-header">
              <p className="clicked-text-head">Our Mission</p>
              <p className="p">
              Aadhar's mission is to empower marginalized communities through holistic development, advocating for social justice and creating an inclusive society where every individual can thrive.
              </p>
            </div>
            <div className="vision-mission-header">
              <p className="clicked-text-head">Our Vision</p>
              <p className="p">
              Aadhar envisions a world where marginalized communities have equal opportunities for growth and prosperity, fostering a society built on compassion, equity, and sustainability.
              </p>
            </div>
          </div>

          <img src={BackgroundImage} alt="mission-icon" />
        </div>
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer"]}
      />
      <div id="gallery">
        <div id="gallery-first">
          <h2 className=" headings "><span className="text-orange-400">Aadhar</span> Gallery</h2>
          <p>
            Welcome to the gallery section of AADHAR where we share visual
            stories of hope, <br />
            resilience, and positive change. Explore the images below to see the
            impact of our work in action:
          </p>
        </div>
        <div id="gallery-second">
          <Slider {...settings}>
            <div className="gallery-slide">
              <div className="gallery">
                {/* <img src={Image1} alt=''/> */}
                <img src='https://cdn-blog.superprof.com/blog_in/wp-content/uploads/2023/01/women-empowerment-through-activities-manav-ekta-mission.jpg' alt="" />
                <img src="https://vedant.org.in/images/blog/6-NGO-for-Women-Empowerment.jpg" alt="" />
                <img src="https://i0.wp.com/give.do/blog/wp-content/uploads/2022/09/Rural-Health-Care-Foundation-RHCF.jpg?ssl=1"alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src="https://neadiagnosis.gr/wp-content/uploads/2018/11/senior-citizen-package-male.jpg" alt="" />
                <img src="https://www.aahwahan.com/images/health1.jpg" alt="" />
                <img src="https://i0.wp.com/give.do/blog/wp-content/uploads/2022/09/2_Others_1.jpg?ssl=1" alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src="https://www.lyceetrust.org/storage/uploads/2023/02/blog-benefits_of_donation_for_education.jpg" alt="" />
                <img src="https://www.youthhelpingtrust.org/wp-content/uploads/2020/10/e1.jpg" alt="" />
                <img src="https://jansanjeevnitrust.org/admin/upload1/IN_Mumbay_SCTI_100.jpg" alt="" />
              </div>
            </div>

            <div className="gallery-slide">
              <div className="gallery">
                <img src="https://give.do/blog/wp-content/uploads/2021/12/Disability-NGO.jpg" alt="" />
                <img src="https://www.shutterstock.com/image-photo/hand-holding-banner-text-rights-600nw-2320609507.jpg" alt="" />
                <img src="https://img.freepik.com/free-vector/smiling-volunteers-helping-disabled-people-isolated-flat-illustration-cartoon-illustration_74855-14516.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=sph" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <ScrollButton
        className="scroll"
        targetIds={["about", "gallery", "footer", "sasi-intro"]}
      />
     
     <div id="footer">
        <div id="first-footer">
          <div id="first-column-footer">
            <h4>
              ABOUT <span>Aadhar</span>
            </h4>
            <p>
            Aadhar, an NGO, empowers marginalized communities through holistic development, envisioning an inclusive society where every individual thrives.
            </p>
            <div>
              <button>
                <img src={Facebook} alt="" />
              </button>
              <button>
                <img src={Youtube} alt="" />
              </button>
              <button>
                <img src={Instagram} alt="" />
              </button>
              <button>
                <img src={Twitter} alt="" />
              </button>
            </div>
          </div>
          <div id="second-column-footer">
            <h4>IMPORTANT INFO</h4>
            <div>
              <Link href="#about">About Aadhar</Link>
              <Link href="#nav">Annual Reports</Link>
              <Link href="#nav">Mission & Vision</Link>
              <Link href="#nav">Statistics</Link>
            </div>
          </div>
          <div id="third-column-footer">
            <h4>IMPORTANT LINKS</h4>
            <div>
              <Link to='/donate'>Donate</Link>
              <Link href="#gallery">Media Resources</Link>
              <Link href="#nav">Quick Contact</Link>
              <Link href="#nav">Address</Link>
            </div>
          </div>
        </div>
        <div id="second-footer">
          <hr></hr>
          <p>Copyright © Trust {year()} . ALL Right Reserved .</p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
