import { useDispatch } from 'react-redux';
import iconComplete from '../assets/icon-complete.svg';
import { reset } from './slices/icdfSlice';

const ApprovedCard = () => {
	const dispatch = useDispatch();
	return (
		<div className=" flex flex-col items-center  h-[291px] w-full gap-3 ">
			<img src={iconComplete} alt="icon" className="w-20 h-20 mb-3" />
			<h1 className="font-spaceGrotesk text-[28px] uppercase">thank you!</h1>
			<p className="font-spaceGrotesk text-lg text-[#8F8694]">We’ve added your card details</p>
			<button
				className="w-full h-[53px] mt-10 rounded-lg font-spaceGrotesk text-lg text-white "
				style={{ background: 'hsl(278, 68%, 11%)' }}
				onClick={() => {
					dispatch(reset());
				}}
			>
				Continue
			</button>
		</div>
	);
};

export default ApprovedCard;
