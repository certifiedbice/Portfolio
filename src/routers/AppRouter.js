import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Portfolio from '../pages/portfolio/Portfolio';
import Resume from '../pages/resume/Resume';
import Services from '../pages/services/Services';
import NotFound from '../pages/notfound/NotFound';
export default class AppRouter extends Component{
	render(){
		return(
			<Switch>
				<Route exact path='/' component={Landing}/>
				<Route exact path='/home' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/contact' component={Contact}/>
				<Route exact path='/portfolio' component={Portfolio}/>
				<Route exact path='/resume' component={Resume}/>
				<Route exact path='/services' component={Services}/>
				<Route component={NotFound}/>
			</Switch>
		);
	}
}