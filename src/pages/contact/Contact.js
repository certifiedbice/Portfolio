import React,{Component} from 'react';
import Context from '../../masterProvider';
import DataHelper from '../../dataHelper';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './Contact.css';
export default class Contact extends Component{
	static contextType=Context;
	showContactForm=()=>{
		this.context.contactFade(true);
	}
	hideContactForm=()=>{
		this.context.contactFade(false);
	}
	componentDidMount(){
		// Compensate for content outside the viewport.
		this.context.verticalPadAndScroll();
		// Blink the email link.
		this.context.emailLinkBlink();
		// FormSpree
		// helper function for sending an AJAX request
		function ajax(method, url, data, success, error){
			var xhr = new XMLHttpRequest();
			xhr.open(method, url);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.onreadystatechange = function() {
				if (xhr.readyState !== XMLHttpRequest.DONE) return;
				if (xhr.status === 200) {
					success(xhr.response, xhr.responseType);
				} else {
					error(xhr.status, xhr.response, xhr.responseType);
				}
			};
			xhr.send(data);
		}
		const closeContactForm=()=>{this.context.contactFade(false);}
		window.addEventListener("DOMContentLoaded", function() {
			// get the form elements defined in your form HTML above
			var form = document.getElementById("contact-form");
			const el1=document.querySelector('#contact-form-status');
			// Success and Error functions for after the form is submitted
			function success() {
				form.reset();
				el1.innerHTML='Submission Success';
				setTimeout(closeContactForm(),3000)
			}
			function error() {
				el1.innerHTML = 'Oops! There was a problem.';
			}
			// handle the form submission event
			form.addEventListener("submit", function(ev) {
				ev.preventDefault();
				var data = new FormData(form);
				ajax(form.method, form.action, data, success, error);
			});
		});
	}
	componentWillUnmount(){
		this.context.emailLinkBlink(true);
	}
	render(){
		const socialInfo=DataHelper.social;
		return(
			<>
				<Background/>
				<main>
					<section id='contact'>
						<div className='group contact-text-group'>
							<div id='contact-button' className='item contact-text'onClick={this.showContactForm}>Email</div>
							<div className='item contact-text'>or</div>
							<div className='item contact-text'>Social</div>
						</div>
						<div className='group'>
							<div id='contact-social-icon-links-container' className="item">
								{
									socialInfo.map(item=>{
										if(item.link!==null){
											return (
												<a key={item.title} href={item.link} className='contact-social-icon-link' target='_blank' rel='noopener noreferrer'>
													<img className='contact-social-icon-image' src={require(`../../images/social-icons/${item.icon}`)} alt={item.title}/>
												</a>
											);
										}
										else return null;
									})
								}
							</div>
						</div>
						<div id='contact-overlay'>
							<div id='contact-form-container'>
								<div id='contact-form-elements-container'>
									<div id="contactHideBtn" onClick={this.hideContactForm}>X</div>
									<form id='contact-form' action='https://formspree.io/xnqgpoje' method='POST'>
										<legend>Email Me</legend>
										<label htmlFor='fname'>First name:</label>
										<input type='text' id='fname' placeholder='John'/>
										<label htmlFor='lname'>Last name:</label>
										<input type='text' id='lname' placeholder='Doe'/>
										<label htmlFor='email'>Email Address:</label>
										<input type='text' id='email' placeholder='john.doe@eod.nhoj.com'/>
										<label htmlFor='phone'>Phone Number:</label>
										<input id='phone' type='text' name='phone' pattern='\d{3}[\-]\d{3}[\-]\d{4}' placeholder='xxx-xxx-xxxx'/>
										<label htmlFor='organization'>Organization:</label>
										<input type='text' id='organization' placeholder='John Doe Corporation'/>
										<label htmlFor='subject'>Subject:</label>
										<input type='text' id='subject' placeholder='I am lost, do you know who I am?'/>
										<label htmlFor='comments'>Comments:</label>
										<textarea name='comments' id='comments' cols='30' rows='8' maxLength='200'></textarea>
										<input id='contact-form-submit-button' type='submit' value='Submit'/>
									</form>
								</div>
								<div id='contact-form-status'></div>
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