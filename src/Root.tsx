import { Composition } from 'remotion';
import { MyComposition } from './Composition';
import './style.css';
import { Logo } from './Logo';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={19160}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Thumbnail"
				component={Logo}
				durationInFrames={1}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
