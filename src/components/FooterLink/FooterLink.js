import React from "react";
import { Link } from "react-router-dom";

const FooterLink = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-16 text-center lg:text-left ">
        <div>
          <h1 className="font-extrabold italic text-4xl text-black">
            {" "}
            buySMART
          </h1>
          <h3 className="text-2xl font-bold text-black italic my-12">
            The best look anytime, anywhere.
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="font-semibold text-2xl mb-4">For Her</h2>
            <p className="text-lg hover:text-sky-600">
              <Link>Women Jeans</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Tops and Shirts</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Women Jackets</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Heels and Flats</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Women Accessories</Link>
            </p>
          </div>

          {/* for----men */}

          <div>
            <h2 className="font-semibold text-2xl mb-4">For Him</h2>
            <p className="text-lg hover:text-sky-600">
              <Link>Men Jeans</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>T-Shirts</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Men Jackets</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Shows and Slippers</Link>
            </p>
            <p className="text-lg hover:text-sky-600">
              <Link>Men Accessories</Link>
            </p>
          </div>

          {/* subscribe---start */}
          <div>
            <h2 className="text-2xl font-semibold">Subscribe</h2>
            <input
              type="text"
              placeholder="Your Email Address.."
              className="input input-bordered focus:ring focus:ring-black w-full max-w-xs my-8"
            />
            <button className="btn home-btn text-white mx-4 py-0.5 border-0 rounded-none px-8  font-bold">SUBSCRIBE</button>
          </div>
          {/* subscribe---------end */}
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
