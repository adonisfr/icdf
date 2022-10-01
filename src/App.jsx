import CreditCard from './components/creaditCard';
import CardForm from './components/cardForm';
import ApprovedCard from './components/approvedCard';
import { useSelector } from 'react-redux';

function App() {
	const approved = useSelector((state) => state.icdf.approved);

	return (
		<div className="flex flex-col lg:flex-row  lg:items-center ">
			<CreditCard />
			<div className="flex w-full ">
				<div className=" h-[328px] w-[90%] lg:w-[381px] ml-[5%] lg:ml-[50%] xl:ml-[38%] mt-24 ">
					{approved ? <ApprovedCard /> : <CardForm />}
				</div>
			</div>
		</div>
	);
}

export default App;
