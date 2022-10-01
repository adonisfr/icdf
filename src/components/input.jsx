import propTypes from 'prop-types';
import { Field, getIn } from 'formik';

function getStyles(errors, touched, fieldName) {
	if (getIn(errors, fieldName) && getIn(touched, fieldName)) {
		return {
			border: '1px solid #FF5050'
		};
	}
}

const Input = ({ name, label, className, onKeyUp, placeholder, formProps }) => {
	return (
		<div className="flex flex-col">
			<label className="font-spaceGrotesk text-xs tracking-[2px] uppercase">{label}</label>
			<Field
				name={name}
				style={getStyles(formProps.errors, formProps.touched, name)}
				placeholder={placeholder}
				className={`form-input focus:ring-transparent border-x-2 border-y-2 border-gray-300 px-2 h-[45px] w-full rounded-md font-spaceGrotesk text-lg text-[#21092F] focus:border-violet-700  ${className}`}
				onKeyUp={onKeyUp}
			/>
		</div>
	);
};

Input.propTypes = {
	name: propTypes.string,
	label: propTypes.string,
	className: propTypes.string,
	placeholder: propTypes.string,
	formProps: propTypes.objectOf(propTypes.any),
	onKeyUp: propTypes.func
};

Input.defaultProps = {
	name: '',
	label: '',
	className: '',
	placeholder: '',
	value: undefined,
	onKeyUp: null
};

export default Input;
