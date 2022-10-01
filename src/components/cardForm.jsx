import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import ErrorMsg from './errorMsg';
import Input from './input';
import { setApproved, setCardNumber, setCvc, setMonth, setName, setYear } from './slices/icdfSlice';
import validationSchema from './validationSchema';

const initialValues = {
	name: '',
	cardNumber: '',
	month: '',
	year: '',
	cvc: ''
};

const CardForm = () => {
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				dispatch(setApproved(true));
			}}
		>
			{(formProps) => (
				<Form>
					<div className="mb-4">
						<Input
							name="name"
							type="text"
							formProps={formProps}
							label="cardholder name"
							placeholder="e.g. Jane Appleseed"
							onKeyUp={(e) => dispatch(setName(e.target.value))}
						/>
						<ErrorMsg name="name" />
					</div>
					<div className="mb-4">
						<Input
							name="cardNumber"
							type="text"
							formProps={formProps}
							label="card number"
							placeholder="e.g. 1234 5678 9123 0000"
							onKeyUp={(e) => dispatch(setCardNumber(e.target.value))}
						/>
						<ErrorMsg name="cardNumber" />
					</div>
					<div className="flex flex-row gap-2">
						<Input
							name="month"
							type="text"
							formProps={formProps}
							label="exp. date"
							placeholder="MM"
							className="w-[74px]"
							onKeyUp={(e) => dispatch(setMonth(e.target.value))}
						/>
						<Input
							name="year"
							type="text"
							formProps={formProps}
							label="(mm/yy)"
							className="w-[74px]"
							placeholder="YY"
							onKeyUp={(e) => dispatch(setYear(e.target.value))}
						/>
						<Input
							name="cvc"
							type="text"
							formProps={formProps}
							label="cvc"
							placeholder="e.g. 123"
							onKeyUp={(e) => dispatch(setCvc(e.target.value))}
						/>
					</div>
					<div className="flex flex-row">
						<div className="flex flex-col w-[165px] ">
							<ErrorMsg name="month" />
							<ErrorMsg name="year" />
						</div>
						<ErrorMsg name="cvc" />
					</div>
					<button
						type="submit"
						className="w-full h-[53px] mt-4 rounded-lg font-spaceGrotesk text-lg text-white "
						style={{ background: 'hsl(278, 68%, 11%)' }}
					>
						Confirm
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default CardForm;
