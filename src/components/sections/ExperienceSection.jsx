/* eslint-disable react/jsx-key */
import React from 'react';
import { experienceSection } from '../../constants/content/experienceContent';

const ExperienceSection = () => {
	return (
		<div className='mt-[100px] border-t-[1px] pt-16'>
			<div className='wrapper '>
				<h1 className='text-center font-InterSb text-4xl'>
					Our Experience in The World of Mining
				</h1>
				<h3 className='text-center text-xl'>
					We have many experience in the world of mining{' '}
				</h3>

        <div className="content-wrapper">
          {experienceSection.map((data) => (
            <div>
              <div className="left">
                
              </div>
              <div className="right"></div>
            </div>
          ))}
        </div>
			</div>
		</div>
	);
};

export default ExperienceSection;
