import { serviceBanner } from '../../images';

const ServiceSection = () => {
	return (
		<section className='mt-24 h-[60vh] lg:h-full relative ' id='service'>
			<img
				src={serviceBanner}
				alt=''
				className='w-full object-cover h-[60vh] lg:h-full'
			/>

			<div className='w-full text-white text-center flex justify-center items-center absolute top-1/2 -translate-y-1/2'>
				<div className='text'>
					<h1
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-once='true'
						className='text-xl lg:text-[45px] md:text-[54px] leading-[40px] md:leading-none font-semibold'>
						Get our services and feel the benefits
					</h1>
					<p
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-delay='200'
						data-aos-once='true'
						className='max-w-[810px] text-sm lg:text-base md:mt-10 inline-block'>
						Providing services as a transparent, fast and precise based coal
						commodity trading company. And Always open opportunities (improvise)
						to partner and invest together .
					</p>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
