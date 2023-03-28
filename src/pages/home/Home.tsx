import './Home.css';

import { Header, Card, LeftNavigation } from '@utd-argo/ux-master-library';
import {
	Home as HomeIcon,
	Twitter,
	Instagram,
	YouTube,
	Add
} from '@mui/icons-material';

const Home = () => {
	const navItems = [
		{ label: 'Home', icon: <HomeIcon />, onClick: () => {} },
		{ label: 'Twitter', icon: <Twitter />, onClick: () => {} },
		{ label: 'Instagram', icon: <Instagram />, onClick: () => {} },
		{ label: 'Youtube', icon: <YouTube />, onClick: () => {} },
		{ icon: <Add />, onClick: () => {} }
	];

	// Need to update tab component to have onClick prop
	const filterTabs = [
		'All',
		'Engagement',
		'Impressions',
		'Performance',
		'Growth',
		'Reach'
	];

	// Temporary list of cards, will update once a component is made for them
	const cards = [1, 2, 3, 4, 5, 6];

	return (
		<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Header title="ANALYTICS" variant="global" />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexGrow: 1
				}}
			>
				<div>
					<LeftNavigation listItems={navItems} />
				</div>
				<div>
					<Header
						variant="tab"
						backgroundColor="#FFFFFF"
						buttonLabel="Filters"
						tabs={filterTabs}
					/>
					<div className="cardGrid">
						{cards.map((card) => {
							return (
								<Card style={{ width: 400, height: 400 }} title={'' + card} />
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
