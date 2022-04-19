import React from 'react';
import { useState } from 'react';
import filterChampionsByClass from '../helpers/filterChampionsByClass';
import filterChampionsByStats from '../helpers/filterChampionsByStats';

export const MainPageHeader = ({ champions, setFilteredChampions, setLoading }) => {

    const [activeFilter, setActiveFilter] = useState("ALL");

    const handleClassFilter = (e) => {
        filterChampionsByClass(e, champions, setFilteredChampions, setActiveFilter);
        setLoading(true);
        setTimeout(() => { setLoading(false); }, 300);
    }

    const handleStatsFilter = (e) => {
        filterChampionsByStats(e, champions, setFilteredChampions);
        setLoading(true);
        setTimeout(() => { setLoading(false); }, 300);
    }

    return (
        <div id="mainPageHeader" className="mainPageHeader__container">
            <div className="mainPageHeader__title animate__animated animate__fadeInLeft">
                <h1> <span className="small">FIND YOUR</span> <br /> <span className="big">CHAMPION</span></h1>
            </div>
            <div className="mainPageHeader__filters animate__animated animate__fadeInRight">
                <ul>
                    <li onClick={handleClassFilter}>All</li>
                    <li onClick={handleClassFilter}>Assassins</li>
                    <li onClick={handleClassFilter}>Fighters</li>
                    <li onClick={handleClassFilter}>Mages</li>
                    <li onClick={handleClassFilter}>Marksman</li>
                    <li onClick={handleClassFilter}>Supports</li>
                    <li onClick={handleClassFilter}>Tanks</li>
                </ul>
                <ul>
                    <li onClick={handleStatsFilter}>Most Attack</li>
                    <li onClick={handleStatsFilter}>Most Magic</li>
                    <li onClick={handleStatsFilter}>Most Defense</li>
                    <li onClick={handleStatsFilter}>Most Difficulty</li>
                </ul>
            </div>
        </div>
    )
}
