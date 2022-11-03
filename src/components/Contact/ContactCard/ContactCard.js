import React from "react";

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 lg:px-10 px-5 pb-20">
      {/* card----1  */}
      <div className="bg-base-100 text-center py-6 px-10">
        <h2 className="text-2xl font-bold text-black">Sales</h2>
        <p className="my-3">
          Vestibulum ante ipsum primis in faucibus orci luctus.
        </p>
        <h2 className="text-xl font-bold text-teal-800">1800 123 4567</h2>
      </div>

      {/* card----2  */}
      <div className="bg-base-100 text-center py-6 px-10">
        <h2 className="text-2xl font-bold text-black">Complaints</h2>
        <p className="my-3">
          Vestibulum ante ipsum primis in faucibus orci luctus.
        </p>
        <h2 className="text-xl font-bold  text-teal-800">1900 223 8899</h2>
      </div>
      {/* card----3  */}
      <div className="bg-base-100 text-center py-6 px-10">
        <h2 className="text-2xl font-bold text-black">Returns</h2>
        <p className="my-3">
          Vestibulum ante ipsum primis in faucibus orci luctus.
        </p>
        <h2 className="text-xl font-bold text-teal-800">returns@mail.com</h2>
      </div>
      {/* card----4  */}

      <div className="bg-base-100 text-center py-6 px-10">
        <h2 className="text-2xl font-bold text-black">Marketing</h2>
        <p className="my-3">
          Vestibulum ante ipsum primis in faucibus orci luctus.
        </p>
        <h2 className="text-xl font-bold text-teal-800">1700 444 5578</h2>
      </div>

    </div>
  );
};

export default ContactCard;
