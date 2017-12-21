
$(document).ready(function(){
	
	
	
	$("#visual_form").submit(function(){
		
		$("#processedDataField").hide();
		$("#imgLoading").show();	
		
		

		 var jForm = new FormData();
          jForm.append("uploadedfile", $('#fileToUpload').get(0).files[0]);
		  
        
        this.timer = setTimeout(function () {
				$.ajax({
					 url: "http://www.senzit.net/watson/visual_recognition.php",     
		          	 type: "POST",
	                   data: jForm,
	                   mimeType: "multipart/form-data",
	                   contentType: false,
	                   cache: false,
	                   processData: false,
		   			   success: function(msg){
		   				
		   				
		   				console.log(msg);
		   				obj = JSON.parse(msg);
		   				
		   			    var message  = obj.images[0].classifiers[0].classes;
		   				
		   				
		   				
		   	 		 var arrayLength  = obj.images[0].classifiers[0].classes.length;
				   	 var VisualDataTable= document.getElementById('VisualDataTable');
				   	 VisualDataTable.innerHTML='';
	                 
				   	 
				   	 var sourceImageUrl = obj.images[0].source_url;
	                 var sourceImage= document.getElementById('sourceImage');
	                 sourceImage.innerHTML='<img src="'+sourceImageUrl+'" style="width:80%;-webkit-box-shadow: -2px 3px 21px -8px rgba(15,155,172,1);-moz-box-shadow: -2px 3px 21px -8px rgba(15,155,172,1);box-shadow: -2px 3px 21px -8px rgba(15,155,172,1);">';
			 
			   		for (var i = 0; i < arrayLength; i++) {
		   		        var cur = message[i];
		   		        
		   		        var graphPer = cur.score *100;
		   		        
		   		     VisualDataTable.innerHTML= VisualDataTable.innerHTML + '<tr>'+
			                '<td>'+cur.class+'</td> '+
			                '<td>'+cur.score+'</td> '+ 
			                 '<td>'+
			                    '<div class="progress progress-xs m-t-xs m-b-none">'+
			                       '<div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="'+cur.score+'" style="width: '+graphPer+'%"></div>'+
			                    '</div>'+
			                 '</td>'+
			              '</tr> ';
	
				}
		   				
			   	$("#imgLoading").hide();		
		   		$("#processedDataField").show();		
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				/*
		   				<tr>
		                <td>UI toolkit</td>  
		                 <td>
		                    <div class="progress progress-xs m-t-xs m-b-none">
		                       <div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="20%" style="width: 20%"></div>
		                    </div>
		                 </td>
		              </tr>  
		   				*/
		   				
		   				
		   				
		   
					}
				
				});
			}, 200);
			
		
	
        return false;
	
	
	
	});	
	
	
	
	
	
	
	
	
	
	
	
	
$("#visual_form_direct").submit(function(){
		
	var imagedirectUrl = $("#imagedirectUrl").val();

	if (/(jpg|jpeg|gif|png)$/i.test(imagedirectUrl)) {
	    
	}
	else {
		
		$("#errorDirect").show();
		
		
		setTimeout(function(){ 
			$("#errorDirect").hide();
			
		}, 5000);
		
	   return false;
	}
	
	
		
	
	   $("#processedDataField").hide();
		$("#imgLoading").show();	
		
		
		
		
		
        this.timer = setTimeout(function () {
				$.ajax({
					
					url: "https://senzwatsonkeys.mybluemix.net/visual_recognition_url.php",     
					 data: 'imagedirectUrl='+imagedirectUrl,
			          type: 'post',
		   			success: function(msg){
		   				
		   				console.log(msg);
		   				obj = JSON.parse(msg);
		   				
		   			    var message  = obj.images[0].classifiers[0].classes;
		   				
		   				
		   				
		   	 		 var arrayLength  = obj.images[0].classifiers[0].classes.length;
				   	 var VisualDataTable= document.getElementById('VisualDataTable');
				   	 VisualDataTable.innerHTML='';
	                 
				   	 
				   	 var sourceImageUrl = obj.images[0].source_url;
	                 var sourceImage= document.getElementById('sourceImage');
	                 sourceImage.innerHTML='<img src="'+sourceImageUrl+'" style="width:80%;-webkit-box-shadow: -2px 3px 21px -8px rgba(15,155,172,1);-moz-box-shadow: -2px 3px 21px -8px rgba(15,155,172,1);box-shadow: -2px 3px 21px -8px rgba(15,155,172,1);">';
			 
			   		for (var i = 0; i < arrayLength; i++) {
		   		        var cur = message[i];
		   		        
		   		        var graphPer = cur.score *100;
		   		        
		   		     VisualDataTable.innerHTML= VisualDataTable.innerHTML + '<tr>'+
			                '<td>'+cur.class+'</td> '+
			                '<td>'+cur.score+'</td> '+ 
			                 '<td>'+
			                    '<div class="progress progress-xs m-t-xs m-b-none">'+
			                       '<div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="'+cur.score+'" style="width: '+graphPer+'%"></div>'+
			                    '</div>'+
			                 '</td>'+
			              '</tr> ';
	
				}
		   				
			   	$("#imgLoading").hide();		
		   		$("#processedDataField").show();		
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				
		   				/*
		   				<tr>
		                <td>UI toolkit</td>  
		                 <td>
		                    <div class="progress progress-xs m-t-xs m-b-none">
		                       <div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="20%" style="width: 20%"></div>
		                    </div>
		                 </td>
		              </tr>  
		   				*/
		   				
		   				
		   				
		   
					}
				
				});
			}, 200);
			
		
	
        return false;
	
	
	
	});	
	
	
	
	
	
	
	
	
	
	
	
	

});
	
	
	
	
	
	
	
