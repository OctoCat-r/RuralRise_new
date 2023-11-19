import connectDB from '@/components/DB/connectDB'
import Farmer from '@/models/Farmer';
import User from '@/models/User';
import validateToken from '@/middleware/tokenValidation';
import Joi from 'joi';
import Transaction from '@/models/Transaction';

const schema = Joi.object({
  cropName: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  images: Joi.string().required(),
  // Remove the 'farmer' field from validation as it's already defined in the model
  // Add more fields as needed
});

export default async (req, res) => {
  await connectDB();
  const { method } = req;
  switch (method) {
    case 'PUT':
      await validateToken(req, res, async () => {
        await boughtCropFromSale(req, res);
      });
      break;
    case 'POST':
      await validateToken(req, res, async () => {
        await postCropForSale(req, res);
      });
      break;
    case 'GET':
        await displayCropsForSale(req, res);
      // Retrieve and display crops for sale
      
      break;
    default:
      res.status(400).json({ success: false, message: 'Invalid Request' });
  }
}

const boughtCropFromSale = async (req, res) => {
  try {
    const { farmerId, cropName, quantity, name, email, price, place } = req.body;
    console.log(req.body,'gvhjxcbscbdsbcsdjdb');
    // Find the farmer and crop
    const farmer = await Farmer.findById(farmerId);
    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }

    const crop = farmer.crops.find((c) => c.cropName === cropName);
    if (!crop) {
      return res.status(404).json({ error: 'Crop not found' });
    }

    // Verify that the requested quantity is valid
    if (quantity < 1 || quantity > crop.quantity) {
      return res.status(400).json({ error: 'Invalid quantity' });
    }

    // Update the crop quantity in the database
    crop.quantity -= quantity;
    await farmer.save();
    const trans={
      name: name,
      email: email,
      crop: cropName,
      quantity: quantity,
      price: price,
      place: place,
      orderedAt: new Date(),

    }
    const transaction = new Transaction(trans); // Create a new transaction document
    await transaction.save();

    // Send a success response
    return res.status(200).json({ message: 'Purchase successful' });
  } catch (error) {
    console.error('Error processing purchase:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const postCropForSale = async (req, res) => {
  try {
    const { userId, cropName, quantity, price, description, place, images } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user is already in the farmers table
    let farmer = await Farmer.findOne({ email: user.email });

    if (!farmer) {
      // If the user is not in the farmers table, create a new farmer entry
      farmer = new Farmer({
        name: user.name,
        email: user.email,
        address: user.address,
        phoneNumber: String(user.contact),
        crops: [], // Initialize the crops array
      });
    }

    // Check if the crop with the same name already exists in the farmer's crops array
    const cropIndex = farmer.crops.findIndex((c) => c.cropName === cropName);

    if (cropIndex === -1) {
      // Crop not found, create a new crop entry
      const newCrop = {
        cropName,
        quantity,
        price,
        description,
        place,
        images,
      };

      farmer.crops.push(newCrop);
    } else {
      // Crop found, update the existing crop entry
      const existingCrop = farmer.crops[cropIndex];
      existingCrop.quantity = quantity;
      existingCrop.price = price;
      existingCrop.description = description;
      existingCrop.images = images;
    }

    // Save the updated farmer document (either new or existing)
    await farmer.save();

    // Send a success response
    return res.status(200).json({ message: 'Crop information updated' });
  } catch (error) {
    console.error('Error updating crop information:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



const displayCropsForSale = async (req, res) => {
  try {
    // Query the Farmer collection to get crops for sale
    const farmersWithCrops = await Farmer.find({ 'crops.0': { $exists: true } });

    // Extract and format the crop data for display
    
    const cropsForSale = farmersWithCrops.reduce((cropsList, farmer) => {
      farmer.crops.forEach((crop) => {
        cropsList.push({
          _id: farmer._id,
          cropName: crop.cropName,
          description: crop.description,
          quantity: crop.quantity,
          price: crop.price,
          place: crop.place,
          image: crop.images,
          farmer: {
            name: farmer.name,
            email: farmer.email,
            phoneNumber: farmer.phoneNumber
            // Add more farmer details as needed
          },
           // Store the images field as an array of image URLs
        });
        
      });
      return cropsList;
    }, []);

    // if (cropsForSale.length > 0) {
    // }

    return res.status(200).json({ success: true, crops: cropsForSale });
  } catch (error) {
    console.error('Error fetching crops for sale:', error);
    return res.status(500).json({ success: false, message: 'Something Went Wrong. Please Retry.' });
  }
};
