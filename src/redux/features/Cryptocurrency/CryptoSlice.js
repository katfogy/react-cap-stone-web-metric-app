import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  crytoList: [],
  isloading: false,
  error: '',
};
const cryptoSlice = createSlice({
  name: 'crytoList',
  initialState,
  reducers: {

  },

});

export default cryptoSlice.reducer;
