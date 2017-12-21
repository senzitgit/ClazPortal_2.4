		$(document).ready(function(){
			
	$("#reg_frm").submit(function(){
		
		
		
		var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){
			//document.getElementById("Fform").disabled= "true";
			
			$("#imageLoader").show();

			  	this.timer = setTimeout(function () {
					$.ajax({
		                url: "http://www.senzit.net/watson/mail/mail.php",
		                data: 'product=ClazPortal&fullname='+ $('#fullname').val() +
		                '&designation=' + $('#designation').val()+
		                '&email=' + $('#email').val()+
		                '&company=' + $('#company').val()+
		                '&country=' + $('#country').val()+
		                '&mobile=' + $('#mobile').val(),
			          	 type: 'post',
			   			success: function(msg){
			   			document.getElementById("mainWrap").innerHTML ='<div style="margin-top:200px"><center><img src="images/submitsuccess.png" style="height:100px"> '+ 
     ' <h4 style="color:#878787">Thank you for your interest. <br>Our team will back to you as soon as possible.</h4></div><br></center>';
						}
					
					});
				}, 200);
			  
			  	
				return false;
				
				
		}
	 		});
			
			

		
			
			
			
			
	
		});
		
		
		function loginPage(){
			
			
			window.location="index.html";
			
			
			
			
		}
	