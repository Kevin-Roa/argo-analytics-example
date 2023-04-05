// import { IJsonModel, Layout, Model, TabNode } from 'flexlayout-react';
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import initialCards from './data';
import { Platform, Analytic } from '../../types';
import './CardLayout.css';

export type CardLayoutProps = {
	platformFilters?: Platform;
	typeFilters?: Analytic[];
};

const CardLayout = ({ platformFilters, typeFilters }: CardLayoutProps) => {
	const [filteredCards, setFilteredCards] = useState(initialCards);

	const filterCards = () => {
		const filteredCards = initialCards.filter((card) => {
			let ret = true;
			if (platformFilters && card.platform) {
				if (platformFilters.includes('all')) {
					ret = ret && true;
				} else {
					ret = ret && platformFilters.includes(card.platform);
				}
			}
			if (typeFilters && card.type) {
				if (typeFilters.includes('all')) {
					ret = ret && true;
				} else {
					ret = ret && typeFilters.includes(card.type);
				}
			}
			return ret;
		});
		setFilteredCards(filteredCards);
	};

	useEffect(() => {
		filterCards();
	}, [platformFilters]);

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
