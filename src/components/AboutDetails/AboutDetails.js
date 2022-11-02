import React from "react";


const AboutDetails = () => {
  return (
    <div className="bg-slate-100 lg:p-10 p-5 ">

      <div className="bg-base-100 lg:p-12 p-5 flex lg:justify-around lg:items-center
       flex-col-reverse lg:flex-row ">

        <div className="text-black p-4 max-w-md ">

          <div className="flex items-center justify-start py-2 lg:py-4">
            <div style={{ height: "3px" }} className="bg-sky-600 w-28">

            </div>
          </div>

          <h1 className="lg:text-4xl text-2xl  font-bold lg:my-6 my-4">Who We Are</h1>
          <p className="">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
            erat consequat auctor eu in elit.
          </p>
        </div>
   
   <div className="max-w-md mb-10 lg:mb-0">
    <img src="https://www.theladders.com/wp-content/uploads/coworkers_190410-800x450.jpg" alt="who we are" />
       </div>

      </div>
    </div>
  );
};

export default AboutDetails;
