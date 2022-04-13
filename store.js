import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

// where we store user info
export const store = configure({
	reducer: {
		nav: navReducer,
	},
});