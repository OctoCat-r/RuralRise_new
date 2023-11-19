import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import {
  FaMapMarkerAlt,
  FaWeightHanging,
} from 'react-icons/fa';

const CropList = ({ crops }) => {
  const [filteredCrops, setFilteredCrops] = useState([]);

  useEffect(() => {
    setFilteredCrops(crops);
  }, [crops]);


  return (
    <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
      {filteredCrops.map((crop) => (
        <div
          key={crop._id+crop.cropName}
          className="w-2/3 h-48 bg-white-200 border-2 border-slate-200 rounded-lg flex flex-row mx-auto mt-6"
        >
            <div className="w-3/12 h-full">
              <img
                className="h-full"
                src={crop.image}
                alt={`Crop`}
              />
            </div>
            <div className="w-6/12 h-full p-2 ">
              <h3 className="pl-4 pt-2 text-2xl py-6">{crop.cropName},{ crop.description}</h3>
              {/* Display location icon and farmer address */}
              <div className="px-4 flex items-center">
                <FaMapMarkerAlt className="mr-1 text-[#A0D8B3]" />
                <span>{crop.place}</span>
              </div>
              {/* Display "Posted by Farmer's First Name" */}
              
              {/* Display total amount of kgs available */}
              <div className="px-4 flex items-center">
                <FaWeightHanging className="mr-1 text-[#213555]" />
                <span>Total Quantity: {crop.quantity}kg</span>
              </div>
            </div>
            <div className="w-3/12 h-full border-l-4 p-2 flex flex-col justify-center">
                <div className="flex flex-row items-center ">
                    <h4 className="text-lg">
                      Per Kg Price: ₹{crop.price}
                    </h4>
                    
                </div>
                
                <div className="flex flex-col mt-4">
                <Link href={`product-details?farmerId=${crop._id}&cropName=${crop.cropName}`}>
                    <div className="text-white bg-blue-700
                                  hover:bg-blue-800 focus:outline-none
                                  focus:ring-4 focus:ring-blue-300
                                  font-medium rounded-full
                                  text-sm px-5 py-2.5
                                  text-center mr-2 mb-2"
                    >
                      Buy Now
                    </div>
                  </Link>
                    <div className="px-4 text-slate-500">
                posted by {crop.farmer.name}
              </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default CropList;
