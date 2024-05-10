import React from 'react';
import { staticFile, AbsoluteFill, Img } from 'remotion';

const ie = staticFile(`/intelexlogo.png`);
const tor = staticFile(`/torlogo.png`);
const fire = staticFile(`/fire.png`);

export const Logo: React.FC = () => {
	return (
		<AbsoluteFill>
			<Img src={ie} className='absolute z-30' style={{ transform: 'scale(5)', top: '40%', left: '40%' }} />
			<Img src={tor} className='absolute z-20' style={{ transform: 'scale(3)', left: '37.5%', top: '20%' }} />
			<Img src={fire} className='absolute z-20' style={{ transform: 'scale(4)', left: '37.5%', top: '20%' }} />
			<Img src={fire} className='absolute z-20' style={{ transform: 'scale(4)', left: '37.5%', top: '80%' }} />
		</AbsoluteFill>
	);
};
