import { CardProps } from '../card/Card';
import { Platform, Platforms } from '../../types';

const generateCard = (data: CardProps) => {
	const newCard = {
		id: Math.floor(Math.random() * 10000),
		title: data.title,
		platform: data.platform,
		type: data.type,
		value:
			data.valueType === 'number'
				? Math.floor(Math.random() * 18000) + 2000
				: Math.floor(Math.random() * 90) + 10,
		valueType: data.valueType,
		metric: data.metric,
		metricChange:
			data.valueType === 'number'
				? Math.floor(Math.random() * 2000)
				: Math.floor(Math.random() * 10),
		metricChangeSign: Math.random() > 0.5 ? 'up' : 'down'
	} as CardProps;

	return newCard;
};

const CardTemplates = [
	{
		title: 'Views',
		type: 'performance',
		valueType: 'number',
		metric: 'views'
	},
	{
		title: 'Impressions',
		type: 'impressions',
		valueType: 'number',
		metric: 'unique users'
	},
	{
		title: 'Engagement Rate',
		type: 'engagement',
		valueType: 'percentage',
		metric: 'user engagement'
	},
	{
		title: 'Likes',
		type: 'engagement',
		valueType: 'number',
		metric: 'likes'
	},
	{
		title: 'Like to Dislike Ratio',
		type: 'performance',
		valueType: 'percentage',
		metric: 'likes'
	},
	{
		title: 'Comments',
		type: 'engagement',
		valueType: 'number',
		metric: 'comments'
	},
	{
		title: 'Shares',
		type: 'engagement',
		valueType: 'number',
		metric: 'shares'
	},
	{
		title: 'Watch Time',
		type: 'performance',
		valueType: 'number',
		metric: 'minutes'
	},
	{
		title: 'Growth',
		type: 'growth',
		valueType: 'percentage',
		metric: 'growth'
	},
	{
		title: 'New Users',
		type: 'reach',
		valueType: 'percentage',
		metric: 'new users'
	}
] as CardProps[];

const cards = [] as CardProps[];
for (const tp of CardTemplates) {
	for (const pf of Platforms) {
		if (pf === 'all') continue;
		cards.push(generateCard({ ...tp, platform: pf }));
	}
}

export default cards as CardProps[];
