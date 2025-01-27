import React,{Component} from 'react';
import './Header.css';
export default class Header extends Component{
	render(){
		return(
			<header id='site-header'>
				<div id='site-info'>
        			<h1 id='site-title'>Portfolio of Bice</h1>
        			<div id='site-description'>My various projects in all their variousness.</div>
					<nav>
						<ul id='primary-menu'>
							<li><a href='/home'>Home</a></li>
							<li><a href='/about'>About</a></li>
							<li><a href='/contact'>Contact</a></li>
							<li><a href='/portfolio'>Portfolio</a></li>
							<li><a href='/resume'>Resume</a></li>
							<li><a href='/services'>Services</a></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}