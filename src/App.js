import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className={classes.app_wrapper}>
				<Header />
				<Nav />
				<div className={classes.app_wrapper_content}>
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	)
}





export default App;
