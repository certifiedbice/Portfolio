import React,{Component} from 'react';
import Context from '../../masterProvider';
import './NotFound.css';
// export default function (){
export default class NotFound extends Component{
	static contextType=Context;
	componentDidMount(){
		// Start background movement.
		this.context.bgInt(true);
		// Start page fade.
		this.context.pageFade();
		// Handle change to the home screen.
		const forwardToHome=()=>{
			this.props.history.push('/home');
		}
		const body=document.querySelector('body');
		body.addEventListener('click',function(){forwardToHome();},false);
	}
	componentWillUnmount(){
		// End background movement.
		this.context.bgInt(false);		
	}
	render(){
		return(
			<>
			<div id='background-image'></div>
			<div id='not-found-container'>
				<div id='not-found-message'>
					<h2>404 - Not Found</h2>
				</div>
				<div id='back-to-home-message'>Click or tap somewhere...</div>
			</div>
			<div id='page-fade'></div>
			</>
		);
	}
}
