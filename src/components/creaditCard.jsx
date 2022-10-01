import { useSelector } from 'react-redux';
import cardLogo from '../assets/card-logo.svg';

const CreditCard = () => {
	const name = useSelector((state) => state.icdf.name);
	const month = useSelector((state) => state.icdf.month);
	const year = useSelector((state) => state.icdf.year);
	const cvc = useSelector((state) => state.icdf.cvc);
	const cardNumber = useSelector((state) => state.icdf.cardNumber);

	return (
		<div className="h-60 md:h-72 lg:h-screen lg:w-5/12 xl:w-[37%] bg-cover bg-[url('./assets/bg-main-mobile.png')] lg:bg-[url('./assets/bg-main-desktop.png')]">
			<div className="absolute  h-[247px] md:h-[295px] lg:h-[467px] xl:h-[527px]  w-[90%] lg:w-[541px] left-[5%] lg:left-[10%]  top-8 lg:top-[calc((100vh-527px)/2)] ">
				<div className="absolute lg:bottom-0 right-0 h-[157px] md:h-[177px] lg:h-[212px] xl:h-[245px] w-72 md:w-80 lg:w-[387px] xl:w-[447px] bg-cover bg-[url('./assets/bg-card-back.png')]">
					<div className="absolute flex justify-end right-[28px] lg:right-[40px]  bottom-[62px] md:bottom-[73px] lg:bottom-[89px] xl:bottom-[105px] pr-1  w-[230.98px] h-[29.74px] ">
						<p className="font-spaceGrotesk tracking-[1.285px] xl:text-sm text-white uppercase">
							{cvc || '000'}
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 lg:top-0 h-[157px] md:h-[177px] w-[286px] lg:h-[212px] xl:h-[245px] md:w-80 lg:w-[387px] xl:w-[447px] bg-cover bg-[url('./assets/bg-card-front.png')]">
					<img
						src={cardLogo}
						className="absolute h-[30px] w-[54px] lg:h-[47px] lg:w-[84px] left-5 top-[18px]"
					/>
					<div className="absolute w-[239px] lg:w-[343px] h-[23px] left-[6.99%] top-[calc(50%_-_23px/2_+_18px)] ">
						<p className="font-spaceGrotesk font-medium text-lg lg:text-[24px] xl:text-[28px] tracking-[2.2px] text-white">
							{cardNumber || '0000 0000 0000 000'}
						</p>
					</div>
					<div className="absolute flex justify-between w-[245px] lg:w-[323px] xl:w-[383px] left-[6.99%] top-[77%] font-spaceGrotesk font-medium text-[9px] lg:text-[14px] uppercase text-white">
						<p className="">{name || 'jane applebeed'}</p>
						<div>
							<span>{month || '00'}</span>/<span>{year || '00'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreditCard;
