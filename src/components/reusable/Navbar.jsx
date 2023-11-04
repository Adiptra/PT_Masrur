/* eslint-disable react/prop-types */
import { useState } from 'react';
import { logoContact } from '../../images';
import { Container, Spacing } from '../../layouts';
import { FaBars } from 'react-icons/fa';
import Button from './Button';

const NavMobile = ({ active }) => {
	return (
		<ul
			className={`w-full max-w-full lg:hidden flex justify-center items-center absolute transition duration-500 -z-10 h-[110vh] -translate-y-[800px] mt-0 ${
				active == '' ? '-translate-y-0 bg-black opacity-90' : ''
			} py-5`}>
			<Spacing>
				<Container className='flex flex-col items-center justify-between h-[55vh] text-white'>
					<li>
						<a href='#home' className='hover:text-white'>
							Home
						</a>
					</li>
					<li>
						<a href='#benefit' className='hover:text-white'>
							Benefits
						</a>
					</li>
					<li>
						<a href='#about' className='hover:text-white'>
							About
						</a>
					</li>
					<li>
						<a href='#history' className='hover:text-white'>
							History
						</a>
					</li>
					<li>
						<a href='#experience' className='hover:text-white'>
							Experience
						</a>
					</li>
					<li>
						<a href='#service' className='hover:text-white'>
							Service
						</a>
					</li>

					<li>
						<button>
							<Button className={'bg-[#EB3137] hover:bg-red-600 rounded-md'}>
								Contact Us
							</Button>
						</button>
					</li>
				</Container>
			</Spacing>
		</ul>
	);
};

const Navbar = () => {
	const [isActive, setisActive] = useState(false);

	function navMobileActive() {
		setisActive(!isActive);
	}

	return (
		// ADI HTS MULU ETDAH
		<header className='w-full bg-black opacity-90 fixed top-0 z-50 py-3'>
			<Spacing>
				<Container>
					<nav className='flex items-center w-full justify-between text-gray-200'>
						<div className='logo flex items-center gap-x-4'>
							<img
								src={logoContact}
								alt=''
								className='max-w-[50px] max-h-[50px]'
							/>
							<h2 className='font-generalMd text-lg lg:text-xl'>PT MASRUR</h2>
						</div>
						<ul className='hidden lg:flex items-center gap-[4vw]'>
							<li>
								<a href='#home' className='hover:text-white'>
									Home
								</a>
							</li>
							<li>
								<a href='#about' className='hover:text-white'>
									About
								</a>
							</li>
							<li>
								<a href='#history' className='hover:text-white'>
									History
								</a>
							</li>
							<li>
								<a href='#product' className='hover:text-white'>
									Products
								</a>
							</li>
							<li>
								<a href='#experience' className='hover:text-white'>
									Experience
								</a>
							</li>
							<li>
								<a href='#service' className='hover:text-white'>
									Service
								</a>
							</li>

							<li>
								<button>
									<Button
										className={'bg-[#EB3137] hover:bg-red-600 rounded-md'}>
										Contact Us
									</Button>
								</button>
							</li>
						</ul>

						{/* mobile */}

						<FaBars
							className='cursor-pointer block lg:hidden'
							onClick={navMobileActive}
						/>
					</nav>
				</Container>
			</Spacing>
			<NavMobile active={isActive} />
		</header>
	);
};

export default Navbar;
