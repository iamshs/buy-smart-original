import React from "react";

const TeamMember = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-4 lg:px-60 lg:pb-24 ">

      <div className="card  flex justify-center items-center flex-col bg-slate-100 ">
        <div className="avatar pt-6">
          <div className="w-32 rounded-full">
            <img
              src="https://i.pinimg.com/originals/65/fe/81/65fe81dc746c06f0bfc2839d85df42e5.jpg"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black my-2">
          Harvey Spector
        </h2>
        <p className="text-lg pb-6">Founder - CEO</p>
      </div>

      <div className="card flex justify-center items-center flex-col bg-slate-100 ">
        <div className="avatar pt-6">
          <div className="w-32 rounded-full">
            <img
              src="https://img.freepik.com/premium-photo/business-woman-entrepreneur-working-office-professional-employee-workplace-young-beautiful-secretary-girl_265223-28262.jpg?w=2000"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black my-2">
        Jessica Pearson
        </h2>
        <p className="text-lg pb-6">COO</p>
      </div>

      <div className="card  flex justify-center items-center flex-col bg-slate-100 ">
        <div className="avatar pt-6">
          <div className="w-32 rounded-full">
            <img
              src="https://www.llorenteycuenca.com/wp-content/uploads/2022/08/Dise%C3%B1o-sin-t%C3%ADtulo-2022-08-10T110243.606.png"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black my-2">
        Rachel Zain
        </h2>
        <p className="text-lg pb-6">Marketing Head</p>
      </div>

      <div className="card  flex justify-center items-center flex-col bg-slate-100 ">
        <div className="avatar pt-6">
          <div className="w-32 rounded-full">
            <img
              src="https://media.istockphoto.com/photos/the-next-best-triumph-could-be-around-the-corner-picture-id693275072?k=20&m=693275072&s=170667a&w=0&h=hKWBDFJZULHUyjDOAHEoW7fTwFCrtJ3jLyIkmyf1tmk="
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black my-2">
        Luise Litt
        </h2>
        <p className="text-lg pb-6">Lead Developer</p>
      </div>

      <div className="card  flex justify-center items-center flex-col bg-slate-100 ">
        <div className="avatar pt-6">
          <div className="w-32 rounded-full">
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/09/99/95/1000_F_309999571_kCyTFrjf66N9ZfsfVB0leiHPuXEAKRgu.jpg"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black my-2">
        Katrina Bennett
        </h2>
        <p className="text-lg pb-6">Intern Designer</p>
      </div>

      <div className="card  flex justify-center items-center flex-col bg-slate-100 ">
        <div className="avatar pt-6">
          <div className="w-32 rounded-full">
            <img
              src="https://img.freepik.com/free-photo/portrait-happy-excited-man-holding-laptop-computer_171337-12121.jpg?w=900&t=st=1667397632~exp=1667398232~hmac=4738a4b21562a5b6593cae8c096b0e269bcf5916bacc11c1a3966539df04f40e"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black my-2">
        Mike Ross
        </h2>
        <p className="text-lg pb-6">Intern Designer</p>
      </div>


    </div>
  );
};

export default TeamMember;
