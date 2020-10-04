import React,{Component} from 'react';
import Context from '../../masterProvider';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './Landing.css';
export default class Landing extends Component{
	static contextType=Context;
	componentDidMount(){
		// Handle change to the home screen.
		const forwardToHome=()=>{
			this.props.history.push('/home');
		}
		const body=document.querySelector('body');
		body.addEventListener('click',function(){forwardToHome();},false);
	}
	render(){
		return(
			<>
				<Background/>
				<div id='landing-container'>
					<div id='portrait-overlay'></div>
					<div id='landing-message'>Uncompromisingly different</div>
					<div id='proceed-message'>Click or tap somewhere...</div>
				</div>
				<Fade location={this.props.location.pathname}/>
			</>
		);
	}
}