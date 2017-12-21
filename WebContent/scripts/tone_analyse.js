	


function getToneAnalyse() {
	var text_data= watsontextdata;
	
	if (text_data == ""){
		alert("Input Some Text to Analyze")
		return false;
	}else {
		
		
		
		
		
		
		
		$.ajax({
		          	url: 'https://senzwatsonkeys.mybluemix.net/tone_analyser.php',
		          	data: 'tone_data='+text_data,
		          	type: 'post',
		   			success: function(msg){
		   				
		   				
		   				var toneAnalyze = msg;
		   				
		   				
		   				
		   				sessionStorage.setItem("toneAnalyze",toneAnalyze);
		   				
		   				
		   				
		   				$("#button_get_tone_analyze").hide();
		   				$("#doc_level").show();
		   				//$("#sentence_level").show();
		   				$("#tone_refresh").show();
		   		
		   		obj = JSON.parse(msg);
		   		var tones  =obj.document_tone.tones;
		   		var sentence_tone  =obj.sentences_tone;
		   		console.log(tones.length);
		   		console.log(msg);
		   		
		   		var document_level_list = document.getElementById('document_level_list');
		   		//var sentence_tone_list = document.getElementById('sentence_tone_list');
		   	    
		 	 	 document_level_list.innerHTML="";
		 	 	//sentence_tone_list.innerHTML="";
		   		
		 	 	
		 	 	   
		 	 	   

		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   if(tones.length>0){
		   			
		   			
		   			for (var i = 0; i < tones.length; i++) {
		 	 	       var cur = tones[i];
		 	 	       var scoredata= cur.score*100;
	                     
		 	 	     if(cur.tone_id =='sadness'){
		 	 	    	 
		 	 	    	 document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#000;"></div>'+
	         '</div>';	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	    	 
		 	 	     }
		 	 	     
		 	 	     
		 	 	     else  if(cur.tone_id =='fear'){
		 	 	    	 
		 	 	    	document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
		 	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#325E2B;"></div>'+
		 	         '</div>';	
		 	 	    	
		 	 	    	
		 	 	    	
		 	 	    	
		 	 	    	
		 	 	    	 
		 	 	     }
		 	 	     
		 	 	   else  if(cur.tone_id =='anger'){
		 	 	    	 
		 	 		 document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
		 	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#E80521;"></div>'+
		 	         '</div>';
		 	 		 
		 	 	    	 
		 	 	     }
		 	 	     
		 	 	     
		 	 	 else  if(cur.tone_id =='confident'){
	 	 	    	 
		 	 		 document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
		 	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#592684;"></div>'+
		 	         '</div>';
		 	 		 
		 	 		 
		 	 		 
		 	 		 
		 	 		 
	 	 	    	 
	 	 	     }
		 	 	     
		 	 	else  if(cur.tone_id =='joy'){
		 	    	 
		 	 		document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
	 	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#FFD629;"></div>'+
	 	         '</div>';
		 	 		
		 	 		
		 	 		
		 	    	 
		 	     }
		 	 	     
		 	 	else  if(cur.tone_id =='tentative'){
		 	    	 
		 	 		document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
	 	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#ff66fc;"></div>'+
	 	         '</div>';
		 	 		
		 	 		
		 	 		
		 	    	 
		 	     }
		 	 	     
		 	 	
		 	 	     
		 	 	else  if(cur.tone_id =='analytical'){
		 	    	 
		 	 		document_level_list.innerHTML = document_level_list.innerHTML+'<b>'+cur.tone_name+' - '+cur.score+'</b> LIKELY<div class="progress progress-sm m-t-sm progress-striped active">'+
	 	            '<div class="progress-bar bg-primary" data-toggle="tooltip" data-original-title="'+scoredata+'%" style="width: '+scoredata+'%;background-color:#f4b942;"></div>'+
	 	         '</div>';
		 	 		
		 	 		
		 	 		
		 	    	 
		 	     }
		 	 	     
		 	 	     
		 	 	     
		 	 	     
		 	 	     
		 	 	     
		 	 	     
		 	 	    
		 	 	       
		 	 	       
		 	 	       
		 	 	       
		 	 	       
		 	 	       
		 	 	       
		 	 	       
		 	 	    } 
		   			
		   			
		   			
		   		}else{
		   			
		   			document_level_list.innerHTML = "Nothing to find here.."
		   		}
		 	 	   
		 	 	   
		 	/* 	   
		 	 	 if(sentence_tone.length>0){
		 	 		 
		 	 		 
		   			for (var i = 0; i < sentence_tone.length; i++) {
			 	 	       var cur = sentence_tone[i];
			 	 	     
		                     var queryString = '<li class="list-group-item">'+
			 	         '<a href="#" class="h5 text-primary m-b-sm m-t-sm block">'+cur.text+' </a><p></p></li>';
		                     
		                       
		                  
			 	 	    
			 	 	     sentence_tone_list.innerHTML = sentence_tone_list.innerHTML + queryString;
			 	 	    
			 	 	       
			 	 	       
			 	 	       
			 	 	       
			 	 	    } 
		 	 		 
		 	 		 
		 	 		 
		 	 		 
		 	 	 }*/
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		 	 	   
		   		
		   		
		 	
		   		
		   		
		   		
		   		
		   		
		   		
					}
				
				});
	}
	

	
	
}















