import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { InfinitySpin } from 'react-loader-spinner';
import { postCropForSale,userCrops } from '@/Services/job/cropsData';
import { toast } from "react-toastify";
import {
    FaMapMarkerAlt,
    FaWeightHanging,
  } from 'react-icons/fa';
import Footer from '@/components/Footer';
export default function PostedJobs() {
    
    
  const [formData, setFormData] = useState({
    cropName: '',
    cropImage: '',
    description: '',
    cropPlace: '',
    quantity: 0,
    price: 0,
    cropImage: '', // Store image URLs here
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [userCrop, setUserCrop] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const onToast = () => {
    // Reset the form fields to their initial values
    setFormData({
      cropName: '',
      cropImage: '',
      description: '',
      cropPlace: '',
      quantity: 0,
      price: 0,
      cropImage: '', // You have 'cropImage' twice; you might want to remove one of them
    });
  
    // Display the success toast
    toast('Product Added Successfully', {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const response = await postCropForSale(userId,formData.cropName,formData.quantity,formData.price,formData.description,formData.cropPlace,formData.cropImage);
        console.log(response);
        setIsSuccess(true);
        onToast();
    } catch (err) {
      setError('An error occurred while saving the crop details.');
      console.error(err);
    }
  };
  useEffect(() => {

    const fetchUserCropsData = async () => {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;
        const response = await userCrops(email);
        console.log(response);
        setUserCrop(response.user.crops);
        if(!response.success){
          setUserCrop(response.user);
        }
      } catch (error) {
        console.error('Error fetching user crops:', error);
      }
    };

    fetchUserCropsData();
  }, []);
  useEffect(() => {
    if (!Cookies.get('token')) {
      router.push('/auth/login');
    }
  }, [Cookies]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (error) toast.error(error);

  return (
    <>
      {isLoading ? (
        <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
          <InfinitySpin width='200' color="#7A9D54" />
          <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 ">
            <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
              <div className="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" id="menu-content">
                <ul className="list-reset py-2 md:py-0" style={{position:'fixed'}}>
                  <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
                    <a href='#section1' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                      <span className="pb-1 md:pb-0 text-lg">Add Crop Product</span>
                    </a>
                  </li>
                  <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent border-transparent font-bold border-yellow-600">
                    <a href='#section2' className="block pl-4 align-middle text-gray-700 no-underline hover:text-green-600">
                      <span className="pb-1 md:pb-0 text-lg">Your Products</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <section id='section1' className="w-full lg:w-4/5 shadow-md ">
              <h1 className=" font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-8 lg:mt-0 md:text-2xl ml-8">
                Add Product For Sale
              </h1>
             <hr className="w-3/12 h-1 bg-green-600 mx-auto mb-4 my-4 mx-10" />


              {/* <hr className="bg-gray-300 my-12" /> */}

              {/* <h2  className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl ml-4">Add Your Crop<hr className="w-40 h-1 bg-green-600 mx-auto mb-4 my-4" /></h2> */}
              

              <div id="section1" className="p-8 mt-6 lg:mt-0 rounded-lg shadow-lg bg-[#] w-3/4 shadow-md p-4 m-4 ">
  <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
    <div className="md:flex flex-col mb-4">
      <label className="block text-black-600 font-semibold mb-2 md:text-left text-xl">Crop Name</label>
      <input
  className="form-input w-full focus:bg-white border-2 rounded-lg py-2"
  type="text"
  name="cropName"
  value={formData.cropName}
  onChange={handleChange}
  required
/>
    </div>

    <div className="md:flex flex-col mb-4">
      <label className="block text-black-600 font-semibold mb-2 md:text-left fontSize:20px fontFamily:Quicksand text-xl">Image URL</label>
      <input
        className="form-input w-full focus:bg-white border-2 rounded-lg py-2"
        type="text"
        name="cropImage"
        value={formData.cropImage}
        onChange={handleChange}
        required
      />
    </div>

    <div className="md:flex flex-col mb-4">
      <label className="block text-black-600 font-semibold mb-2 md:text-left text-xl">Price</label>
      <input
        className="form-input w-full focus:bg-white border-2 rounded-lg py-2"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
    </div>

    <div className="md:flex flex-col mb-4">
      <label className="block text-black-600 font-semibold mb-2 md:text-left text-xl">Quantity in Kgs</label>
      <input
        className="form-input w-full focus:bg-white border-2 rounded-lg py-2" 
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
    </div>

    <div className="md:flex flex-col mb-4">
      <label className="block text-black-600 font-semibold mb-2 md:text-left text-xl">Place</label>
      <input
        className="form-input w-full focus:bg-white border-2 rounded-lg py-2"
        type="text"
        name="cropPlace"
        value={formData.cropPlace}
        onChange={handleChange}
        required
      />
    </div>

    <div className="md:flex flex-col mb-4">
      <label className="block text-black-600 font-semibold mb-2 md:text-left text-xl">Description</label>
      <textarea
        className="form-textarea w-full focus:bg-[#F8F6F4] border-2 rounded-lg resize-none "
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        rows="4"
      />
    </div>

    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-green-700 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded-full ml-60" type="submit">
          Save
        </button>
      </div>
    </div>
  </form>
</div>


              <hr className="bg-gray-300 my-12" />

              <h2 id='section2' className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl text-center">Previous Posts</h2>
              <hr className="w-40 h-1 bg-green-600 mx-auto mb-4 my-0" /> 


                <div id='section2' className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                <h3 className="text-lg font-semibold mb-4 ">Previously Posted Crops</h3>
                {userCrop.map((crop) => (
                    <div
                    key={crop._id + crop.cropName}
                    style={{float:'left',marginTop:'3.5rem'}}
                    className="w-2/3 h-48 bg-white-200 border-2 border-slate-200 rounded-lg flex flex-row mx-auto mt-6 justify-start"
                  >
                      <div className="w-3/12 h-full">
                        <img
                          className="h-full"
                          src={crop.images}
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
                          
                              <div className="text-white bg-blue-700
                                            hover:bg-blue-800 focus:outline-none
                                            focus:ring-4 focus:ring-blue-300
                                            font-medium rounded-full
                                            text-sm px-5 py-2.5
                                            text-center mr-2 mb-2"
                              >
                                Posted
                              </div>
                              
                          </div>
                      </div>
                    </div>
                ))}
                </div>

            </section>
          </div>
        </>
      )}
      <Footer/>
    </>
  );
}
