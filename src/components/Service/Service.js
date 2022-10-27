import React from "react";
import {TiWorldOutline} from 'react-icons/ti'
import {AiOutlineLineChart} from 'react-icons/ai'
import {AiOutlineLock} from 'react-icons/ai'
import {MdOutlineLocalOffer} from 'react-icons/md'
import './Service.css'

const Service = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4  py-20 gap-4 lg:px-8 px-14 bg-slate-100  ">
      <div className="flex flex-col items-center w-72 justify-center my-4 lg:my-0 bg-stone-100 p-4">
      <TiWorldOutline size={'60px'} />
      <h3 className="font-bold text-lg my-4 ">Worldwide Shipping</h3>
      <p className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="flex flex-col items-center w-72 justify-center my-4 lg:my-0 bg-stone-100 p-4">
      <AiOutlineLineChart size={'60px'} />
      <h3 className="font-bold text-lg my-4">Best Quality</h3>
      <p className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="flex flex-col items-center w-72 justify-center my-4 lg:my-0 bg-stone-100 p-4">
      <MdOutlineLocalOffer size={'60px'} />
      <h3 className="font-bold text-lg my-4">Best Offers</h3>
      <p className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="flex flex-col items-center w-72 justify-center my-4 lg:my-0 bg-stone-100 p-4">
      <AiOutlineLock size={'60px'} />
      <h3 className="font-bold text-lg my-4">Secure Payments</h3>
      <p className="text-center">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div>
  );
};

export default Service;
