'use strict';

/* ===== Enable Bootstrap Popover (on element  ====== */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/* ==== Enable Bootstrap Alert ====== */
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
});


/* ===== Responsive Sidepanel ====== */
const sidePanelToggler = document.getElementById('sidepanel-toggler'); 
const sidePanel = document.getElementById('app-sidepanel');  
const sidePanelDrop = document.getElementById('sidepanel-drop'); 
const sidePanelClose = document.getElementById('sidepanel-close'); 

window.addEventListener('load', function(){
	responsiveSidePanel(); 
});

window.addEventListener('resize', function(){
	responsiveSidePanel(); 
});


function responsiveSidePanel() {
    let w = window.innerWidth;
	if(sidePanel){
		if(w >= 1200) {
			sidePanel.classList.remove('sidepanel-hidden');
			sidePanel.classList.add('sidepanel-visible');
		} else {
			sidePanel.classList.remove('sidepanel-visible');
			sidePanel.classList.add('sidepanel-hidden');
		}
	}
};

if(sidePanelToggler){
	sidePanelToggler.addEventListener('click', () => {
		if (sidePanel.classList.contains('sidepanel-visible')) {
			console.log('visible');
			sidePanel.classList.remove('sidepanel-visible');
			sidePanel.classList.add('sidepanel-hidden');
			
		} else {
			console.log('hidden');
			sidePanel.classList.remove('sidepanel-hidden');
			sidePanel.classList.add('sidepanel-visible');
		}
	});
}


if(sidePanelClose){
	sidePanelClose.addEventListener('click', (e) => {
		e.preventDefault();
		sidePanelToggler.click();
	});
}

if(sidePanelDrop){
	sidePanelDrop.addEventListener('click', (e) => {
		sidePanelToggler.click();
	});
}





/* ====== Mobile search ======= */
const searchMobileTrigger = document.querySelector('.search-mobile-trigger');
const searchBox = document.querySelector('.app-search-box');

if(searchMobileTrigger){
	searchMobileTrigger.addEventListener('click', () => {

		searchBox.classList.toggle('is-visible');
		
		let searchMobileTriggerIcon = document.querySelector('.search-mobile-trigger-icon');
		
		if(searchMobileTriggerIcon.classList.contains('fa-search')) {
			searchMobileTriggerIcon.classList.remove('fa-search');
			searchMobileTriggerIcon.classList.add('fa-times');
		} else {
			searchMobileTriggerIcon.classList.remove('fa-times');
			searchMobileTriggerIcon.classList.add('fa-search');
		}
	});
}


