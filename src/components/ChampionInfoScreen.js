import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export const ChampionInfoScreen = () => {

	const history = useHistory();
	const [activeChampion, setActiveChampion] = useState(null)
	const [activeSkin, setActiveSkin] = useState("");
	const [counter, setCounter] = useState(0);
	const [skinId, setSkinId] = useState(0);
	const [loading, setLoading] = useState(true);

	const desglosedUrl = history.location.pathname.split("/");
	const championName = desglosedUrl[desglosedUrl.length - 1];

	const handleSkinChange = () => {
		if (counter < activeChampion.skins.length - 1) {
			setCounter(counter + 1);
		} else {
			setCounter(0);
		}

		activeChampion.skins.length > counter + 1 ? setSkinId(activeChampion.skins[counter + 1].num) : setSkinId(activeChampion.skins[0].num);
	}

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
			spellToShow.style.display = "block";
		}
	}

	useEffect(() => {
		fetch(`https://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/champion/${championName}.json`)
			.then((res) => res.json())
			.then((data) => {
				setActiveChampion(data.data.[championName]);
				setActiveSkin(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skinId}.jpg`);
				setLoading(false);
			});
	}, [championName, skinId]);

	if (loading) {
		return <LoadingSpinner />
	}

	return (
		<>
			<div className="championInfoScreen__infoContainer animate__animated animate__fadeIn">
				<div className="championInfoScreen__infoContainer__mainImageContainer">
					<img src={activeSkin} alt={championName} />
				</div>

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

				<div className="championInfoScreen__infoContainer__buttonDiv">
					<button onClick={handleSkinChange}><i className="fas fa-mask"></i> See Next Skin</button>
					<button onClick={() => history.push("/")}><i className="fas fa-arrow-left"></i> Go Back</button>
				</div>
			</div>
		</>
	);
};
