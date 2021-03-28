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
	sp = document.getElementById('app-sidepanel'); 
	if(sp){
		if(w >= 1200) {
			sp.classList.remove('sidepanel-hidden');
			sp.classList.add('sidepanel-visible');
		} else {
			sp.classList.remove('sidepanel-visible');
			sp.classList.add('sidepanel-hidden');
		}
	}
};


function sidePanelChange(){
	sp = document.getElementById('app-sidepanel'); 
	if (sp.classList.contains('sidepanel-visible')) {
		console.log('visible');
		sp.classList.remove('sidepanel-visible');
		sp.classList.add('sidepanel-hidden');
		
	} else {
		console.log('hidden');
		sp.classList.remove('sidepanel-hidden');
		sp.classList.add('sidepanel-visible');
	}
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


