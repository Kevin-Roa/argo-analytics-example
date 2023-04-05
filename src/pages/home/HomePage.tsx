import { useState } from 'react';
import {
	Header,
	LeftNavigation,
	Tab,
	FilterChip,
	Dropdown
} from '@utd-argo/ux-master-library';
import CardLayout from '../../components/cardLayout/CardLayout';
import { navItems } from './data';
import { Platform } from '../../types';

const Home = () => {
	const navOnClick = (label: Platform) => {
		setPlatformFilters(label);
	};

	const [platformFilters, setPlatformFilters] = useState<Platform>('all');

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
					<LeftNavigation listItems={navItems} />
				</div>
				<div style={{ width: '100%' }}>
					<div
						style={{
							width: '100%',
							backgroundColor: 'white',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						<Tab labels={filterTabs} />
						<div style={{ display: 'inline-flex', gap: 20, marginRight: 20 }}>
							<FilterChip value="Positive" />
							<FilterChip value="Negative" />
							<Dropdown
								label="Filters"
								items={['Positive', 'Negative']}
								size="small"
							/>
						</div>
					</div>
					<CardLayout platformFilters={platformFilters} />
				</div>
			</div>
		</div>
	);
};

export default Home;
