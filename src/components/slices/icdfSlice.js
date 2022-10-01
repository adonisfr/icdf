import { createSlice } from '@reduxjs/toolkit';

const icdfSlice = createSlice({
	name: 'icdf',
	initialState: {
		name: '',
		month: '',
		year: '',
		cvc: '',
		cardNumber: '',
		approved: false
	},
	reducers: {
		setName: (state, actions) => {
			state.name = actions.payload;
		},
		setMonth: (state, actions) => {
			state.month = actions.payload;
		},
		setYear: (state, actions) => {
			state.year = actions.payload;
		},
		setCvc: (state, actions) => {
			state.cvc = actions.payload;
		},
		setCardNumber: (state, actions) => {
			const numbers = actions.payload;
			const tmp = [0, 0, 0, 0, ' ', 0, 0, 0, 0, ' ', 0, 0, 0, 0, ' ', 0, 0, 0, 0];
			let nIndex = 0;
			const array = tmp.map((i) => {
				let number = i;
				if (i === ' ') {
					return i;
				}
				if (numbers[nIndex]) {
					number = numbers[nIndex];
					nIndex += 1;
				}
				return number;
			});
			state.cardNumber = array.join('');
		},
		setApproved: (state, actions) => {
			state.approved = actions.payload;
		},
		reset: () => {
			return {
				name: '',
				month: '',
				year: '',
				cvc: '',
				cardNumber: '',
				approved: false
			};
		}
	}
});

const { setName, setMonth, setYear, setCvc, setCardNumber, setApproved, reset } = icdfSlice.actions;

export { setName, setMonth, setYear, setCvc, setCardNumber, setApproved, reset };

export default icdfSlice.reducer;
