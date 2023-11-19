import Cookies from "js-cookie";

// Fetch all crops from Farmers
export const fetchCrops = async () => {
  try {
    const res = await fetch("/api/job/cropsData", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${Cookies.get("token")}`
      }
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching crops: ", error);
    throw error; // Optionally, you can rethrow the error to handle it in the calling code.
  }
};

// Bookmark a crop
export const modifyCrops = async (_id,cropName,quantity, name, email, price, place) => {
  try {
    const res = await fetch("/api/job/cropsData", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("token")}`
      },
      body: JSON.stringify({
        farmerId: _id,
        cropName: cropName,
        quantity,
        name: name,
        email: email,
        price: price,
        place: place,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error modifying quantity crop: ", error);
    throw error;
  }
};

// Get bookmarked crops
export const postCropForSale = async (userId, cropName, quantity, price, description, place, images) => {
  try {
    const res = await fetch("/api/job/cropsData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get("token")}`
      },
      body: JSON.stringify({
        userId: userId,
        cropName: cropName,
        quantity: quantity,
        price: price,
        description: description,
        place: place,
        images: images,


      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error getting bookmarked crops: ", error);
    throw error;
  }
};

// Unbookmark a crop
export const userCrops = async (email) => {
  try {
    const res = await fetch(`/api/job/userCrops?email=${email}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${Cookies.get("token")}`
      }
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching crops: ", error);
    throw error; // Optionally, you can rethrow the error to handle it in the calling code.
  }
};
