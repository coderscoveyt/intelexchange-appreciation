import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React, { CSSProperties } from 'react';

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{opacity, color: titleColor}}
			className="text-8xl font-bold bg-black leading-relaxed"
		>
			{' '}
			{titleText}
		</div>
	);
};

export const PosTitle: React.FC<{
	titleText: string;
	titleColor: string;
	bgColor: string;
	style?: CSSProperties
}> = ({titleText, titleColor, bgColor, style}) => {
	return (
		<div
			style={{ color: titleColor, background: bgColor, ...style }}
			className={`text-8xl font-bold leading-relaxed`}
		>
			{' '}
			{titleText}
		</div>
	);
};