import { configureStore } from '@reduxjs/toolkit';
import icdfReducer from './components/slices/icdfSlice';

const store = configureStore({
	reducer: {
		icdf: icdfReducer
	}
});

export default store;
