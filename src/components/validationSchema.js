import * as Yup from 'yup';

const validationSchema = Yup.object({
	name: Yup.string().max(40, 'Must be 15 characters or less.').required('Can’t be blank'),
	cardNumber: Yup.string()
		.matches(/^[0-9]+$/, 'Wrong format, numbers only')
		.length(16, 'Must be 16 numbers.')
		.required('Can’t be blank'),
	month: Yup.number()
		.typeError('Must be a number')
		.max(12, 'Not a valid expiration date.')
		.required('Can’t be blank'),
	year: Yup.number('Must be a number')
		.typeError('Must be a number')
		.max(99, 'Not a valid expiration date.')
		.required('Can’t be blank'),
	cvc: Yup.string()
		.matches(/^[0-9]+$/, 'Wrong format, numbers only')
		.length(3, 'Not a valid CVC.')
		.required('Can’t be blank')
});

export default validationSchema;
