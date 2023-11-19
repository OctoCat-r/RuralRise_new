import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import JobsCard from "./JobsCard";

export default function Intro() {
  const [search, setSearch] = useState("");
  const jobData = useSelector((state) => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [doneSearch, setDoneSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);

  };

  return (
    <>
      <div className="w-full  h-full flex items-center lg:justify-start py-20 justify-center flex-wrap my-12 ">
        <div className="lg:w-3/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-2 md:items-start md:justify-start md:p-20 flex-col ">
          <h1 className="md:text-6xl text-2xl sm:text-2xl font-extrabold mb-8 mt-[-50px] text-black ">
            Connecting Fields <span className="text-green-600 ">To Shelves.</span>{" "}
          </h1>
          <p className="md:text-xl sm:text-sm text-xs mb-12 text-black-400 font-bold">
            Over 10000 Farmers Delivering Quality Produce to Your Doorstep.
          </p>
          <div className="bg-white flex-col mb-6 w-full md:px-4   py-4 flex sm:flex-row items-center justify-center">
            <BiSearchAlt className="text-2xl text-green-600 mx-2 hidden sm:flex" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Crops of Your choice..."
              className="xs:w-full w-3/4  h-full px-2 bg-gray-200 text-base py-3 outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-3 py-2 my-2 sm:my-0 border border-green-600 rounded uppercase tracking-widest mx-4   text-white bg-green-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-green-600"
            >
              Search
            </button>
          </div>
          <div className=" w-full px-2 py-2 flex items-center justify-start flex-wrap">
            <div className="flex items-center justify-center">
              <BsFillBookmarkFill className="text-green-600 text-xl mx-2" />
              <h1 className="font-bold text-lg">Suggest Tag : </h1>
            </div>
            <div className="flex  font-semibold text-l  items-center justify-center px-4 flex-wrap">
              <p className="px-2  text-black-600">Paddy</p>
              <p className="px-2  text-black-600">Wheat</p>
              <p className="px-2  text-black-600">Maize</p>
            </div>
          </div>
        </div>
        <div className="w-3/6 my-2 h-full bg-gray-200 hidden items-center justify-center flex-col p-10 lg:flex ">

          <Image
            width={1000}
            height={1000}
            src="/60913-pmkisan9thinstallment.jpg"
            alt="no-image-found"
            className="mt-[-150px]"
          />
          </div>

        <div className="container mx-auto bg-gray-100 py-2 text-center mt-[-100px]">
            <h2 className="text-3xl font-bold mb-4 font-bold font-Quicksand"><span className="text-green-600 ">About Us</span></h2>
            <hr className="w-20 h-1 bg-green-600 mx-auto mb-4" /> 
            <p className="text-black-600 font-semibold text-xl font-quicksand ">
          Welcome to <span className="font-bold ">Fresh Farms</span> where we're not just connecting fields to shelves, we're sowing the seeds of a food revolution. Our journey began with a simple idea: to create a vibrant marketplace that unites the guardians of our land, our farmers, with the discerning tastemakers of our society, you, our cherished consumers.
          Join us in this culinary journey, where quality, sustainability, and the joy of farm-fresh goodness come together. Let's rewrite the story of food, one harvest at a time. Together, we'll harvest happiness, health, and a future that tastes deliciously unique.
            </p>
          </div>
          
        
        </div>
         
    
      {doneSearch && (
        <div className="w-full flex flex-wrap items-center justify-center py-2 px-2">
          {Array.isArray(filterJobs) && filterJobs.length > 0 ? (
            filterJobs?.map((job) => {
              return <JobsCard job={job} key={job?._id} />;
            })
          ) : (
            <p className="text-sm text-center font-semibold  text-red-500">
              Sorry No such Categories Job Available Right Now
            </p>
          )}
        </div>
      )}
    </>
  );
}
