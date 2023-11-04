/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Spacing, Container } from '../../layouts';
import { Button } from '../reusable';
import { heroBanner } from '../../images';
AOS.init();

const HeroSection = () => {
	return (
		<section
			className='h-[100vh] bg-no-repeat bg-cover text-center flex justify-center items-center relative'
			id='home'>
			<div className='container-hero w-full'>
				<img
					src={heroBanner}
					alt=''
					className='w-full object-cover bg-no-repeat h-[100vh]'
				/>
				<Spacing className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white w-full text-center '>
					<Container>
						<div className='content'>
							<div className='text'>
								<h2
									data-aos='zoom-in'
									data-aos-duration='2000'
									className='text-[#BEC1CA] rounded-[24px] text-[6px] md:text-sm lg:text-base bg-[#56565680] inline px-[20px] py-[5px] font-generalMd'>
									COAL & GOLD MINING , IRON ORE, TRADING, CONTRACTOR , EXPORT &
									IMPORT
								</h2>
								<h1
									data-aos='fade-up'
									data-aos-easing='ease-out'
									className='text-4xl mt-4 lg:text-[54px] drop-shadow-text font-generalSb leading-tight'>
									Providing Best Quality Coal for Your Needs!
								</h1>
								<p
									data-aos='fade-up'
									data-aos-delay='200'
									data-aos-duration='1000'
									className='max-w-[720px] inline-block mt-6 font-generalLi lg:text-base text-sm'>
									"We are a premium coal trader from Indonesia who offers
									products with superior specifications. We come with the best
									coal specifications, an easy purchasing process, and
									competitive prices. Unmatched coal quality for customer
									satisfaction."
								</p>
							</div>

							<div
								className='btn'
								data-aos='fade-up'
								data-aos-delay='400'
								data-aos-duration='1000'>
								<Button className='bg-[#EB3137] hover:bg-red-500 inline-block rounded-[3px] mt-[28px]'>
									Let's Explore
								</Button>
							</div>
						</div>
					</Container>
				</Spacing>
			</div>
		</section>
	);
};

export default HeroSection;
