/*
function wait(ms){
	var d = new Date();
	var d2 = null;
	do {
		d2 = new Date();
	}
	while(d2-d < ms);
}
*/

window.onload = function(){
	'use strict';
//MAIN MENU init ++++
	var reload=$(".reload");
	var activityButton=$("#activity")[0];
	var bioButton=$("#bio")[0];
	var contactsButton=$("#contacts")[0];
//MAIN MENU init ----
	
//PAGES init ++++
	var main=$(".main");
	var activity=$(".activity");
	var bio=$(".bio");
	var contacts=$(".contacts");
//PAGES init ----
	
	var spine=$(".spine");
	var adapt=50;
	for(var i=0;i<reload.length;i++){ //for all reload class objects
	reload[i].onclick=function(){
		main.fadeIn("slow");
		activity.fadeOut("slow");
		bio.fadeOut("slow");
		contacts.fadeOut("slow");
		spine.animate(
		{
			height: $(".main")[0].getBoundingClientRect().height+adapt
		}, 1000
		);
	};
	}
	activityButton.onclick=function(){
		main.fadeOut("slow");
		activity.fadeIn("slow");
		bio.fadeOut("slow");
		contacts.fadeOut("slow");
		spine.animate(
		{
			height: $(".activity")[0].getBoundingClientRect().height+adapt
		}, 1000
		);
	};
	bioButton.onclick=function(){
		main.fadeOut("slow");
		activity.fadeOut("slow");
		bio.fadeIn("slow");
		contacts.fadeOut("slow");
		spine.animate(
		{
			height: $(".bio")[0].getBoundingClientRect().height+adapt
		}, 1000
		);
	};
	contactsButton.onclick=function(){
		main.fadeOut("slow");
		activity.fadeOut("slow");
		bio.fadeOut("slow");
		contacts.fadeIn("slow");
		spine.animate(
		{
			height: $(".contacts")[0].getBoundingClientRect().height+adapt
		}, 1000
		);
	};

	
	
	
};