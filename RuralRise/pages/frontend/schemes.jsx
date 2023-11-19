import React, { useState, useEffect } from 'react';
import SchemeCards from '@/components/SchemeCards';
import jsonData from '@/schemes[1].json'; // Import your JSON data file
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function Schemes() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    // Simulate fetching data from your JSON file
    setData(jsonData.schemes);
  }, []);



  console.log(data.schemes);



  return (
    <div>
        <NavBar/>

    <div className="container mx-auto max-w-400 mt-12">
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <SchemeCards key={index} data={item} />
      ))}
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Schemes;
