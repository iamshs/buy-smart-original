import React from "react";
import { Link } from "react-router-dom";
import follow from "../../assets/about2.jpg";
import "./AboutFollow.css";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import {GrGooglePlus } from "react-icons/gr";

const AboutFollow = () => {
  return (
    <div
      className="bg-about flex justify-center"
      style={{ backgroundImage: `url(${follow})` }}
    >
      <div className="bg-slate-100  flex justify-center items-center flex-col lg:px-20 px-6 my-24 lg:my-0">
        <div className="flex items-center justify-start py-2 lg:py-4">
          <div style={{ height: "4px" }} className="bg-sky-600 w-24"></div>
        </div>
        <div>
          <h1 className="lg:text-5xl text-xl font-bold text-black text-center mt-4 lg:mt-0 lg:mb-6">
            Follow Us
          </h1>
          <div className="flex items-center justify-between  pt-4 ">
            <Link>
              <p className=" footer-icon mx-4 ">
                {" "}
                <GrFacebookOption size={"24px"} />{" "}
              </p>
            </Link>
            <Link>
              <p className="footer-icon mx-4 ">
                {" "}
                <GrTwitter size={"24px"} />{" "}
              </p>
            </Link>
            <Link>
              <p className=" footer-icon mx-4 ">
                {" "}
                <GrInstagram size={"24px"} />{" "}
              </p>
            </Link>
            <Link>
              <p className="footer-icon mx-4 ">
                {" "}
                <GrGooglePlus size={"30px"} />{" "}
              </p>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutFollow;
