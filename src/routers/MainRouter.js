import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { ChampionInfoScreen } from '../components/ChampionInfoScreen';
import { HomeScreen } from '../components/HomeScreen';

export const MainRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/single-champion/:championId" component={ChampionInfoScreen} />

					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};
