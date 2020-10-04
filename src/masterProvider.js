import React,{Component} from 'react';

const Context=React.createContext({
	bgInt:()=>{},
    pageFade:()=>{},
	verticalPadAndScroll:()=>{},
	emailLinkBlink:()=>{},
	contactFade:()=>{}
});

export default Context;

export class MasterProvider extends Component{
	constructor(props){
		super(props);
		const state={};
		this.state=state;
	}
  	bgInt=x=>{
		// Variables, interval, and function to move background image.
		const el=document.querySelector('#background-image');
		let bgInt;
		if(x){
			bgInt=setInterval(moveBackgroundImage,150);
			let positionCount=0;
			let direction=0;
			let xCount=-50;
			let yCount=-50;
			function moveBackgroundImage(){
				el.style.left=xCount+'px';
				el.style.top=yCount+'px';
				// Down / Right movement
				if(direction===0){
					xCount++;
					yCount++;
					positionCount++;
					if(positionCount===20){direction++;positionCount=0;}
				}
				// Down / Left movement
				else if(direction===1){
					xCount--;
					yCount++;
					positionCount++;
					if(positionCount===20){direction++;positionCount=0;}
				}
				// Up / Left movement
				else if(direction===2){
					xCount--;
					yCount--;
					positionCount++;
					if(positionCount===20){direction++;positionCount=0;}
				}
				// Up / right movement
				else if(direction===3){
					xCount++;
					yCount--;
					positionCount++;
					if(positionCount===20){direction=0;positionCount=0;}
				}
			}
		}
		else{clearInterval(bgInt);}
	}
	pageFade=()=>{
		// Variables, interval, and function to fade in page.
		const el=document.querySelector('#page-fade');
		let fadeInt=setInterval(pageFade,70);
		let opacity=0.9;
		function pageFade(){
			// console.log(opacity)
			el.style.opacity=opacity;
			opacity-=(0.1);
			opacity=opacity.toFixed(1);
			if(parseFloat(opacity)===0.0){
				clearInterval(fadeInt);
				el.style.display='none';
			}
		}
	}
	verticalPadAndScroll=()=>{
		const el=document.querySelector('main');
		const el2=document.querySelector('body');
		let main=el.getBoundingClientRect();
		if(main.bottom>window.innerHeight||main.height>window.innerHeight){
			el.style.paddingBottom='75px';
			el2.style.overflowY='scroll';
		}
		else{
			el.style.paddingBottom='0px';
			el2.style.overflowY='hidden';
		}
	}
	emailLinkBlink=clear=>{
		const el=document.querySelector('#contact-button');
		let blinkInt=setInterval(blink,500);
		function blink(){
			if(el.style.color==='rgb(102, 102, 102)'){el.style.color='#fff';}
			else{el.style.color='#666';}
			if(clear===true){clearInterval(blinkInt);}
		}
	}
	contactFade=show=>{
		// Element.
		const el=document.querySelector('#contact-overlay');
		// Interval variable.
		let cfadeInt;
		if(show===true){
			// Meat and potatos to fade in contact form.
			cfadeInt=setInterval(contactFade,70);
			el.style.display='flex';
			let opacity=0.0;
			function contactFade(){
				el.style.opacity=opacity;
				opacity+=(0.1);
				// opacity=opacity.toFixed(1);
				if(parseFloat(opacity)===1.2){
					clearInterval(cfadeInt);
				}
			}
		}
		else{
			// Meat and potatos to fade out contact form.
			cfadeInt=setInterval(contactFade,70);
			let opacity=0.9;
			function contactFade(){
				el.style.opacity=opacity;
				opacity-=(0.1);
				opacity=opacity.toFixed(1);
				if(parseFloat(opacity)===0.0){
					clearInterval(cfadeInt);
					el.style.display='none';
				}
			}
		}
	}
	render() {
		const value={
			bgInt:this.bgInt,
			pageFade:this.pageFade,
			verticalPadAndScroll:this.verticalPadAndScroll,
			emailLinkBlink:this.emailLinkBlink,
			contactFade:this.contactFade
		};
		return (
			<Context.Provider value={value}>
				{this.props.children}
			</Context.Provider>
		);
	}
}