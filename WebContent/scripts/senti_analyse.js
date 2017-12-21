	


function getSentiAnalyse () {
	var text_data= watsontextdata;
	
	if (text_data == ""){
		alert("Input Some Text to Analyze")
		return false;
	}else {
		
		
		
		
		
		
		
		$.ajax({
		          	url: 'https://senzwatsonkeys.mybluemix.net/natural_language.php',
		          	data: 'tone_data='+text_data,
		          	type: 'post',
		   			success: function(msg){
		   				
		   			var sentimentalAnalyze = msg;
		   	
		   				
		   				//console.log(msg)
		   				
		   				$("#button_get_senti_analyze").hide();
		   				$("#sentiana_level").show();
		   				//$("#sentence_level").show();
		   				$("#senti_refresh").show();
		   		
		   		obj = JSON.parse(msg);
		   		var keywords  =obj.keywords;
		   		
		   		/*console.log(tones.length);*/
		   		console.log(msg);
		   		//localStorage.setItem("sentimentalAnalyze", msg);
		   		sessionStorage.setItem("sentimentalAnalyze",sentimentalAnalyze);
		   		
		   		var sentiana_level = document.getElementById('sentiana_level');
		   		var overall_senti = document.getElementById('overall_senti');
		   		var sentimentalDataTable = document.getElementById('sentimentalDataTable');
		   		
		   		
		   		//var sentence_tone_list = document.getElementById('sentence_tone_list');
		   	    
		   		//sentiana_level.innerHTML="";
		   		overall_senti.innerHTML="";
		   		sentimentalDataTable.innerHTML="";
		 	 	//sentence_tone_list.innerHTML="";
		   		
		   		overall_senti.innerHTML='<section class="panel panel-info">'+ 
		   	  '<div class="panel-body"> '+
		      '<div class="clear"> <a href="#" class="text-info" style="font-size:16px;">Overall Sentiment <i class="icon-twitter"></i></a>'+ 
		      '<small class="block text-muted" style="font-size:15px;">Value : <b>'+obj.sentiment.document.score+'</b></small>'+ 
		      '<a href="#" class="btn btn-xs btn-success m-t-xs">'+obj.sentiment.document.label+'</a> </div> </div> </section>';
		 	 	   
		 	 	  
		    
		 	 	 if(keywords.length>0){
		 	 		 
		 	 		 
		   			for (var i = 0; i < keywords.length; i++) {
			 	 	       var cur = keywords[i];
			 	 	     
			 	 	     var scoredata= cur.relevance*100;
		                  
			 	 	    
			 	 	     sentimentalDataTable.innerHTML = sentimentalDataTable.innerHTML + ' <tr><td>'+cur.text+'</td>'+
			 	 	   ' <td>'+cur.relevance+'</td>'+
			 	 	   ' <td><div class="progress progress-sm progress-striped active m-t-xs m-b-none">'+
			 	 	   ' <div class="progress-bar bg-success" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#E80521;"></div>'+
			 	 	   ' </div> </td></tr>';
			 	 	    
			 	 	       
			 	 	       
			 	 	       
			 	 	       
			 	 	    } 
		 	 		 
		 	 		 
		 	 		 
		 	 		 
		 	 	 }
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		   		
		   		
		 	
		   		
		   		
		   		
		   		
		   		
		   		
					}
				
				});
	}
	

	
	
}















