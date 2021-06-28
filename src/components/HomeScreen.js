import React, { useState } from 'react';
import { useFetchAll } from '../hooks/useFetchAll';
import { ListOfChampions } from './ListOfChampions';
import LoadingSpinner from './LoadingSpinner';
import { MainPageHeader } from './MainPageHeader';

export const HomeScreen = () => {

    const ENDPOINT = 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json';

    const { champions, loading } = useFetchAll(ENDPOINT);
    const [filteredChampions, setFilteredChampions] = useState([]);
    const championsArr = Object.values(champions);

    return (
        <>
            <MainPageHeader champions={championsArr} setFilteredChampions={setFilteredChampions} />

            {loading && <LoadingSpinner />}
            <div className="filler"></div>
            <ListOfChampions champions={championsArr} filteredChampions={filteredChampions}/>   
        </>
    )
}
