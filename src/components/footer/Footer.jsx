import React from "react";
import { images } from "../../constants/index";

//STYLES
import "./Footer.styles.scss";

function Footer() {
  return (
    <>
      <section className="footer pt-3 pb-3">
        <div className="container">
          <div className="row justify-center gap-1">
            <div className="col-12-sm">
              <img src={images.footerLogoWhite} alt="Spartan Logo" />
              <ul className="social-icons p-0 m-0 justify-space-around">
                <li>
                  <img src={images.facebook} alt="facebook" />
                </li>
                <li>
                  <img src={images.linkedin} alt="linkedin" />
                </li>
                <li>
                  <img src={images.instagram} alt="instagram" />
                </li>
                <li>
                  <img src={images.twitter} alt="twitter" />
                </li>
              </ul>
            </div>
            <div className="col-12-sm col-6-md col-4-lg">
              <h3 className="mb-1">POPULAR LINKS</h3>
              <ul className="m-0 p-0">
                <li className="border">Kinship</li>
                <li className="border">Support</li>
                <li className="border">Missions</li>
                <li className="border">Allies</li>
              </ul>
            </div>
            <div className="col-12-sm col-6-md col-4-lg">
              <h3 className="mb-1">How you can help</h3>
              <ul className="m-0 p-0">
                <li className="border">Make a donation</li>
                <li className="border">Become a member</li>
                <li className="border">attend an event</li>
                <li className="border">List your business charity</li>
              </ul>
            </div>
            <div className="col-12-sm col-4-lg">
              <h3 className="mb-1">Contact</h3>
              <ul className="m-0 p-0">
                <div className="email">
                  <li>
                    <img src={images.sendEmailIcon} alt="send email icon" />
                  </li>
                  <li className="ml-1">hello@op-spartan.com</li>
                </div>
                <div className="address">
                  <li>
                    <img src={images.pin} alt="map pin icon" />
                  </li>
                  <li className="ml-1">
                    3a Blue SKy Way
                    <br />
                    Monkton Business Park
                    <br />
                    NE21 2EQ
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
