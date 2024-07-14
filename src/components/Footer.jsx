import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="shadow-lg px-5 py-5">
      <div className="row">
        <div className="col-md-4">
          <p>Logo</p>
          <p>
            Tower A, Unitech Business Park,
            <br /> Block - F, South City 1, Sector - 41, <br /> Gurgaon, Haryana
            - 122001
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <p>Social Media Section</p>
          <div className="d-flex">
            <div className="ms-4">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "#003a70" }}
              />
            </div>
            <div className="ms-4">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: "#003a70" }}
              />
            </div>
            <div className="ms-4">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ color: "#003a70" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <p>
            Contact Us | Privacy Policy | Terms & Conditions | Gifting Policy |{" "}
            Online payment & refund policy | Tele-consult | Contact
          </p>
          <p>&copy; 2022 Fortis Healthcare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
