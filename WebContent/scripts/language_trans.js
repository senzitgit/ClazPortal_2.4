
 var global_language = 'es';


 $(document).ready(function() 
	{ 
	 
	 
	 
	 
	 var white = false
	 var bgcolor;
	 $(document).ready(function () {
	     $(".base--button_black").click(function () {
	         if (white = !white) {
	        	 
	        
	             bgcolor = $(this).css('backgroundColor');
	             $(this).css("background-color", "#ea1700");
	             $(this).css("color", "#fff");
	             $(this).css("font-weight", "bold");
	            
	         } else {
	        	 $(this).css("color", "#000");
	             $(this).css("background-color", bgcolor);
	         }
	     });
	 });
	 
	 
	 
	 
	 
	 


	 $('#language_list').on('change', function (e) {
	     var optionSelected = $("option:selected", this);
	     var valueSelected = this.value;
	     
	     global_language = valueSelected;
	     
	 });


	 
	 
	 
	 
	});
	








/*$.ajax({
	         url: 'http://www.senzit.net/watson/list_language.php',
	         data: '',
	         type: 'get',
	         success: function(msg)
	         	{
	         	 
		        	 var obj = JSON.parse(msg);
		        
		        	 var language_list_array = obj.languages;
		        	
		        	 var language_list = document.getElementById("language_list");
		        	 
	        		
		        	 for (var i=0; i<=language_list_array.length;i++)
		        	 {
		        		 
		        		 var cur = language_list_array[i];
		        		 
		        		 
		        		 language_list.innerHTML = language_list.innerHTML + '';
		        		 
		        		 
		        	 }
	         	}
	
	     });*/