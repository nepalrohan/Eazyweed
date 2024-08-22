import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-[87vh]">
      <div className=" flex flex-col items-center p-8">
        <div className=" p-4 flex flex-col gap-6">
          <div className="mt-2 flex flex-col gap-2">
            <h1 className="text-purple font-bold text-5xl drop-shadow-lg">
              Streamlining Your Dream Wedding Services
            </h1>
            <h3 className="text-purple font-semibold text-xl drop-shadow-lg">
              "Effortlessly book caterers, bands, photographers, decorators,
              makeup artists, and more for your wedding"
            </h3>
          </div>
          <div className="flex gap-2  justify-center">
            <button className="text-lg hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300 hover:scale-105 shadow-md shadow-black font-semibold bg-btn text-purple py-0.5 px-3   text-center rounded-tl-full rounded-br-full">
              Register as User
            </button>
            <button className="text-lg hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300 hover:scale-105 shadow-md shadow-black font-semibold bg-purple text-white py-0.5   px-3 text-center rounded-tr-full rounded-bl-full">
              Register as Vendor
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-purple drop-shadow-xl">
              Don't stress about your big day,
            </h3>
            <h3 className="text-xl font-bold text-purple drop-shadow-xl">
              let EazyWed handle the details and elevate your celebration!
            </h3>
          </div>
        </div>
      </div>
      {/* Down part of our site */}
      <div className="flex justify-items-start relative overflow-hidden">
        <div className="flex   flex-col gap-3 items-start">
          <button className="hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300  shadow-md shadow-black text-lg font-semibold text-white bg-purple py-0.5  px-3 rounded-tr-full">
            Makeup Artists
          </button>
          <button className="hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300   shadow-md shadow-black text-lg font-semibold text-white bg-purple py-0.5 px-3   rounded-tr-full">
            Musician & Bands
          </button>
          <button className="hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300  shadow-md shadow-black text-lg font-semibold text-white bg-purple py-0.5  px-3 rounded-tr-full">
            Photographer & Videographer
          </button>
          <button className="hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300  shadow-md shadow-black text-lg font-semibold text-white bg-purple py-0.5 px-3  rounded-tr-full">
            Caterers, Decorators & many more...
          </button>
        </div>
        <div className="">
          <button
            className="text-lg shadow-md mx-64 shadow-black bg-purple
     text-white py-0.5 px-3 font-semibold  mt-2 rounded-full hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300 hover:scale-105"
          >
            Budget Calculator
          </button>
        </div>
      </div>
      <div className="bg-purple fixed bottom-0 right-0 w-44 h-40 shadow-md hover:bg-white ease-in-out transition-all duration-105 hover:shadow-none shadow-black rounded-tl-full "></div>
      {/* hr line */}
      <div className="border-t-4  text-btn mt-1.5 ">
        <h2 className="text-center text-purple text-lg">
          "Creating Unforgettable Wedding Experiences Together"
        </h2>
      </div>
    </div>
  );
};

export default Home;
