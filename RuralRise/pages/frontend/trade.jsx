import NavBar from '@/components/NavBar';
import CropList from '@/components/CropList';
import { fetchCrops } from '@/Services/job/cropsData';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { setCrops } from '@/Utils/CropSlice';

export default function Trade() {
  const [loading, setLoading] = useState(true);
  const [selectedCrops, setSelectedCrops] = useState([]); // Initialize selectedCrops as an empty array

  const router = useRouter();
  const dispatch = useDispatch();
  const allCrops = useSelector((state) => state?.Crops?.cropData);
  const [filteredCrops, setFilteredCrops] = useState(allCrops); // Initialize filteredCrops with allCrops

  const uniqueCropsSet = new Set();

  const uniqueCrops = allCrops.filter((crop) => {
    const lowerCaseCropName = crop.cropName.toLowerCase();
    if (!uniqueCropsSet.has(lowerCaseCropName)) {
      uniqueCropsSet.add(lowerCaseCropName);
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (!Cookies.get('token')) {
      router.push('/auth/login');
    }
  }, [Cookies]);

  useEffect(() => {
    fetchListedCrops();
  }, []);

  useEffect(() => {
    // Apply filter when selectedCrops or crops data changes
    applyFilter(selectedCrops);
  }, [selectedCrops, allCrops]);

  const fetchListedCrops = async () => {
    try {
      const getCrops = await fetchCrops();
      if (getCrops.success) {
        dispatch(setCrops(getCrops.crops));
        setLoading(false);
      } else {
        router.push('/auth/login');
      }
    } catch (error) {
      console.log('Error fetching crops: ', error);
    }
  };

  const handleCropCheckboxChange = (cropName) => {
    // Update the selectedCrops state based on checkbox selection
    if (selectedCrops.includes(cropName)) {
      // Crop is already selected, remove it
      setSelectedCrops(selectedCrops.filter((name) => name !== cropName));
    } else {
      // Crop is not selected, add it
      setSelectedCrops([...selectedCrops, cropName]);
    }
  };

  const applyFilter = (selectedCrops) => {
    // Apply filter to crops based on selectedCrops
    
    if (selectedCrops.length === 0) {
      // No crops selected, display all crops
      setFilteredCrops(allCrops);
    } else {
      // Filter crops to display based on selectedCrops
      const filtered = allCrops.filter((crop) =>
        selectedCrops.includes(crop.cropName)
      );
      console.log(selectedCrops,'hi',allCrops,'hi',filtered);
      setFilteredCrops(filtered);
    }
  };
  console.log(filteredCrops);

  return (
    <>
      {loading ? (
        <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
          <InfinitySpin width='200' color='#7A9D54' />
          <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <div className='w-full h-screen pt-20 flex items-center justify-start flex-row'>
            <div className='w-30% h-full p-4'>
              {/* Filter Panel */}
              <div className='bg-white p-4 rounded-lg shadow' style={{width:'max-content'}}>
                <h2 className='text-xl font-semibold mb-2'>Filter Crops</h2>
                {uniqueCrops.map((crop) => (
                  <label key={crop.cropName} className='block mb-2'>
                    <input
                      type='checkbox'
                      value={crop.cropName}
                      checked={selectedCrops.includes(crop.cropName)}
                      onChange={() => handleCropCheckboxChange(crop.cropName)}
                    />
                    {crop.cropName}
                  </label>
                ))}
              </div>
            </div>
            <div className='w-70% h-full p-4' style={{width: 'inherit'}}>
              {/* Update CropList to accept filteredCrops */}
              <CropList crops={filteredCrops} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
