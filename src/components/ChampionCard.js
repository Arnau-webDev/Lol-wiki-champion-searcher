import React from 'react';
import { Link } from 'react-router-dom';

export const ChampionCard = ({champion}) => {
    console.log(champion.id)
    return (
        <div>
            <h3>{champion.name}</h3>
            <h4>{champion.title}</h4>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id.trim()}_0.jpg`} alt="champion splashart"/>
            <p>{champion.blurb}</p>
			<Link to={`/single-champion/${champion.id}`}>More Info</Link>
        </div>
    )
}
