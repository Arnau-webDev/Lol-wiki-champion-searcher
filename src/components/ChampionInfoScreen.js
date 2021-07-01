import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const ChampionInfoScreen = () => {

	const history = useHistory();
	const [activeChampion, setActiveChampion] = useState(null)
	const [activeSkin, setActiveSkin] = useState("");
	const [counter, setCounter] = useState(0);
	const [skinId, setSkinId] = useState(0);

	const desglosedUrl = history.location.pathname.split("/");
	const championName = desglosedUrl[desglosedUrl.length - 1];

	const handleSkinChange = () => {
		console.log("Length skins " + activeChampion.skins.length);
		console.log("Counter before " + counter);
		if (counter < activeChampion.skins.length - 1) {
			console.log("Entro");
			setCounter(counter + 1);
		} else {
			setCounter(0);
		}

		console.log("Counter after " + counter);

		console.log("My id number " + activeChampion.skins[counter].num);
		activeChampion.skins.length > counter + 1 ? setSkinId(activeChampion.skins[counter + 1].num) : setSkinId(activeChampion.skins[0].num);
	}

	useEffect(() => {
		fetch(`https://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/champion/${championName}.json`)
			.then((res) => res.json())
			.then((data) => {
				setActiveChampion(data.data.[championName]);
				setActiveSkin(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skinId}.jpg`);
			});
	}, [championName, skinId]);

	console.log(activeChampion);


	return (
		<>
			<div className="championInfoScreen__infoContainer">
				<div className="championInfoScreen__infoContainer__mainImageContainer">
					<img src={activeSkin} alt={championName} />
				</div>

				<div className="championInfoScreen__infoContainer__spellDiv">
					{activeChampion &&
						activeChampion.spells.map((spell) => {
							return (
								<div key={spell.id}>
									<img src={`https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${spell.id}.png`} alt={spell.name} />
									{/* {spell.description} */}
								</div>
							)
						})
					}
				</div>

				<button onClick={handleSkinChange}>See Next Skin</button>
			</div>
		</>
	);
};
