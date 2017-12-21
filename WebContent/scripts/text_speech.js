	


function getSpeechFromText() {
		
	var text_data= $("#watsontextData").val();
	
	
	
	var audioPlayer = document.getElementById("audioPlayer");
    var audioPlayerDownload = document.getElementById("audioPlayerDownload");

	audioPlayer.innerHTML ="<center><img src='images/load_dribbble.gif' style='height:100px'></center";
	audioPlayerDownload.innerHTML="";

	$("#audioPlayer").show();
		$.ajax({
		          	url: 'https://senzwatsonkeys.mybluemix.net/text_to_speech.php',
		          	data: 'text_data='+text_data,
		          	type: 'post',
		   			success: function(msg){
		   			
		 	            var audioPlayer = document.getElementById("audioPlayer");
		 	           var audioPlayerDownload = document.getElementById("audioPlayerDownload");

		   				audioPlayer.innerHTML ="<audio controls autoplay src="+msg+" style='width:100%'></audio>";
		   				audioPlayerDownload.innerHTML ="<div class='col-sm-2'><a href="+msg+" class='btn btn-s-md btn-success btn-rounded' style='background-color:#717171;border-color:#717171'><i class='fa fa-download' download></i>&nbsp;Download</a></div>";
		   		
		   		
					}
				
				});
	
	

	
	
}
