import propTypes from 'prop-types';
import { ErrorMessage } from 'formik';

const ErrorMsg = ({ name }) => {
	return (
		<div className="text-[#FF5050]">
			<ErrorMessage name={name} />
		</div>
	);
};

ErrorMsg.propTypes = {
	name: propTypes.string
};

ErrorMsg.defaultProps = {
	name: ''
};

export default ErrorMsg;
