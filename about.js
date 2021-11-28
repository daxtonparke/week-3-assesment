console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('form submitted');
}


let form = document.querySelector('form#contact');
// let whoYouGunnaCall = document.getElementById('ghostBusters')

const youLookGood = () => window.alert('You look good today') 
form.addEventListener('submit', handleSubmit);
document.getElementById('ghostBusters').addEventListener('mouseover', youLookGood)