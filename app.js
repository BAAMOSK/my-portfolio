const greeting = 'Hi! My name is Tee. Like what you see? Contact me @ bunth667@gmail.com.';

$(document).ready(function() {
  console.log(greeting);
});
	
$(document).keydown(function(e) {	
	if(e.keyCode === 39 || e.keyCode === 37) {				
		navigate();
	}
});
	
function navigate() {
	console.log('hello');
	$('.bio').toggleClass('hidden');		
	$('.work-bg').toggleClass('hidden');
	$('bar').toggleClass('hidden');
}

//From Main to Work
function goToWork() {
	$('.bio').toggleClass('hidden');
	$('.work-bg').toggleClass('hidden');
};
//From Work to Main
function changeScreenToWork(event) {
	$('.work-bg').toggleClass('hidden');
	$('.bio').toggleClass('hidden');
}
//From Work to Contact
function changeScreenToContact(event) {	
	$('.work-bg').toggleClass('hidden');
	$('.contact-bg').toggleClass('hidden');
}
//From Contact to Bio
function changeScreenToMain(event) {
	$('.work-bg').toggleClass('hidden');
	$('.bio').toggleClass('hidden');
}
//From Contact to Work
function changeScreenToWorking(event) {	
	$('.work-bg').toggleClass('hidden');
	$('.contact-bg').toggleClass('hidden');
}

function keyNav(event) {
//	$('#root').onkeypress('keydown', (event) => {
//		console.log('Yolo');
//	})
	//console.log('Helloworld');
	//goToWork();
}