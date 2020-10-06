import React from 'react';
import { useFetchAll } from '../hooks/useFetchAll';
import { ChampionCard } from './ChampionCard';

export const ListOfChampions = () => {
    const ENDPOINT = 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json';

    const { champions } = useFetchAll(ENDPOINT);
    var arrayOfChampions = Object.values(champions)

    console.log(champions);
    console.log(arrayOfChampions)

	return (
		<div>
            {arrayOfChampions ? arrayOfChampions.map((champion) => <ChampionCard champion={champion}  key={champion.id} />) : <p>No hay champions</p>}
		</div>
	);
};
