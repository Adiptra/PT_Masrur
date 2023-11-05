/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { footerForm } from '../../constants/content/footer';
import { logoContact } from '../../images';
import { Container, Spacing } from '../../layouts';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
	return (
		<div className='bg-[#0F172A] text-white pb-[150px]' id="contactUs">
			<Spacing>
				<Container>
					<div className='container-footer'>
						<div className='footer-content flex justify-between items-start pt-[100px] flex-wrap w-full'>
							<div className='left'>
								<div className='title'>
									<h1
										data-aos='fade-right'
										data-aos-duration='1000'
										data-aos-once='true'
										className='text-2xl lg:text-[38px] font-generalSb'>
										Let’s work with us!
									</h1>
									<h2
										data-aos='fade-right'
										data-aos-duration='1000'
										data-aos-delay='200'
										data-aos-once='true'
										className='font-generalLi lg:max-w-[317px] mt-4 opacity-70 text-sm max-w-[210px]'>
										You can call or send us a message if you want to work with
										us!
									</h2>
								</div>
								<div className='form mt-[83px]'>
									<form action=''>
										<div className='left'>
											{footerForm.map((footer) => (
												<div
													className='input-form flex gap-x-6 items-start my-4'
													key={footer.id}>
													<div
														data-aos='fade-right'
														data-aos-duration='1000'
														data-aos-delay='220'
														data-aos-once='true'
														className='id'>
														<h2 className='text-xl font-generalMd'>{footer.id}</h2>
													</div>
													<div className='input-field w-full'>
														<div className='title'>
															<h2
																data-aos='fade-right'
																data-aos-duration='1000'
																data-aos-delay='230'
																data-aos-once='true'
																className='text-xl font-generalMd'>
																{footer.title}
															</h2>
														</div>
														<div
															data-aos='fade-right'
															data-aos-duration='1000'
															data-aos-delay='250'
															data-aos-once='true'
															className='input-field my-9 lg:inline-block flex flex-wrap mb-9 w-full'>
															{footer.formField.map((field) =>
																field.placeholder == 2 ? (
																	<div key={field.id}>
																		<input
																			type='text'
																			placeholder={field.placeholder}
																			className='bg-transparent border-b mr-4 pb-4 mb-9 sm:mb-0'
																		/>
																		<input
																			type='text'
																			placeholder={field.placeholder}
																			className='bg-transparent border-b pb-4 '
																		/>
																	</div>
																) : (
																	<div>
																		<input
																			type='text'
																			placeholder={field.placeholder}
																			className='bg-transparent border-b mr-4 pb-4 mb-9 w-full'
																		/>
																	</div>
																)
															)}
														</div>
													</div>
												</div>
											))}
											<div
												data-aos='fade-zoom-in'
												data-aos-duration='1000'
												data-aos-delay='500'
												data-aos-once='true'>
												<Button
													className={
														'bg-white hover:bg-slate-400 text-[#0F172A] w-1/2 md:w-full mt-20 ml-[40px] md:ml-[20px]'
													}>
													Send Your Message!
												</Button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className='right lg:mt-0 mt-32 lg:ml-32'>
								<div
									data-aos='fade-left'
									data-aos-duration='1000'
									data-aos-once='true'
									className='logo flex items-center gap-x-8'>
									<img src={logoContact} alt='' className='' />
									<h2 className='font-generalMd text-3xl lg:text-[42px]'>PT MASRUR</h2>
								</div>
								<div className='mt-24'>
									<h2
										data-aos='fade-left'
										data-aos-duration='1000'
										data-aos-delay='220'
										data-aos-once='true'
										className='text-lg'>
										Head Office
									</h2>
									<p
										data-aos='fade-left'
										data-aos-duration='1000'
										data-aos-delay='230'
										data-aos-once='true'
										className='text-[#717786] max-w-[522px]'>
										Jln.Sekumpul Mahabbah 3 No.50 D, MARTAPURA,
										KAB.BANJAR,KALIMANTAN SELATAN 70619
									</p>
								</div>
								<h2
									data-aos='fade-left'
									data-aos-duration='1000'
									data-aos-delay='240'
									data-aos-once='true'
									className='mt-24'>
									Marketing Executive
								</h2>
								<div className='phone mt-2'>
									<h2
										data-aos='fade-left'
										data-aos-duration='1000'
										data-aos-delay='250'
										data-aos-once='true'>
										Phone:
									</h2>
									<p
										data-aos='fade-left'
										data-aos-duration='1000'
										data-aos-delay='270'
										data-aos-once='true'
										className='text-[#717786]'>
										+62 813 4629 9438 (Mr. Jangkung Wibowo){' '}
									</p>
									<p
										data-aos='fade-left'
										data-aos-duration='1000'
										data-aos-delay='290'
										data-aos-once='true'
										className='text-[#717786]'>
										+62 812 1323 3959 (Mr. Didi Supardi)
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Spacing>
		</div>
	);
};

export default Footer;
