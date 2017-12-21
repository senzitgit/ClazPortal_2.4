var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";


document.getElementById("dateAndYear").innerHTML = days[d.getDay()] +",<br> " +months[d.getMonth()] +" "+ d.getFullYear();
//document.getElementById("demo").innerHTML = d.getFullYear();






	$.ajax({
  	url: "https://senzwatsonkeys.mybluemix.net/speech_to_text.php",
  	type: 'get',
		success: function(msg){
   		
   		
		   console.log(msg);
		   sessionStorage.setItem("WatsonSpeechToken",msg);
		   
		    
		
	}

});