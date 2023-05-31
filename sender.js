import * as emailjs from './emailjs-com/dist/email.min.js';

window.emailjs.init('x8-fkDWmvE7DDStpV');


document.getElementById('request').addEventListener('click',function(event) {
	event.preventDefault();
		window.emailjs.send('service_6nwmmd9', 'template_jtvni64', {
			subject: document.getElementById("subject").value,
			email:	document.getElementById("email").value,
			message: document.getElementById("messege").value,
		})
			.then(function() {
				console.log('SUCCESS!');
				document.getElementById('request').innerHTML="Sent!";
				setTimeout(function () {document.getElementById('request').innerHTML="Send";},  3000);
				
			}, function(error) {
				document.getElementById('request').innerHTML="Something went wrong";
				setTimeout(function () {document.getElementById('request').innerHTML="Send";},  3000);
				console.log('FAILED...', error);	
			});

		});

