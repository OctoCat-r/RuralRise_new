// In your Redux slice (e.g., cropsSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const cropsSlice = createSlice({
  name: 'Crops',
  initialState: {
    cropData: [], // Initialize with an empty array
  },
  reducers: {
    setCrops: (state, action) => {
      state.cropData = action.payload; // Update the crop data in the state
    },
    // Other reducers as needed
  },
});

export const { setCrops } = cropsSlice.actions;

export const CropReducer = cropsSlice.reducer;
