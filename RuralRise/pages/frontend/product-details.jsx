import { useRouter } from 'next/router';
import Farmer from '@/models/Farmer'; // Import your Farmer model
import NavBar from '@/components/NavBar';
import { useState, useEffect } from 'react';
import { modifyCrops } from '@/Services/job/cropsData';
import { InfinitySpin } from 'react-loader-spinner';
import { toast } from "react-toastify";
import Footer from '@/components/Footer';

const ProductDetailsPage = ({ farmer, crop }) => {
  const router = useRouter();
  const { farmerId, cropName } = router.query;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Define the loading state

  const [quantity, setQuantity] = useState(1);

  if (!farmer || !crop) {
    return <div>Data not found</div>;
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= crop.quantity) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    return quantity * crop.price;
  };

  const handleBuyNow = async () => {
    const totalPrice = calculateTotalPrice();

    setLoading(true); // Set loading to true while processing the purchase
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await modifyCrops(farmer._id, crop.cropName, quantity, user.name, user.email, quantity*crop.price, crop.place);
    console.log(response);

    setLoading(false); // Set loading back to false after the purchase request

    if (response.message === 'Purchase successful') {
      // Update the crop quantity in the crop object
      crop.quantity -= quantity;
      toast('Product Bought Successfully', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'success',
      });
    } else {
      // Handle the case where the purchase request failed
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {loading ? (
        <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
          <InfinitySpin width='200' color='#7A9D54' />
          <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
        </div>
      ) : (
        <div>
          <NavBar />
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="Product Image"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={crop.images}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {crop.cropName}
                  </h1>
                  <div className="flex mb-4">
                    {/* Star rating icons */}
                    <span className="flex items-center">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <svg
                          key={index}
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      ))}
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      {/* Action buttons */}
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed text-lg">{crop.description}</p>
                  <p className="leading-relaxed text-lg"> Location: {crop.place}</p>
                  <p className="leading-relaxed text-lg"> Quantity: {crop.quantity}kg</p>
                  <p className="leading-relaxed text-lg">Posted by: {farmer.name}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    
                  <div className="flex flex-col items-baseline">
                    <div >
                      <label className='text-lg'>Quantity (kg):</label>
                      <input
                        type="number"
                        min="1"
                        max={crop.quantity}
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16  px-2 py-1 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>
                    <div className='text-lg'>Price per kg: ₹{crop.price.toFixed(2)}</div>
                  </div>
                  </div>
              
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      
                      Total Price: ₹{calculateTotalPrice()}
                    </span>
                    <button
                      onClick={handleBuyNow}
                      className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                    >
                      Buy Now
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      )}
      <Footer />
    </>
  );
};

// Fetch the data based on 'farmerId' and 'cropName'
export async function getServerSideProps(context) {
  const { farmerId, cropName } = context.query;

  try {
    // Retrieve the farmer and crop data based on IDs
    const farmer = await Farmer.findById(farmerId);
    const crop = farmer.crops.find((c) => c.cropName === cropName);

    if (!farmer || !crop) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        farmer: JSON.parse(JSON.stringify(farmer)), // Convert to JSON
        crop: JSON.parse(JSON.stringify(crop)), // Convert to JSON
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      notFound: true,
    };
  }
}

export default ProductDetailsPage;
