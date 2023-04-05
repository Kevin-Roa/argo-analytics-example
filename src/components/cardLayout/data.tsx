import { CardProps } from '../card/Card';

const generateCard = (data: CardProps) => {
	const newCard = {
		id: Math.floor(Math.random() * 10000),
		title: data.title,
		platform: data.platform,
		type: data.type,
		value:
			data.valueType === 'number'
				? Math.floor(Math.random() * 15000)
				: `${Math.floor(Math.random() * 100)}`,
		valueType: data.valueType,
		metric: data.metric,
		metricChange:
			data.valueType === 'number'
				? Math.floor(Math.random() * 2000)
				: `${Math.floor(Math.random() * 10)}`,
		metricChangeSign: Math.random() > 0.5 ? 'up' : 'down'
	} as CardProps;

	return newCard;
};

export default [
	generateCard({
		title: 'Video Views',
		platform: 'youtube',
		type: 'performance',
		valueType: 'number',
		metric: 'views'
	}),
	generateCard({
		title: 'Post Engagement Rate',
		platform: 'twitter',
		type: 'engagement',
		valueType: 'percentage',
		metric: 'engagement'
	})
] as CardProps[];
