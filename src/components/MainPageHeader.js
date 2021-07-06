import React from 'react';
import filterChampionsByClass from '../helpers/filterChampionsByClass';
import filterChampionsByStats from '../helpers/filterChampionsByStats';

export const MainPageHeader = ({ champions, setFilteredChampions }) => {

    const handleClassFilter = (e) => {
        filterChampionsByClass(e, champions, setFilteredChampions);
    }

    const handleStatsFilter = (e) => {
        filterChampionsByStats(e, champions, setFilteredChampions);
    }

    return (
        <div id="mainPageHeader" className="mainPageHeader__container">
            <div className="mainPageHeader__title animate__animated animate__fadeInLeft">
                <h1> <span className="small">FIND YOUR</span> <br /> <span className="big">CHAMPION</span></h1>
            </div>
            <div className="mainPageHeader__filters animate__animated animate__fadeInRight">
                <ul onClick={handleClassFilter}>
                    <li>All</li>
                    <li>Assassins</li>
                    <li>Fighters</li>
                    <li>Mages</li>
                    <li>Marksman</li>
                    <li>Supports</li>
                    <li>Tanks</li>
                </ul>
                <ul onClick={handleStatsFilter}>
                    <li>Most Attack</li>
                    <li>Most Magic</li>
                    <li>Most Defense</li>
                    <li>Most Difficulty</li>
                </ul>
            </div>
        </div>
    )
}
