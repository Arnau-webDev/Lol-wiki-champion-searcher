import React, { useState, useEffect } from 'react';
import { useFetchAll } from '../hooks/useFetchAll';
import { ListOfChampions } from './ListOfChampions';
import LoadingSpinner from './LoadingSpinner';
import { MainPageHeader } from './MainPageHeader';

export const HomeScreen = () => {

    const ENDPOINT = 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/en_US/champion.json';

    const { champions, loading, setLoading } = useFetchAll(ENDPOINT);
    const [filteredChampions, setFilteredChampions] = useState([]);
    const championsArr = Object.values(champions);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const scrollUpEl = document.querySelector(".arrowUp");

        if (scrollPosition > 200) {
            scrollUpEl && scrollUpEl.classList.remove("hidden");
        } else {
            scrollUpEl && scrollUpEl.classList.add("hidden");
        }
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <>
            <MainPageHeader champions={championsArr} setFilteredChampions={setFilteredChampions} setLoading={setLoading} />
            {loading && <LoadingSpinner />}
            <ListOfChampions champions={championsArr} filteredChampions={filteredChampions} />
            <a className="arrowUp hidden" href="#mainPageHeader"><i className="fas fa-long-arrow-alt-up"></i></a>
        </>
    )
}
