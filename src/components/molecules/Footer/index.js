import React from "react";
import {
  ICFacebook,
  ICGooglePlus,
  ICInstagram,
  ICLinkedin,
  ICTwitter,
  MyLogo,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={MyLogo} alt="" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICInstagram} />
          <Icon img={ICLinkedin} />
          <Icon img={ICGooglePlus} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @walyxxi 2020</p>
      </div>
    </div>
  );
};

export default Footer;
