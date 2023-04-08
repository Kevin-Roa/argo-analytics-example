// import { IJsonModel, Layout, Model, TabNode } from 'flexlayout-react';
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import initialCards from './data';
import { Platform, Metric } from '../../types';
import './CardLayout.css';

export type CardLayoutProps = {
	platformFilter?: Platform;
	typeFilters?: Metric[];
};

const CardLayout = ({ platformFilter, typeFilters }: CardLayoutProps) => {
	const [filteredCards, setFilteredCards] = useState(initialCards);

	const filterCards = () => {
		const filteredCards = initialCards.filter((card) => {
			let ret = true;
			if (platformFilter && card.platform) {
				if (['all', 'home'].includes(platformFilter)) {
					ret = ret && true;
				} else {
					ret = ret && platformFilter.includes(card.platform);
				}
			}
			if (typeFilters && card.type) {
				if (typeFilters.length === 0) {
					ret = ret && true;
				} else {
					ret = ret && typeFilters.includes(card.metric!);
				}
			}
			return ret;
		});
		setFilteredCards(filteredCards);
	};

	useEffect(() => {
		filterCards();
	}, [platformFilter, typeFilters]);

	return (
		<div className="cardGrid">
			{filteredCards.map((card) => (
				<div key={card.id}>
					<Card {...card} />
				</div>
			))}
		</div>
	);
};

export default CardLayout;
