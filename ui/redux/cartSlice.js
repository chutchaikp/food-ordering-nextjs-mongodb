// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
// 	products: [],
// 	quantity: 0,
// 	total: 0,
// }

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			debugger;
			state.products.push(action.payload)
			state.quantity += 1;
			state.total += action.payload.price * action.payload.quantity
		},
		reset: (state) => {
			// debugger;
			// state = initialState;
			state.products = []
			state.quantity = 0
			state.total = 0
		}
	}
})

export const { addProduct, reset } = cartSlice.actions
export default cartSlice.reducer;