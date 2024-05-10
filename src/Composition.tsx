import { Sequence, staticFile, Audio, OffthreadVideo, useCurrentFrame, interpolate, Img } from 'remotion';
import { PosTitle } from './Title';

const cjLong = staticFile(`/cj-long.mp3`);
const intelex2 = staticFile(`/intelex2.mp4`);
const intelex1 = staticFile(`/intelex1.mp4`);
const fg = staticFile(`/fg.wav`);
const lostInShadows1 = staticFile(`/lost-in-shadows-1.mp3`);
const lostInShadows2 = staticFile(`/lost-in-shadows-2.mp3`);
const whisperOfTheShadows = staticFile(`/whisper-of-the-shadows.mp3`);
const cjShort = staticFile(`/cj-short.mp3`);
const sniffing = staticFile(`/sniffing.jpeg`);
const github = staticFile(`/github.jpeg`);
const staticVid = staticFile(`/static.mp4`);
const deadlink = staticFile(`/deadlink.png`);
const deepwebsize = staticFile(`/deepwebsize.png`);
const linklens = staticFile(`/linklens.png`);

const links = {
  github: "https://github.com/Kontores/IntelExchange",
  site: "http://intelex7ny6coqno.onion",
  chanLink: "http://enxx3byspwsdo446jujc52ucy2pf5urdbhqw3kbsfhlfjwmbpj5smdad.onion"
}

export const MyComposition: React.FC = () => {
	const frame = useCurrentFrame();
	const staticOpacity = interpolate(frame, [4040, 4060], [0, 1]);
	const chanOpacity = interpolate(frame, [5330, 5350, 5640, 5660], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const sniffOpacity = interpolate(frame, [6380, 6400, 6510, 6530], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const linklensOpacity = interpolate(frame, [7020, 7040, 7200, 7220], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const intelExOpacity = interpolate(frame, [7260, 7280, 7550, 7570], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const deadlinkOpacity = interpolate(frame, [8640, 8660, 8790, 8810], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const deepwebSizeOpacity = interpolate(frame, [9570, 9590, 9830, 9850], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const githubOpacity = interpolate(frame, [15090, 15110, 15580, 15600], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});
	const githubTranslateY = interpolate(frame, [15090, 15600], [0, 2000], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	})
	
	return (
		<Sequence durationInFrames={19160}>
			<Sequence from={0} durationInFrames={16050}>
				<Audio src={fg} />
				<Sequence from={0} durationInFrames={5940}>
					<OffthreadVideo src={intelex2} />
				</Sequence>
				<Sequence from={0} durationInFrames={3600}>
					<Audio volume={0.1} src={cjLong} />
				</Sequence>
				<Sequence from={3600} durationInFrames={3540}>
					<Audio volume={0.1} src={cjShort} />
				</Sequence>
				<Sequence from={4000} durationInFrames={200}>
					<OffthreadVideo src={staticVid} style={{ opacity: staticOpacity }} />
				</Sequence>
				<Sequence from={5330} durationInFrames={330}>
					<div className="w-full h-full grid place-items-center text-center">
						<PosTitle bgColor='black' titleText={links.chanLink} titleColor='lightblue' style={{ opacity: chanOpacity, width: 'fit-content', wordBreak: 'break-word', maxWidth: '88%' }} />
					</div>
				</Sequence>
				<Sequence from={5940} durationInFrames={10050}>
					<OffthreadVideo src={intelex1} startFrom={600} muted />
				</Sequence>
				<Sequence from={6380} durationInFrames={150}>
					<div className="w-full h-full grid place-items-center text-center">
						<Img src={sniffing} style={{ opacity: sniffOpacity, width: '1488px', height: '525px' }} />
					</div>
				</Sequence>
				<Sequence from={7020} durationInFrames={200}>
					<div className="w-full h-full grid place-items-center text-center">
						<Img src={linklens} style={{ opacity: linklensOpacity, transform: 'scale(2)' }} />
					</div>
				</Sequence>
				<Sequence from={7140} durationInFrames={3600}>
					<Audio volume={0.05} src={lostInShadows1} />
				</Sequence>
				<Sequence from={7260} durationInFrames={310}>
					<div className="w-full h-full grid place-items-center text-center">
						<PosTitle bgColor='black' titleText={links.site} titleColor='lightblue' style={{ opacity: intelExOpacity, width: 'fit-content', wordBreak: 'break-word', maxWidth: '88%' }} />
					</div>
				</Sequence>
				<Sequence from={8640} durationInFrames={170}>
					<div className="w-full h-full grid place-items-center text-center">
						<Img src={deadlink} style={{ opacity: deadlinkOpacity }} />
					</div>
				</Sequence>
				<Sequence from={9570} durationInFrames={280}>
					<div className="w-full h-full grid place-items-center text-center">
						<Img src={deepwebsize} style={{ opacity: deepwebSizeOpacity }} />
					</div>
				</Sequence>
				<Sequence from={10740} durationInFrames={3600}>
					<Audio volume={0.1} src={lostInShadows2} />
				</Sequence>
				<Sequence from={14340} durationInFrames={1650}>
					<Audio volume={0.1} src={lostInShadows2} startFrom={1950} />
				</Sequence>
				<Sequence from={15090} durationInFrames={510}>
					<Img src={github} style={{ transform: `translateY(-${githubTranslateY}px)`, opacity: githubOpacity, width: '1920px', height: '3030px' }} />
				</Sequence>
			</Sequence>
			<Sequence from={15990} durationInFrames={3170}>
				<Sequence from={0} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={10050} endAt={10350} muted />
				</Sequence>
				<Sequence from={300} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={11250} endAt={11550} muted />
				</Sequence>
				<Sequence from={600} durationInFrames={400}>
					<OffthreadVideo src={intelex1} startFrom={13300} endAt={13700} muted />
				</Sequence>
				<Sequence from={1000} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={13950} endAt={14250} muted />
				</Sequence>
				<Sequence from={1300} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={15150} endAt={15450} muted />
				</Sequence>
				<Sequence from={1600} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={15660} endAt={15960} muted />
				</Sequence>
				<Sequence from={1900} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={17400} endAt={17700} muted />
				</Sequence>
				<Sequence from={2200} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={25500} endAt={25800} muted />
				</Sequence>
				<Sequence from={2500} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={26100} endAt={26400} muted />
				</Sequence>
				<Sequence from={2800} durationInFrames={300}>
					<OffthreadVideo src={intelex1} startFrom={28950} endAt={29250} muted />
				</Sequence>
				<Audio src={whisperOfTheShadows} volume={0.6} endAt={3170} />
			</Sequence>
		</Sequence>
	);
};
