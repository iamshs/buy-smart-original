import React from "react";
import { BsFacebook} from "react-icons/bs";
import { AiFillInstagram} from "react-icons/ai";
import { AiFillTwitterCircle} from "react-icons/ai";
import { AiFillYoutube} from "react-icons/ai";
import { AiFillGoogleCircle} from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";
import { Link } from "react-router-dom";
import './CopyRight.css'


const CopyRight = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className=" border border-gray-300">
     <div className="flex lg:justify-between px-6 py-8 flex-col lg:flex-row">
     <p className=" text-black mb-4 lg:mb-0">
        Copyright
        {" "}
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> {year}{" "}
        <span className=" font-bold ">buySmart</span>
      </p>
      <div className="flex items-center ">
        <Link>
        <p className="mr-4 footer-icon"> <BsFacebook  size={'20px'} /> </p>
        </Link>
        <Link>
        <p className="mx-4 footer-icon"> <AiFillInstagram  size={'24px'} /> </p>
        </Link>
        <Link>
        <p className="mx-4 footer-icon"> <AiFillTwitterCircle size={'24px'} /> </p>
        </Link>
        <Link>
        <p className="mx-4 footer-icon"> <AiFillYoutube  size={'24px'} /> </p>
        </Link>
        <Link>
        <p className="mx-4 footer-icon"> <AiFillGoogleCircle  size={'24px'} /> </p>
        </Link>
        <Link>
        <p className="mx-4 footer-icon"> <AiFillLinkedin  size={'24px'} /> </p>
        </Link>
      </div>
     </div>
    </div>
  );
};

export default CopyRight;
