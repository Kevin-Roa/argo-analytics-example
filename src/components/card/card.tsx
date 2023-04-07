import { Card as StorybookCard } from '@utd-argo/ux-master-library';
import { SxProps } from '@mui/system';
import {
	CircularProgressbarWithChildren,
	buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

import { Platform, PlatformIcon, Analytic, Metric } from '../../types';

export type CardProps = {
	id?: number;
	title?: string;
	platform?: Platform;
	type?: Analytic;
	value?: number;
	valueType?: 'number' | 'percentage';
	metric?: Metric;
	metricChange?: number;
	metricChangeSign?: 'up' | 'down';
	style?: SxProps;
};

const Card = (props: CardProps) => {
	return (
		<StorybookCard
			titleBar={titleBar(props)}
			style={{
				width: 400,
				height: 400,
				...props.style
			}}
			centerContent
		>
			<CircularProgressbarWithChildren
				value={props.value!}
				circleRatio={0.6}
				strokeWidth={6}
				styles={buildStyles({
					rotation: 1 / 2 + 1 / 5,
					pathTransitionDuration: 0.5,
					pathColor: `${
						props.valueType === 'percentage' ? '#1976d2' : 'transparent'
					}`,
					trailColor: `${props.valueType === 'percentage' ? '' : 'transparent'}`
				})}
			>
				<div style={{ fontFamily: 'Rubik', marginTop: '-30px' }}>
					<p style={{ fontSize: '35px', fontWeight: 'bold', margin: 0 }}>
						{props.value}
						{props.valueType === 'percentage' && '%'}
					</p>
					<p style={{ fontSize: '20px', margin: 10 }}>{props.metric}</p>
				</div>
			</CircularProgressbarWithChildren>
			{changeBar(props)}
		</StorybookCard>
	);
};

const titleBar = (props: CardProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: 8
			}}
		>
			{props.platform && PlatformIcon[props.platform]}
			<p style={{ fontSize: 20, fontWeight: 'bold', margin: 0 }}>
				{props.title}
			</p>
		</div>
	);
};

const changeBar = (props: CardProps) => {
	return (
		<div style={{ marginTop: '-70px' }}>
			<p
				style={{
					fontSize: '18px',
					display: 'inline-flex',
					alignItems: 'center',
					gap: 6
				}}
			>
				<span style={{ display: 'flex', alignItems: 'center' }}>
					{props.metricChangeSign === 'up' ? (
						<ArrowUpward color="info" strokeWidth={4} />
					) : (
						<ArrowDownward color="error" />
					)}
				</span>
				<span>
					{props.metricChange}
					{props.valueType === 'percentage' && '%'}
				</span>
				<span>from</span>
				<span>
					{props.metricChange &&
						props.value &&
						(props.metricChangeSign === 'up'
							? props.value - props.metricChange
							: props.value + props.metricChange)}
					{props.valueType === 'percentage' && '%'}
				</span>
			</p>
		</div>
	);
};

export default Card;
