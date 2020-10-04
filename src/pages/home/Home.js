import React,{Component} from 'react';
import Context from '../../masterProvider';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
export default class Home extends Component{
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
					<section id='home'>
						<div className='group'>
							<div className='item'>
								<img src={require('../../images/jthm/jhtm01.jpg')} alt="Hello I'm Bice"/>
								<h2>Hello I'm Bice</h2>
								<div className='item-description'>
									<p>I am a web developer with an industry history.</p>
									<p>I have a wide spread depth of knowledge in many areas of development and design.</p>
									<p>I began designing websites in 1998 and over the years have progressed into development.</p>
								</div>
							</div>
							<div className='item'>
								<img src={require('../../images/jthm/jhtm02.jpg')} alt='I currently reside in Westminister Colorado'/>
								<h2>I currently reside in Denver CO</h2>
								<div className='item-description'>
									<p>I have worked around the country as a professional consultant for many years.</p>
									<p>Much of that time was spent in the Silicon Valley back in the glory days of the early tech industry.</p>
								</div>
							</div>
							<div className='item'>
								<img src={require('../../images/jthm/jhtm03.jpg')} alt='My area of expertise'/>
								<h2>My area of expertise</h2>
								<div className='item-description'>
									<p>I have extensive experience and knowledge in most areas of art, design and development.</p>
									<p>I have solid experience in server administration, am a Cisco Certified Entry Network Technician, and hold a CompTIA A+ certification as well.</p>
									<p>I have years of experience in many areas of web design and development, working with HTML, CSS, Javascript, PHP and more.</p>
								</div>
							</div>
							<div className='item'>
								<img src={require('../../images/jthm/jhtm04.jpg')} alt='Why consider me'/>
								<h2>Why consider me</h2>
								<div className='item-description'>
									<p>Aside from my large variety of skills, I bring a proven resourcefulness that can only be gained through experience.</p>
									<p>Skills can be learned quickly in today's world, but a well rounded amount of experience is the only thing that is going to ensure those skills are applied effectively.</p>
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