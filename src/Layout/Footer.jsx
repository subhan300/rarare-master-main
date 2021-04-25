import React from "react";
import rarareLogo from "../Assets/logo_rarare.png";
import appStoreIcon from "../Assets/App store Icons.png";
import copyright from "../Assets/copyright.png";
import fbIcon from "../Assets/fb_i.png";
import instaIcon from "../Assets/insta_i.png";
import youtubeIcon from "../Assets/youtube_i.png";
import twiterIcon from "../Assets/twiter_i.png";
import backTop from "../Assets/backtop.png"


import "./style.css";
import { useHistory } from "react-router";
const Footer = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      {/* <div className="footer">
        <div className="footer_container">
          <div className="fc_1">
            <div className="text_darkblue">
              <span className="text_lightgray mb-2">Rarare</span>
              <span>Issues</span>
              <span>Surveys</span>
              <span>Proposals</span>
            </div>
            <div className="text_darkblue">
              <span className="text_lightgray mb-2">Community</span>
              <span>Report an Issue</span>
              <span onClick={() => { history.push("about") }}>About Us</span>
              <span onClick={() => { history.push("contact-us") }}>Contact Us</span>
              <span onClick={() => { history.push("blog") }}>Blog</span>
            </div>
            <div className="text_darkblue">
              <span className="text_lightgray mb-2">Legal</span>
              <span onClick={() => { history.push("terms") }}>Terms of use</span>
              <span>Privacy Policy</span>
            </div>
            <div className="text_darkblue">
              <span className="text_lightgray mb-2">Business Services</span>
              <span>B2B Offerings</span>
              <span>Democratic Technology</span>
              <span>Mobile Device Management</span>
              <span onClick={() => { history.push("_pricing") }}>Pricing</span>
            </div>
          </div>
          <div className="fc_2">
            <img src={rarareLogo} alt="" />
            <h2 className="text_black fw-bold">Reinventing Citizen Engagement</h2>
            <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
            <h6 className="text_black fw-bold">Download the app now!</h6>
            <div className="app_store_icons">
              <img src={appStoreIcon} alt="appstoreicon" />
            </div>
          </div>
        </div>
        <div className="fc_3">
          <div className="copy_right_text">
            <span className="text_darkblue">Copyright <img src={copyright} alt="" /> 2021. Rarare Inc. All rights reserved. </span>
          </div>
          <div className="fc_social">
            <div>
              <img src={fbIcon} alt="icon" />
              <img src={instaIcon} alt="icon" />
              <img src={youtubeIcon} alt="icon" />
              <img src={twiterIcon} alt="icon" />
            </div>
            <div>
              <span className="backtop text_darkblue fw-bold">Back to top <img src={backTop} alt="" /></span>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Footer;
