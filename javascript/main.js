function wait(ms){
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

window.onload = function(){
	//MAIN MENU init ++++
	reload=$(".reload");
	activityButton=$("#activity")[0];
	bioButton=$("#bio")[0];
	contactsButton=$("#contacts")[0];
	//MAIN MENU init ----
	
	//PAGES init ++++
	main=$(".main");
	activity=$(".activity");
	bio=$(".bio");
	contacts=$(".contacts");
	//PAGES init ----
	
	for(var i=0;i<reload.length;i++){ //for all reload class objects
	reload[i].onclick=function(){
		main.fadeIn("slow");
		activity.fadeOut("slow");
		bio.fadeOut("slow");
		contacts.fadeOut("slow");
	};
	}
	activityButton.onclick=function(){
		main.fadeOut("slow");
		activity.fadeIn("slow");
		bio.fadeOut("slow");
		contacts.fadeOut("slow");
	};
	bioButton.onclick=function(){
		main.fadeOut("slow");
		activity.fadeOut("slow");
		bio.fadeIn("slow");
		contacts.fadeOut("slow");
	};
	contactsButton.onclick=function(){
		main.fadeOut("slow");
		activity.fadeOut("slow");
		bio.fadeOut("slow");
		contacts.fadeIn("slow");
	};

	
	
	
};