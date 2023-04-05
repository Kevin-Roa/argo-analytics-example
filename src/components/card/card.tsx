import { Card as StorybookCard } from '@utd-argo/ux-master-library';
import { SxProps } from '@mui/system';

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
			<div>
				<p>{props.value}</p>
				<p>{props.valueType}</p>
				<p>{props.metric}</p>
				<p>{props.metricChangeSign}</p>
				<p>{props.metricChange}</p>
			</div>
		</StorybookCard>
	);
};

export default Card;
