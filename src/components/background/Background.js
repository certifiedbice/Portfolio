import React,{Component} from 'react';
import Context from '../../masterProvider';
export default class Background extends Component{
static contextType=Context;
	static contextType=Context;
	componentDidMount(){
		// Start background movement.
		this.context.bgInt(true);
	}
	componentWillUnmount(){
		// End background movement.
		this.context.bgInt(false);		
	}
	render(){
		return(
			<div id='background-image-container'>
				<div id='background-image'></div>
			</div>
		);
	}
}