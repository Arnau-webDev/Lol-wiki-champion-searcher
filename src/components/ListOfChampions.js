import React from 'react';
import { ChampionCard } from './ChampionCard';

export const ListOfChampions = ({ champions, filteredChampions }) => {

	return (
		<div className="listOfChampions__container animate__animated animate__fadeIn">
			{filteredChampions.length > 0 ? (
				filteredChampions.map((champion) => <ChampionCard champion={champion}  key={champion.id} />)
			) : (
				champions.map((champion) => <ChampionCard champion={champion}  key={champion.id} />)
			)}
		</div>
	);
};
