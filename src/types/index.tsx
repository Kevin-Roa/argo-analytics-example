import {
	Facebook,
	Twitter,
	Instagram,
	YouTube,
	LinkedIn,
	Reddit
} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { ReactComponent as TikTok } from '../assets/tiktok.svg';

export const Platforms = [
	'facebook',
	'twitter',
	'instagram',
	'linkedin',
	'youtube',
	'reddit',
	'tiktok',
	'all'
] as const;
export type Platform = typeof Platforms[number];

export const PlatformIcon = {
	facebook: <Facebook />,
	twitter: <Twitter />,
	instagram: <Instagram />,
	linkedin: <LinkedIn />,
	youtube: <YouTube />,
	reddit: <Reddit />,
	tiktok: <SvgIcon component={TikTok} viewBox="0 0 512 512" />
} as { [key in Platform]: React.ReactNode };

export const Analytics = [
	'engagement',
	'performance',
	'growth',
	'reach',
	'all'
] as const;
export type Analytic = typeof Analytics[number];

export const Metrics = [
	'views',
	'growth',
	'minutes',
	'unique users',
	'subscribers',
	'followers',
	'comments',
	'likes',
	'shares'
] as const;
export type Metric = typeof Metrics[number];
