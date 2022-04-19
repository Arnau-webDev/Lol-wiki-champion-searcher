import React from 'react'

const ChampionInfoMobile = ({ championName, activeChampion }) => {
    return (
        <>
            <h3>{championName} Spells</h3>

            <div className="championInfoScreen__infoContainer__spellDivMobile">
                {activeChampion &&
                    activeChampion.spells.map((spell) => {
                        return (
                            <>
                                <h4 className='headerMobile'>{spell.name.toUpperCase()}</h4>
                                <div className="spellMobile" key={spell.id}>
                                    <div>
                                        <img id={spell.id} src={`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${spell.id}.png`} alt={spell.name} />
                                    </div>
                                    <div>
                                        <p>{spell.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChampionInfoMobile;