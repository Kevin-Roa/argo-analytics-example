import { useState } from 'react';
import {
	Header,
	LeftNavigation,
	Tab,
	FilterChip,
	Dropdown,
	Button,
	Menu
} from '@utd-argo/ux-master-library';
import CardLayout from '../../components/cardLayout/CardLayout';
import { navItems } from './data';
import { Platform, Analytic, Analytics, Metrics } from '../../types';
import { FilterList } from '@mui/icons-material';

const Home = () => {
	const [platformFilter, setPlatformFilter] = useState<Platform>('all');
	const [analyticFilter, setAnalyticFilter] = useState<Analytic[]>([]);
	const [filterToggle, setFilterToggle] = useState(false);

	const navOnClick = (idx: number) => {
		const label = navItems[idx].label?.toLocaleLowerCase() as Platform;
		setPlatformFilter(label ? label : 'all');
	};

	const filterOnClick = () => {
		setFilterToggle(!filterToggle);
	};

	// Need to update tab component to have onClick prop
	const filterTabs = [
		'All',
		'Engagement',
		'Impressions',
		'Performance',
		'Growth',
		'Reach'
	];

	return (
		<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<div>
				<Header title="Socialytico!" variant="global" />
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexGrow: 1,
					backgroundColor: '#F5F5F5'
				}}
			>
				<div style={{ backgroundColor: 'white' }}>
					<LeftNavigation listItems={navItems} onChange={navOnClick} />
				</div>
				<div style={{ width: '100%' }}>
					<div
						style={{
							width: '100%',
							height: '64px',
							padding: '0 28px',
							backgroundColor: 'rgb(167 200 233)',
							display: 'flex',
							alignItems: 'center',
							gap: '10px'
						}}
					>
						<Button
							label="Filters"
							startIcon={<FilterList />}
							variant="primary"
							onClick={filterOnClick}
						/>
						{/* <Menu options={[...Analytics]} open={filterToggle} /> */}
						{Metrics.map((metric) => (
							<FilterChip value={metric.toUpperCase()} />
						))}
					</div>
					<CardLayout platformFilter={platformFilter} />
				</div>
			</div>
		</div>
	);
};

export default Home;
