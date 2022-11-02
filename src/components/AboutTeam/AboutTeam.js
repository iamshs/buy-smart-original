import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const AboutTeam = () => {
    return (
        <div>

            {/* divider---- */}
            <div className="flex items-center justify-center py-6 lg:pt-12 lg:mb-6">
            <div style={{ height: "4px" }} className="bg-sky-600 w-24"></div>
          </div>

         <div className='flex items-center justify-center flex-col text-black ' >
         <h3 className='text-xl font-semibold '>A Few Words About</h3>
         <h1 className=' lg:text-5xl font-bold lg:my-6 my-4 ' > Our Team </h1>
         <p className='  pb-20 max-w-3xl text-center px-6 lg:px-0'>
         Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor
          eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
         </p>
         </div>

         <TeamMember />
            
        </div>
    );
};

export default AboutTeam;