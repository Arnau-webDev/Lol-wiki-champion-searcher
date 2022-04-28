import React from 'react';
import { Link } from 'react-router-dom';

export const ChampionCard = ({ champion }) => {
    const { attack, defense, magic, difficulty } = champion.info;
    return (
        <div className="championCard__card">
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id.trim()}_0.jpg`} alt="champion splashart" />
            <div className="championCard__champInfo">
                <h3>{champion.name}</h3>
                <small>{champion.title}</small>
            </div>
            <p className="championCard__blurb">{champion.blurb}</p>
            <div className="championCard__statsBar">
                <p>Attack Damage</p>
                <div className="flexprueba">
                    <div className="championCard__statsBar-innerBarContainer championCard__statsBar-innerBarContainer--outter-1">
                        <div className="championCard__statsBar-innerBar championCard__statsBar-innerBar--inner-1" style={{ width: `${attack * 10}%` }} > <span>{attack}</span> </div>
                    </div>
                </div>
            </div>
            <div className="championCard__statsBar">
                <p>Defense</p>
                <div className="flexprueba">
                    <div className="championCard__statsBar-innerBarContainer championCard__statsBar-innerBarContainer--outter-2">
                        <div className="championCard__statsBar-innerBar championCard__statsBar-innerBar--inner-2" style={{ width: `${defense * 10}%` }} > <span>{defense}</span> </div>
                    </div>
                </div>
            </div>
            <div className="championCard__statsBar">
                <p>Magic Damage</p>
                <div className="flexprueba">
                    <div className="championCard__statsBar-innerBarContainer championCard__statsBar-innerBarContainer--outter-3">
                        <div className="championCard__statsBar-innerBar championCard__statsBar-innerBar--inner-3" style={{ width: `${magic * 10}%` }} > <span>{magic}</span> </div>
                    </div>
                </div>
            </div>
            <div className="championCard__statsBar">
                <p>Difficulty</p>
                <div className="flexprueba">
                    <div className="championCard__statsBar-innerBarContainer championCard__statsBar-innerBarContainer--outter-4">
                        <div className="championCard__statsBar-innerBar championCard__statsBar-innerBar--inner-4" style={{ width: `${difficulty * 10}%` }} > <span>{difficulty}</span> </div>
                    </div>
                </div>
            </div>

            <div className="championCard__buttonContainer">
                <Link to={`/single-champion/${champion.id}`}><button>More Info</button></Link>
            </div>
        </div>
    )
}
