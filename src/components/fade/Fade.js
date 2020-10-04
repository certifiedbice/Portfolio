import React,{Component} from 'react';
import Context from '../../masterProvider';
export default class Fade extends Component{
static contextType=Context;
	componentDidMount(){
		// Start page fade.
		if(this.props.location==='/'){
			window.onload=(e)=>{
				window.setTimeout(()=>{
					this.context.pageFade();
				},300);
			};
		}
		else{
			// window.onload not needed once site is loaded initially,
			// only the fade timeout is needed for subsequent page renders. 
			window.setTimeout(()=>{
				this.context.pageFade();
			},300);
		}
	}
	render(){
		return(
			<div id='page-fade'></div>
		);
	}
}