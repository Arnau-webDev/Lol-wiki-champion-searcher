import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { ListOfChampions } from '../components/ListOfChampions';
import { ChampionInfo } from '../components/ChampionInfo';

export const MainRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={ListOfChampions} />
					<Route path="/single-champion" component={ChampionInfo} />
					<Route path="/single-champion/:championId" component={ChampionInfo} />

					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};
