import connectDB from '@/components/DB/connectDB'
import Farmer from '@/models/Farmer';




export default async (req, res) => {
  await connectDB();
  const { method } = req;
  switch (method) {

    case 'GET':
        await displayCropsForSale(req, res);
      // Retrieve and display crops for sale
      
      break;
    default:
      res.status(400).json({ success: false, message: 'Invalid Request' });
  }
}




const displayCropsForSale = async (req, res) => {
  try {
    const email = req.query.email;
    let farmer = await Farmer.findOne({ email: email });

    
    if(!farmer){
        return res.status(200).json({ success: false, user: [] });
    }
    return res.status(200).json({ success: true, user: farmer });
  } catch (error) {
    console.error('Error fetching crops for sale:', error);
    return res.status(500).json({ success: false, message: 'Something Went Wrong. Please Retry.' });
  }
};
