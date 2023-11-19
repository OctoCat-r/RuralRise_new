// SchemeCard.js
import React from 'react';
import NavBar from '@/components/NavBar'

const SchemeCards = ({ data }) => {
    const cardStyle={
        maxWidth:"1300px",
        maxHeight:'1000px',
        fontFamily:'Quicksand',
       boxShadow: '0 0 100px rgba(0, 100, 0, 0.2)',
   
        marginTop:'30px'
    }
    const titleStyle={
        color:'green',
        fontSize:'25px'
    }
    const durationStyle = {
        color:'blue',
        fontSize: '20px'

    }
    const eligibleStyle = {
        color:'black',
        fontSize: '20px'
    }

    const benifitStyle={
        fontSize:'20px'
    }
    const applyLinkStyle = {
    marginTop: '36px',
    fontSize:'20px' 
  };

  return (
    <div className="flex justify-centre items-centre h-full mb-4" style={cardStyle} >
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <div className="text-xl  font-semibold mb-4" style={titleStyle}>{data.title}</div>
      <p className="text-gray-700 " style={durationStyle}>{data.duration}</p>
      <ul className="list-disc ml-6 mt-2" style={eligibleStyle}>
        {data.eligible.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="font-semibold mt-8">Benefits:</h2>
      <ul className="list-disc ml-6 mt-2" style={benifitStyle}>
        {data.benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {(data.apply.startsWith('http://') || data.apply.startsWith('https://'))?(
        <a
        href={data.apply}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4 block"
        style={applyLinkStyle}
      >
       
       Apply Here
      </a>
      ):(
        <a
        
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-4 block"
        style={applyLinkStyle}
      >
       
       {data.apply}
      </a>
      )
      }
      
    </div>
    </div>
  );
};

export default SchemeCards;
