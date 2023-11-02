import React from 'react';
import { logoContact } from '../../images';
import { Container, Spacing } from '../../layouts';

const Navbar = () => {
	return (
		<Container>
			<div>
				<div>
					<nav className='flex items-center justify-between fixed z-50 w-full px-10 lg:px-28 pt-[10px] text-white bg-opacity-80 flex-wrap'>
						<div className='img flex gap-x-4 items-center '>
							<img src={logoContact} alt='' />
							<h2 className='text-xl font-generalMd'>PT MASRUR</h2>
						</div>
						<ul className='flex gap-x-[30px] flex-col'>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#'>About</a>
							</li>
							<li>
								<a href='#'>History</a>
							</li>
							<li>
								<a href='#'>Service</a>
							</li>
							<li>
								<a href='#'>Experience</a>
							</li>
							<li>
								<a href='#'>Contact Us</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</Container>
	);
};

export default Navbar;
