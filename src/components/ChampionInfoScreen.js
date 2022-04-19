import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { useViewport } from '../hooks/useViewport';
import ChampionInfoDesktop from './ChampionInfoDesktop';
import ChampionInfoMobile from './ChampionInfoMobile';

export const ChampionInfoScreen = () => {

	const { width, height } = useViewport();
	const breakpoint = 890;

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
				<div className="championInfoScreen__infoContainer__mainImageContainer exclude">
					<img src={activeSkin} alt={championName} />
				</div>

				{width > breakpoint && height > breakpoint ? (<ChampionInfoDesktop championName={championName} activeChampion={activeChampion} />)
					: (<ChampionInfoMobile championName={championName} activeChampion={activeChampion} />)}

				<div className="championInfoScreen__infoContainer__buttonDiv">
					<button onClick={handleSkinChange}><i className="fas fa-mask"></i> See Next Skin</button>
					<button onClick={() => history.push("/")}><i className="fas fa-arrow-left"></i> Go Back</button>
				</div>
			</div>
		</>
	);
};
