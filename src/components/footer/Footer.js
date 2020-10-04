import React,{Component} from 'react';
import DataHelper from '../../dataHelper';
import './Footer.css';
export default class Header extends Component{
	render(){
		const socialInfo=DataHelper.social;
		return(
			<footer id='site-footer'>
				Bice - 2020
				<div id="footer-links-container">
					{
						socialInfo.map(item=>{
							if(item.link!==null){
								return (
									<a key={item.title} href={item.link} className='footer-social-icon-link' target='_blank' rel='noopener noreferrer'>
										<img className='footer-social-icons-image' src={require(`../../images/social-icons/${item.icon}`)} alt={item.title}/>
									</a>
								);
							}
							else return null;
						})
					}
				</div>
			</footer>
		);
	}
}