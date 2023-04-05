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

export type Platform =
	| 'facebook'
	| 'twitter'
	| 'instagram'
	| 'linkedin'
	| 'youtube'
	| 'reddit'
	| 'tiktok'
	| 'all';

export const PlatformIcon = {
	facebook: <Facebook />,
	twitter: <Twitter />,
	instagram: <Instagram />,
	linkedin: <LinkedIn />,
	youtube: <YouTube />,
	reddit: <Reddit />,
	tiktok: <SvgIcon component={TikTok} viewBox="0 0 512 512" />
} as { [key in Platform]: React.ReactNode };

export type Analytic =
	| 'engagement'
	| 'impressions'
	| 'performance'
	| 'growth'
	| 'reach'
	| 'all';

export type Metric =
	| 'engagement'
	| 'impressions'
	| 'views'
	| 'growth'
	| 'reach'
	| 'all';
