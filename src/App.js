import React from 'react';
import classes from './App.module.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';


const App = () => {
	return (
		<div className={classes.app_wrapper}>
			<Header/>
			<Nav/>
			<Profile/>
			
		</div>
	)
}





export default App;
