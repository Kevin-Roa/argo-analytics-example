import { PlatformIcon } from '../../types';
import { Home as HomeIcon, Add } from '@mui/icons-material';

export const navItems = [
	{ label: 'Home', icon: <HomeIcon /> },
	{
		label: 'Youtube',
		icon: PlatformIcon.youtube
	},
	{
		label: 'Twitter',
		icon: PlatformIcon.twitter
	},
	{
		label: 'Facebook',
		icon: PlatformIcon.facebook
	},
	{
		label: 'Instagram',
		icon: PlatformIcon.instagram
	},
	{
		label: 'TikTok',
		icon: PlatformIcon.tiktok
	},
	{
		label: 'Reddit',
		icon: PlatformIcon.reddit
	},
	{
		label: 'LinkedIn',
		icon: PlatformIcon.linkedin
	},
	{ icon: <Add /> }
];
