import React,{Component} from 'react';
import Context from '../../masterProvider';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './Landing.css';
export default class Landing extends Component{
	static contextType=Context;
	componentDidMount(){
		let cookie=this.context.checkCookie('landingInfoCookie');
		// let currentCookie;
		let landingInfo=this.context.randomLandingInfo();
		// Check for cookie.
		if(cookie){
			// console.log('Cookie Found');
			// console.log(`Cookie = ${cookie[1]}`);
			// Set the current cookie in state, in the form of an array for easier processing.
			// Variable declaration neccessary to prevent state/context race condition while setting state.
			let currentCookie=this.context.setCurrentCookieInState(cookie[1].split('='));
			// console.log(`(this.state.currentCookie=) currentCookie = ${currentCookie}`);
			// Get a random set of landingInfo.
			landingInfo=this.context.randomLandingInfo();
			// console.log(`landingInfo = `,landingInfo);
			// Check if the random landingInfo.image matches the currentCookie.
			if(landingInfo.image===currentCookie[1]){
				// console.log('Match');
				while(landingInfo.image===currentCookie[1]){
					// Select new random landingInfo.
					landingInfo=this.context.randomLandingInfo();
					// console.log(`New landingInfo = `,landingInfo);
				}
			}
		}
		// else{
		// 	console.log('Cookie Not Found');
		// }
		// Set new cookie in browser.
		let cookieSet=this.context.setCookieInBrowser('landingInfoCookie',landingInfo.image);
		// console.log(`cookieSet = ${cookieSet}`);

		// Handle change to the home screen.
		const forwardToHome=()=>{
			this.props.history.push('/home');
		}
		const body=document.querySelector('body');
		body.addEventListener('click',function(){forwardToHome();},false);
	}
	render(){
		let image;
		let text;
		// Account for render-check for null value of this.context.landingImage & this.context.landingText.
		if(this.context.landingImage!==null&&this.context.landingText!==null){
			image=require(`../../images/ui/${this.context.landingImage}`);
			text=this.context.landingText;
		}
		return(
			<>
				<Background/>
				<div id='landing-container'>
					<div id='portrait-overlay'>
						<img src={image} id='portrait-img' alt={text}/>
					</div>
					<div id='landing-message'>{text}</div>
					<div id='proceed-message'>Click or tap somewhere to continue.<br/>Or refresh for a different flavor.</div>
				</div>
				<Fade location={this.props.location.pathname}/>
			</>
		);
	}
}