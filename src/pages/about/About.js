import React,{Component} from 'react';
import Context from '../../masterProvider';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './About.css';
export default class About extends Component{
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
					<section id='about'>
						<div className='group'>
							<div className='item' id='about-intro'>
								In a <img id='walnut-image' src={require('../../images/ui/walnut.png')} alt='Walnut'/> I am a diverse professional
							</div>
						</div>
						<div className='group'>
							<div className='item'><h3>My life story</h3></div>
						</div>
						<div className='group'>
							<div className='item'>
								<h3>I have lived</h3>
								<p className='p-bold'>a non-linear life trajectory and from that I have gained wisdom and experience in many areas.</p>
								<div className='item-description'>
									<p>One constant has been my life's entanglement with web technology. I am a geek and have a great passion for technology, I only wish I could learn it all.</p>
									<p>When I am not designing or developing you will find me working on a painting or running a marathon or possibly helping develop leaders for the future.</p>
								</div>
							</div>
							<div className='item'>
								<h3>My history</h3>
								<p className='p-bold'>cannot be squeezed in here, so...</p>
								<div className='item-description'>
									<p>What I can tell you about myself is that I have a strong desire and drive to bring my abilities to a team that will allow me to grow and make a difference.</p>
									<p>I want my experience and training to be a benefit to my team and my project, I want to work in a place where my efforts will be felt and appreciated.</p>
									<p>Ideally, I want to employ my talents in an environment where I can be challenged and learn from my teammates so that I can grow as a developer and engineer.</p>
								</div>
							</div>
						</div>  
						<div className='group'>
							<div className='item'><h3>My toolbox</h3></div>
						</div>
						<div className='group'>
							<div className='item toolbox-item'>Fine Art</div>
							<div className='item toolbox-item'>Illustration</div>
							<div className='item toolbox-item'>Graphic Design</div>
							<div className='item toolbox-item'>Adobe Master Collection</div>
							<div className='item toolbox-item'>2D Animation</div>
							<div className='item toolbox-item'>3D Modeling &#38; Animation</div>
							<div className='item toolbox-item'>Tattoo</div>
							<div className='item toolbox-item'>A &#38; V Production</div>
							<div className='item toolbox-item'>Linux</div>
							<div className='item toolbox-item'>Windows</div>
							<div className='item toolbox-item'>Apple</div>
							<div className='item toolbox-item'>L.A.M.P</div>
							<div className='item toolbox-item'>Web Design</div>
							<div className='item toolbox-item'>Web Development</div>
							<div className='item toolbox-item'>Software Engineering</div>
							<div className='item toolbox-item'>Technology Specialist</div>
							<div className='item toolbox-item'>UI</div>
							<div className='item toolbox-item'>UX</div>
							<div className='item toolbox-item'>Front End</div>
							<div className='item toolbox-item'>Back End</div>
							<div className='item toolbox-item'>Full Stack</div>
							<div className='item toolbox-item'>Server Administration</div>
							<div className='item toolbox-item'>A+ Computer Technician</div>
							<div className='item toolbox-item'>Cisco ITE Computer Technician</div>
							<div className='item toolbox-item'>Cisco CCENT Network Technician</div>
							<div className='item toolbox-item'>Thinkful Engineering Immersion Certified</div>
							<div className='item toolbox-item'>HTML5</div>
							<div className='item toolbox-item'>CSS</div>
							<div className='item toolbox-item'>Javascript</div>
							<div className='item toolbox-item'>jQuery</div>
							<div className='item toolbox-item'>Reactjs</div>
							<div className='item toolbox-item'>Nodejs</div>
							<div className='item toolbox-item'>PHP</div>
							<div className='item toolbox-item'>Wordpress</div>
							<div className='item toolbox-item'>Express</div>
							<div className='item toolbox-item'>PostgreSQL</div>
							<div className='item toolbox-item'>MySQL</div>
							<div className='item toolbox-item'>Knex</div>
							<div className='item toolbox-item'>dotenv</div>
							<div className='item toolbox-item'>Json</div>
							<div className='item toolbox-item'>Json-server</div>
							<div className='item toolbox-item'>JWT</div>
							<div className='item toolbox-item'>XSS</div>
							<div className='item toolbox-item'>XML</div>
							<div className='item toolbox-item'>Jest</div>
							<div className='item toolbox-item'>Mocha</div>
							<div className='item toolbox-item'>Chai</div>
							<div className='item toolbox-item'>Supertest</div>
							<div className='item toolbox-item'>Cypress</div>
							<div className='item toolbox-item'>Morgan</div>
							<div className='item toolbox-item'>Helmet</div>
							<div className='item toolbox-item'>Cors</div>
							<div className='item toolbox-item'>Postgrator-cli</div>
							<div className='item toolbox-item'>Vercel</div>
							<div className='item toolbox-item'>Heroku</div>
							<div className='item toolbox-item'>Netlify</div>
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