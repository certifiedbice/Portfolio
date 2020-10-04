import React,{Component} from 'react';
import Context from '../../masterProvider';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './Services.css';
export default class Services extends Component{
	static contextType=Context;
	componentDidMount(){
		// Compensate for content outside the viewport.
		this.context.verticalPadAndScroll();
	}
	render(){
		return(
			<>
				<Background/>
				<main>
					<section id="services">
						<div className="group">
							<div className="item">
								<h3>Art &#38; Graphic Design</h3>
								<div className="item-description">
									<p>I am available for commissioned work in the areas of:</p>
									<p>Fine Art, Illustration, Graphic Design, Tattoo, 2D Animation, 3D Modeling &#38; Animation.</p>
									<p>My technical standards are high and my work's quality is very important to me. My aim is to provide an unparalled excellence.</p>
								</div>
							</div>
							<div className="item">
								<h3>Branding Development</h3>
								<div className="item-description">
									<p>Key demographic research for a targeted strategy that is relevant to your branding needs.</p>
									<p>Identity needs are crucial to your audience understanding, identifying and connecting with your organization, not just through channels and social media but emotionally.</p>
									<p>I have experience working with a wide variety of clientele, small and large, here and there, coffee to technology.</p>
									<p>I want to give you original work that will speak for and as your brand.</p>
								</div>
							</div>
							<div className="item">
								<h3>Web Design &#38; Development</h3>
								<div className="item-description">
									<p>My goal is to provide a user &#38; device friendly website that your audience will be able to find.</p>
									<p>Valuable functionality and services like: Ecommerce, Social Media, Content Management, are a must in today's market.</p>
									<p>Whether you want to custom design, an API, a React app, a WordPress CMS, an additional feature or service added to your existing site, I have the tools necessary to provide you with results.</p>
								</div>
							</div>
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