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
import { Platform, Analytics, Analytic } from '../../types';
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

	const analyticOnClick = (analytic: Analytic) => {
		if (analyticFilter.includes(analytic)) {
			const newAnalyticFilter = analyticFilter.filter((m) => m !== analytic);
			setAnalyticFilter(newAnalyticFilter);
		} else {
			setAnalyticFilter([...analyticFilter, analytic]);
		}
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
				<Header title="Socialyze!" variant="global" />
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
				<div style={{ width: 'calc(100% - 64px)' }}>
					<div
						style={{
							minHeight: '64px',
							padding: '0 28px',
							backgroundColor: 'rgb(167 200 233)',
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							fontFamily: 'Poppins',
							overflow: 'auto',
							whiteSpace: 'nowrap'
						}}
					>
						<Button
							label="Filters"
							startIcon={<FilterList />}
							variant="primary"
							onClick={filterOnClick}
						/>
						{/* <Menu options={[...Analytics]} open={filterToggle} /> */}
						{Analytics.map((analytic) => (
							<FilterChip
								value={analytic.toUpperCase()}
								onClick={() => analyticOnClick(analytic)}
							/>
						))}
					</div>
					{analyticFilter}
					<CardLayout
						platformFilter={platformFilter}
						typeFilters={analyticFilter}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
