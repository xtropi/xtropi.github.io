'use strict';
var lang="en";
window.onload = function(){
	'use strict';
	var langSwitch=$("#langSwitch")[0];
	var ruPointer=$(".ru");
	var enPointer=$(".en");

	function langSet(lang, animTime){
		if (lang=="en"){
			for (var i=0;i<enPointer.length;i++){
				ruPointer[i].style.display="none";
				enPointer.fadeIn("slow");
			}
		} else {
			for (var i=0;i<enPointer.length;i++){
				enPointer[i].style.display="none";
				ruPointer.fadeIn("slow");
			}
		}
	};
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("body")[0].style.zoom = "100%";
	}

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
	var footer=$(".footer");
//PAGES init ----
	
	var content=$(".content");
	var adapt=50;
	for(var i=0;i<reload.length;i++){ //for all reload class objects
		reload[i].onclick=function(){
			footer[0].style.display="none";
			activity[0].style.display="none";
			bio[0].style.display="none";
			contacts[0].style.display="none";
			main.fadeIn("slow");
			footer.fadeIn("slow");
		};
	}
	activityButton.onclick=function(){
		footer[0].style.display="none";
		main[0].style.display="none";
		bio[0].style.display="none";
		contacts[0].style.display="none";
		activity.fadeIn("slow");
		footer.fadeIn("slow");
	};
	bioButton.onclick=function(){
		footer[0].style.display="none";
		main[0].style.display="none";
		activity[0].style.display="none";
		contacts[0].style.display="none";
		bio.fadeIn("slow");
		footer.fadeIn("slow");
	};
	contactsButton.onclick=function(){
		footer[0].style.display="none";
		main[0].style.display="none";
		activity[0].style.display="none";
		bio[0].style.display="none";
		contacts.fadeIn("slow");
		footer.fadeIn("slow");
	};

	langSwitch.onclick=function(){

		langSwitch.disabled=true;
		if (lang=="en"){
			lang="ru";
			langSet(lang, 1000);
		} else {
			lang="en";
			langSet(lang, 1000);
		}
		setTimeout(function(){
			langSwitch.disabled=false;
		},2000) 
	}
	


};

