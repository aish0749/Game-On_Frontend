import React from "react";
import "../pages/homepage.css";
import logo from "../assets/logo.png";
import cry from "../assets/cry-2.png";
import unity from "../assets/unity-5.png";
import unreal from "../assets/unreal-5.png";

export const Homepage = () => {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">LOGO</div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="frame-3">
                <div className="text-wrapper-2">Home</div>
                <div className="text-wrapper-3">About us</div>
                <div className="text-wrapper-4">Contact </div>
              </div>
              <div className="frame-4">
                <button className="button">SIGNUP</button>
              </div>
              <div className="frame-4">
                <button className="button">LOGIN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="frame-7">
              <h1 className="h-1">Work that we produce for our clients</h1>
            </div>
          </div>
          <img className="cry" alt="Cry" src={cry} />
          <img className="unity" alt="Unity" src={unity} />
          <img className="unreal" alt="Unreal" src={unreal} />
        </div>
        <div className="overlap">
          <div className="frame-8">
            <div className="frame-9">
              <div className="frame-9">
                <div className="frame-9">
                  <div className="frame-10">
                    <div className="frame-11">
                      <div className="frame-9">
                        <div className="frame-9">
                          <div className="frame-4">
                            <button className="button">Search</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="text" className="text-input" placeholder="SEARCH FOR YOUR GAME" />
        </div>
        <div className="frame-12">
          <div className="frame-13">
            <div className="frame-14">
              <div className="text-wrapper-8">Currently Trending Games</div>
              <div className="frame-15">
                <div className="text-wrapper-9">SEE ALL</div>
              </div>
            </div>
            <div className="frame-16">
              <img className="rectangle" alt="Rectangle" src="rectangle-23.png" />
              <img className="rectangle" alt="Rectangle" src="rectangle-280.png" />
              <img className="img" alt="Rectangle" src="rectangle-25.png" />
              <img className="rectangle-2" alt="Rectangle" src="rectangle-26.png" />
            </div>
          </div>
        </div>
        <div className="frame-17">
          <img className="rectangle-3" alt="Rectangle" src="rectangle-278.png" />
          <div className="frame-18">
            <div className="text-wrapper-10">Lorem Ipsum</div>
            <div className="frame-7">
              <p className="lorem-ipsum-is">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        <div className="frame-19">
          <div className="frame-7">
            <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="frame-20">
          <div className="frame-7">
            <div className="text-wrapper-11">LOGO</div>
          </div>
          <div className="group">
            <div className="group-wrapper">
              <div className="group-2">
                <p className="text-wrapper-12">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="overlap-group">
                  <div className="overlap-group-2">
                    <div className="zeux-portfolio">
                      Zeux
                      <br />
                      Portfolio <br />
                      Careers <br />
                      Contact us
                    </div>
                    <div className="group-3">
                      <p className="text-wrapper-13">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <div className="text-wrapper-14">+908 89097 890</div>
                      <div className="text-wrapper-15">Contact us</div>
                    </div>
                  </div>
                  <div className="text-wrapper-15">About us</div>
                </div>
                <div className="text-wrapper-16">@Lorem</div>
                <div className="group-4">
                  <div className="facebook-wrapper">
                    <img className="facebook" alt="Facebook" src="facebook-1.svg" />
                  </div>
                  <div className="instagram-wrapper">
                    <img className="instagram" alt="Instagram" src="instagram-1.svg" />
                  </div>
                  <div className="twitter-wrapper">
                    <img className="twitter" alt="Twitter" src="twitter-1.svg" />
                  </div>
                  <div className="linkedin-wrapper">
                    <img className="linkedin" alt="Linkedin" src="linkedin-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="line" alt="Line" src="line-1.svg" />
          <p className="text-wrapper-17">Copyright ® 2022 prodesigner All rights Rcerved</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
