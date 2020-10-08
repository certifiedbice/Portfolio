import React,{Component} from 'react';
import Context from '../../masterProvider';
import DataHelper from '../../dataHelper';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './Portfolio.css';
export default class Portfolio extends Component{
	static contextType=Context;
	componentDidMount(){
		// Compensate for content outside the viewport.
		this.context.verticalPadAndScroll();
	}
	render(){
		const web=DataHelper.web;
		const art=DataHelper.art;
		return(
			<>
				<Background/>
				<main>
					<section id='portfolio'>
						<div className='group'>
							<div className='item'>
								<h3>Web Design &#38; Development</h3>
							</div>
						</div>
						<div className='group'>
							{
								web.map(item=>{
									if(item.link!==null){
										return (
											<div key={item.title} className='item gallery'>
												<a href={item.link} target='_blank' rel='noopener noreferrer'>
													<img src={require(`../../images/galleries/web/${item.image}`)} alt={item.title}/>
												</a>
												<h3>{item.title}</h3>
												<div className='item-status'><span>Status:</span> {item.status}</div>
												<div className='item-stack'>
													<div className='item-stack-title'>Stack: </div>
													{
														item.stack.map(item=>{
															return(
																<div key={item} className='item-stack-item'>{item},</div>
															);
														})
													}
												</div>
												<div className='item-description'>{item.description}</div>
											</div>
										);
									}
									else return null;
								})
							}
						</div>  
						<div className='group'>
							<div className='item'>
								<h3>Art &#38; Design</h3>
							</div>
						</div>
						<div className='group'>
							{
								art.map(item=>{
									if(item.link!==null){
										return (
											<div key={item.title} className='item gallery'>
												<a href={require(`../../images/galleries/video/${item.link}`)} target='_blank' rel='noopener noreferrer'>
													<img src={require(`../../images/galleries/art/${item.image}`)} alt={item.title}/>
												</a>
												<h3>{item.title}</h3>
												<div className='item-description'>{item.description}</div>
											</div>
										);
									}
									else{
										return (
											<div key={item.title} className='item gallery'>
												<img src={require(`../../images/galleries/art/${item.image}`)} alt={item.title}/>
												<h3>{item.title}</h3>
												<div className='item-description'>{item.description}</div>
											</div>
										);
									}
								})
							}
						</div>
					</section>
				</main>
				<Header/>
				<Footer/>
				<Fade location={this.props.location.pathname}/>
			</>
		);
	}
}