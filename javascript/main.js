function wait(ms){
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

window.onload = function(){
	main=$("#main")[0];
	activity=$("#activity")[0];
	bio=$("#bio")[0];
	contacts=$("#contacts")[0];
	maincontent=$(".mainContent")[0];
	main.onmousedown=function(){
		var i=0;
		while(i<1){
		maincontent.style.opacity=i;
		i=i+0.01;
		//wait(100);
		}
	};
	activity.onmousedown=function(){
		
	};
	bio.onmousedown=function(){
		
	};
	contacts.onmousedown=function(){
		maincontent.style.opacity=0;
	};

	
	
	
};