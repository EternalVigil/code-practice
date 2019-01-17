console.log('loaded');

let toggleButtons = document.querySelectorAll('.accordianHeader');

for (let i = 0; i < toggleButtons.length; i++) {
	toggleButtons[i].addEventListener('click', () =>{
		console.log('click');
		let contentBlock = toggleButtons[i].nextSibling.nextSibling;
		let blockStatus = contentBlock.getAttribute('status');
		console.log(blockStatus);
		contentBlock.setAttribute('status', 'active');
	});
}