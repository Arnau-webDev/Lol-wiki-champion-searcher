import React from 'react'

const ChampionInfoDesktop = ({ championName, activeChampion }) => {

    const handleRevealSpellInfo = (e) => {
        const { target } = e;
        console.log(window.innerWidth);

        const activeSpellImage = document.querySelector(".first");
        activeSpellImage && activeSpellImage.classList.remove("active");

        const allSpellDivs = document.querySelectorAll(".spell");
        allSpellDivs.forEach((spellDiv) => {
            spellDiv.style.display = "none";
        });

        const spellToShow = document.querySelector(`.${target.id}`);

        if (window.innerWidth > "900") {
            if (spellToShow !== null) spellToShow.style.display = "block";
        }
    }

    return (
        <>
            <h3>{championName} Spells</h3>

            <div className="championInfoScreen__infoContainer__spellDiv">
                {activeChampion &&
                    activeChampion.spells.map((spell, spellIndex) => {
                        if (spellIndex === 0) {
                            return (
                                <div key={spell.id} className="first active">
                                    <img onMouseMove={handleRevealSpellInfo} id={spell.id} src={`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${spell.id}.png`} alt={spell.name} />
                                </div>
                            )
                        }
                        return (
                            <div key={spell.id}>
                                <img onMouseMove={handleRevealSpellInfo} id={spell.id} src={`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${spell.id}.png`} alt={spell.name} />
                            </div>
                        )
                    })
                }
            </div>

            <div>
                {activeChampion &&
                    activeChampion.spells.map((spell, spellIndex) => {
                        if (spellIndex === 0) {
                            return (
                                <div key={spell.id} className={`spell firstSpell ${spell.id} animate__animated animate__fadeIn`} >
                                    <h2>{spell.name.toUpperCase()}</h2>
                                    <p>{spell.description}</p>
                                </div>
                            )
                        }
                        return (
                            <div key={spell.id} className={`spell ${spell.id} animate__animated animate__fadeIn`} style={{ display: "none" }}>
                                <h2>{spell.name.toUpperCase()}</h2>
                                <p>{spell.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChampionInfoDesktop;