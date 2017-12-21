//var url_string = window.location.href;

//var url = new URL(url_string);
var classNumber = 1;
//alert(classNumber);




$(document).ready(function() {

    $("#break_frm").submit(function() {
    	
  

        $('#sendStudentModal').modal('hide');


        var breakType = $("input[name=breaks]:checked").val();



        var sendStudentId = $("#sendStudentId").val();


        // alert(sendStudentId);




        var StudentNameResponse = sessionStorage.getItem("studentListResp");

        var obj = JSON.parse(StudentNameResponse);

        var resultCode = obj.response.resultcode;
        var message = obj.response.message;

        var studentName = obj.response.studentNameListResult.studentList;

        var cur = studentName[sendStudentId];


        var studentNameLists = document.getElementById(cur.studentId);

        studentNameLists.innerHTML =
            '<div id="' + cur.studentId + '"><ul class="nav navbar-nav ">' +
            '<li class="dropdown" style="width: 180px;">' +
            '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"><span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + cur.profilePic + '" style="vertical-align: middle;"> </span>' +
            '<h6><b>' + cur.firstName + ' ' + cur.lastName + '</b> </h6></center> </a> ' +
            '<ul class="dropdown-menu animated fadeInLeft" style="    min-width:400px;">' +
            '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">Seconds ago</small> <strong class="block"><i class="fa fa-reply"></i> &nbsp;Sent to</strong> <small>' + breakType + '</small> </a> </li>' +
            '<li class="divider"></li><li><a style="color: #0f9bac;" href="javascript:void(0)" onclick="showProfile(' + sendStudentId + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
            '<li><a ref="javascript:void(0)"  style="color: #0f9bac;" onclick="sendStudent(' + sendStudentId + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
            '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + sendStudentId + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

            ' </li>' +
            '</ul></div>';




        // sessionStorage.setItem("loguser", vname);


        /*  var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){
        
        
        



        
        
		} 
        */


    });




    $("#spot_frm").submit(function() {

        $('#spotlightModal').modal('hide');


        var spotType = $("input[name=radio]:checked").val();



        var sendStudentId = $("#spotStudentId").val();
        
        var adInfo = "";
        
        
        var adInfo1 = $("#adInfo1").val();
        var adInfo2 = $("#adInfo2").val();
        var adInfo3 = $("#adInfo3").val();

        if(adInfo1 !=""){
        	adInfo = adInfo1;
        }
        
        if(adInfo2 !=""){
        	adInfo = adInfo2;
        }
        
        if(adInfo3 !=""){
        	adInfo = adInfo3;
        }
        

$(this).closest('#spot_frm').get(0).reset();


        var StudentNameResponse = sessionStorage.getItem("studentListResp");

        var obj = JSON.parse(StudentNameResponse);

        var resultCode = obj.response.resultcode;
        var message = obj.response.message;

        var studentName = obj.response.studentNameListResult.studentList;

        var cur = studentName[sendStudentId];


        var studentNameLists = document.getElementById(cur.studentId);

        studentNameLists.innerHTML =
            '<div id="' + cur.studentId + '"><ul class="nav navbar-nav ">' +
            '<li class="dropdown" style="width: 180px;">' +
            '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"><span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + cur.profilePic + '" style="vertical-align: middle;"> </span>' +
            '<h6><b>' + cur.firstName + ' ' + cur.lastName + '</b> </h6></center> </a> ' +
            '<ul class="dropdown-menu animated fadeInLeft" style="    min-width:400px;">' +
            '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">Seconds ago</small> <strong class="block"><i class="fa fa-lightbulb-o"></i> &nbsp;Spotlight</strong> <h5>' + spotType + '</h5><small>' + adInfo + ' </small></a> </li>' +
            '<li class="divider"></li><li><a style="color: #0f9bac;" href="javascript:void(0)" onclick="showProfile(' + sendStudentId + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
            '<li><a ref="javascript:void(0)" style="color: #0f9bac;" onclick="sendStudent(' + sendStudentId + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
            '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + sendStudentId + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

            ' </li>' +
            '</ul></div>';




        // sessionStorage.setItem("loguser", vname);


        /*  var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){
        
        
        



        
        
		} 
        */


    });




    /*$.ajax({
      	url: "https://senzwatsonkeys.mybluemix.net/speech_to_text.php",
      	type: 'get',
			success: function(msg){
	   		
	   		
			   console.log(msg);
			   sessionStorage.setItem("WatsonSpeechToken",msg);
			   
			    
			
		}
	
	});*/




});




function getClassStudents() {



    $.ajax({
        url: webServerUrl,
        data: 'request=getStudentNameFromClass&classRoomNo=101',
        type: 'post',
        success: function(msg) {

            var StudentNameResponse = msg.trim();

            var obj = JSON.parse(StudentNameResponse);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;

            sessionStorage.setItem("studentListResp", StudentNameResponse);


            var studentName = obj.response.studentNameListResult.studentList;
            var studentNameLists = document.getElementById("listStudents");
            var classHeader = document.getElementById("classHeader");



            
            
            if(classNumber ==1){
            	
            		
            	
            	
            	studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<div id="' + studentName[0].studentId + '"><ul class="nav navbar-nav "><ul class="nav navbar-nav ">'+
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">2</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[0].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[0].firstName + ' ' + studentName[0].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Missing Homework</strong> <small>Grades were not entered for three assignments.</small> </a> </li>' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 hour ago</small> <strong class="block">Material Issue</strong> <small>iPad is dead and charger was left at home.</small> </a> </li>' +
                '<li class="divider"></li><li><a style="color: #0f9bac;" href="javascript:void(0)" onclick="showProfile(' + 0 + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" style="color: #0f9bac;" onclick="sendStudent(' + 0 + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + 0 + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

                '</ul>' +
                ' </li>' +
                '</ul></div>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<div id="' + studentName[1].studentId + '"><ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[1].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[1].firstName + ' ' + studentName[1].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 Min ago</small> <strong class="block">Restroom Break</strong>  </a> </li>' +

                '<li class="divider"></li><li><a style="color: #0f9bac;" href="javascript:void(0)" onclick="showProfile(' + 1 + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" style="color: #0f9bac;" onclick="sendStudent(' + 1 + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + 1 + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

                '</ul>' +
                ' </li>' +
                '</ul></div>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<div id="' + studentName[2].studentId + '"><ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[2].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[2].firstName + ' ' + studentName[2].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Positive Behaviour</strong> <small>Leadership Quality.</small> </a> </li>' +
                '<li class="divider"></li><li><a style="color: #0f9bac;" href="javascript:void(0)" onclick="showProfile(' + 2 + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" style="color: #0f9bac;" onclick="sendStudent(' + 2 + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +

                '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + 2 + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +


                '</ul>' +
                ' </li>' +
                '</ul></div>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<div id="' + studentName[3].studentId + '"><ul class="nav navbar-nav "><ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">2</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[3].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[3].firstName + ' ' + studentName[3].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Missing Homework</strong> <small>Grades were not entered for three assignments.</small> </a> </li>' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 hour ago</small> <strong class="block">Material Issue</strong> <small>iPad is dead and charger was left at home.</small> </a> </li>' +
                '<li class="divider"></li><li><a style="color: #0f9bac;" href="javascript:void(0)" onclick="showProfile(' + 3 + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" style="color: #0f9bac;" onclick="sendStudent(' + 3 + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + 3 + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +


                '</ul>' +
                ' </li>' +
                '</ul></div>';






            studentNameLists.innerHTML = studentNameLists.innerHTML + '<div class="col-lg-12"><div class="line"></div></div>';


            for (var i = 4; i < studentName.length; i++) {

                var cur = studentName[i];
                studentNameLists.innerHTML = studentNameLists.innerHTML +
                    '<div id="' + cur.studentId + '"><ul class="nav navbar-nav ">' +
                    '<li class="dropdown" style="width: 180px;">' +
                    '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + cur.profilePic + '" style="vertical-align: middle;"> </span>' +
                    '<h6><b>' + cur.firstName + ' ' + cur.lastName + '</b> </h6></center> </a> ' +
                    '<ul class="dropdown-menu animated fadeInLeft">' +
                    '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                    '<li><a ref="javascript:void(0)" style="color: #0f9bac;" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                    '<li><a href="javascript:void(0)" style="color: #0f9bac;" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +
                    '</ul>' +
                    ' </li>' +
                    '</ul></div>';
            }
            	
            
            assigntracker();
            
            }else if(classNumber ==2){
            	
            
            	
            	studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">2</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[0].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[0].firstName + ' ' + studentName[0].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Missing Homework</strong> <small>Grades were not entered for three assignments.</small> </a> </li>' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 hour ago</small> <strong class="block">Material Issue</strong> <small>iPad is dead and charger was left at home.</small> </a> </li>' +
                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

                '</ul>' +
                ' </li>' +
                '</ul>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[1].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[1].firstName + ' ' + studentName[1].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 Min ago</small> <strong class="block">Restroom Break</strong>  </a> </li>' +

                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

                '</ul>' +
                ' </li>' +
                '</ul>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[2].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[2].firstName + ' ' + studentName[2].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Positive Behaviour</strong> <small>Leadership Quality.</small> </a> </li>' +
                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +



                '</ul>' +
                ' </li>' +
                '</ul>';


           



            studentNameLists.innerHTML = studentNameLists.innerHTML + '<div class="col-lg-12"><div class="line"></div></div>';


            for (var i = 3; i < studentName.length; i++) {

                var cur = studentName[i];
                studentNameLists.innerHTML = studentNameLists.innerHTML +
                    '<div id="' + cur.studentId + '"><ul class="nav navbar-nav ">' +
                    '<li class="dropdown" style="width: 180px;">' +
                    '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + cur.profilePic + '" style="vertical-align: middle;"> </span>' +
                    '<h6><b>' + cur.firstName + ' ' + cur.lastName + '</b> </h6></center> </a> ' +
                    '<ul class="dropdown-menu animated fadeInLeft">' +
                    '<li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                    '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                    '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +
                    '</ul>' +
                    ' </li>' +
                    '</ul></div>';
            }
            	
            }else if(classNumber ==3){
            	
            	            	
            	
            	
            	
            	
            	
            	studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">2</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[0].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[0].firstName + ' ' + studentName[0].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Missing Homework</strong> <small>Grades were not entered for three assignments.</small> </a> </li>' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 hour ago</small> <strong class="block">Material Issue</strong> <small>iPad is dead and charger was left at home.</small> </a> </li>' +
                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

                '</ul>' +
                ' </li>' +
                '</ul>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[1].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[1].firstName + ' ' + studentName[1].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 Min ago</small> <strong class="block">Restroom Break</strong>  </a> </li>' +

                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +

                '</ul>' +
                ' </li>' +
                '</ul>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">1</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[2].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[2].firstName + ' ' + studentName[2].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Positive Behaviour</strong> <small>Leadership Quality.</small> </a> </li>' +
                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +



                '</ul>' +
                ' </li>' +
                '</ul>';


            studentNameLists.innerHTML = studentNameLists.innerHTML +

                '<ul class="nav navbar-nav ">' +
                '<li class="dropdown" style="width: 180px;">' +
                '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">2</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[3].profilePic + '" style="vertical-align: middle;"> </span>' +
                '<h6><b>' + studentName[3].firstName + ' ' + studentName[3].lastName + '</b> </h6></center> </a> ' +
                '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Missing Homework</strong> <small>Grades were not entered for three assignments.</small> </a> </li>' +
                '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 hour ago</small> <strong class="block">Material Issue</strong> <small>iPad is dead and charger was left at home.</small> </a> </li>' +
                '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +


                '</ul>' +
                ' </li>' +
                '</ul>';

            
            
            studentNameLists.innerHTML = studentNameLists.innerHTML +

            '<ul class="nav navbar-nav ">' +
            '<li class="dropdown" style="width: 180px;">' +
            '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"> <span class="badge bg-info" style="float:right">2</span><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + studentName[5].profilePic + '" style="vertical-align: middle;"> </span>' +
            '<h6><b>' + studentName[5].firstName + ' ' + studentName[5].lastName + '</b> </h6></center> </a> ' +
            '<ul class="dropdown-menu animated fadeInLeft" style="    width: 300px;">' +
            '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">1 hour ago</small> <strong class="block">Missing Homework</strong> <small>Grades were not entered for three assignments.</small> </a> </li>' +
            '<li> <a href="#" class="thumb-sm pull-left m-r-sm"> <a href="#" class="clear"> <small class="pull-right">2 hour ago</small> <strong class="block">Material Issue</strong> <small>iPad is dead and charger was left at home.</small> </a> </li>' +
            '<li class="divider"></li><li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
            '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
            '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +


            '</ul>' +
            ' </li>' +
            '</ul>';

            
            
            
            



            studentNameLists.innerHTML = studentNameLists.innerHTML + '<div class="col-lg-12"><div class="line"></div></div>';


            for (var i = 5; i < studentName.length; i++) {

                var cur = studentName[i];
                studentNameLists.innerHTML = studentNameLists.innerHTML +
                    '<div id="' + cur.studentId + '"><ul class="nav navbar-nav ">' +
                    '<li class="dropdown" style="width: 180px;">' +
                    '<a href="#" class="dropdown-toggle dker" data-toggle="dropdown"><center> <span class="thumb-sm avatar pull-center m-t-n-xs m-r-xs" style="width:56px;"> <img src="' + cur.profilePic + '" style="vertical-align: middle;"> </span>' +
                    '<h6><b>' + cur.firstName + ' ' + cur.lastName + '</b> </h6></center> </a> ' +
                    '<ul class="dropdown-menu animated fadeInLeft">' +
                    '<li><a href="javascript:void(0)" onclick="showProfile(' + i + ')"><i class="fa fa-user"></i> &nbsp;Profile</a></li>' +
                    '<li><a ref="javascript:void(0)" onclick="sendStudent(' + i + ')"><i class="fa fa-reply"></i>  &nbsp;Send to</a></li>' +
                    '<li><a href="javascript:void(0)" onclick="spotlightModal(' + i + ')"><i class="fa fa-lightbulb-o"></i>  &nbsp;Spotlight</a></li>' +
                    '</ul>' +
                    ' </li>' +
                    '</ul></div>';
            }
            }
            
            
            

            



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            
        
        
        
        
        
        
        
        
        
        
        
        
        
        }

    });




}




function sendStudent(index) {



    document.getElementById('sendStudentId').value = index;

    $('#sendStudentModal').modal('show');

}


function showProfile(index) {


    var StudentNameResponse = sessionStorage.getItem("studentListResp");

    var obj = JSON.parse(StudentNameResponse);

    var resultCode = obj.response.resultcode;
    var message = obj.response.message;

    var studentName = obj.response.studentNameListResult.studentList;

    var cur = studentName[index];



    $.ajax({
        url: webServerUrl,
        data: 'request=viewProfile&userId=' + cur.studentId,
        type: 'post',
        success: function(msg) {

            var loginJson = msg.trim();
            obj = JSON.parse(loginJson);
            var resultCode = obj.response.resultcode;
            var message = obj.response.message;


            if (resultCode == 1) {     	var userProfileDetails = obj.response.tokenForRegistrationResult.userProfileDetails[0];

            
       	 var proPicUrl = document.getElementById('proPicUrl');
            proPicUrl.innerHTML = '<img src="' + userProfileDetails.profilePic + '" class="img-circle">';
            
            var fullName = document.getElementById('fullName');
            fullName.innerHTML = userProfileDetails.firstName + " " + userProfileDetails.lastName;
            
            
           /*var role = sessionStorage.getItem("role");
           var userProfileDetails = obj.response.tokenForRegistrationResult.userProfileDetails[0];

          


           



           var mobile = document.getElementById('mobile');
           mobile.innerHTML = userProfileDetails.mobileNumber;

           var email = document.getElementById('email');
           email.innerHTML = userProfileDetails.emailId;

           var dob = document.getElementById('dob');
           dob.innerHTML = userProfileDetails.dob;
*/
           /*var address = document.getElementById('address');
           address.innerHTML =userProfileDetails.address;
           */




           $('#profileModal').modal('show');




            }




        }
    });




    $('#showProfileModal').modal('show');

}




function spotlightModal(index) {

    document.getElementById('spotStudentId').value = index;

    $('#spotlightModal').modal('show');

}


getClassStudents();




function sentToBreak(index) {

    var StudentNameResponse = sessionStorage.getItem("studentListResp");

    var obj = JSON.parse(StudentNameResponse);

    var resultCode = obj.response.resultcode;
    var message = obj.response.message;

    var studentName = obj.response.studentNameListResult.studentList;

    var cur = studentName[index];


    var divDyna = document.getElementById(cur.studentId);
    divDyna.innerHTML = 'fgnfgnfgnfg';



}


function assigntracker() {
	
	
	 
	 $.ajax({
      url: webServerUrl,
      data: 'request=getAssignmentTaskList&subject=Other',
      type: 'post',
      success: function(msg) 
      {
      	 
    	       var StudentNameResponse = msg.trim();
	        	 
	        	 var obj = JSON.parse(StudentNameResponse);
	        	 
	        	 var resultCode = obj.response.resultcode;
	        	 var message = obj.response.message;
	        	 
	        	  var assigntopic = obj.response.assignmentListResult.assignmentList;
	        	 
	        	 
	        	 var listOfAssign = document.getElementById("listOfAssign");
	        	 listOfAssign.innerHTML ="";
	        	 for (var i=0; i<assigntopic.length;i++)
	        	 {
	        		 
	        		 var cur = assigntopic[i];
	        		 
	        		
	        		 listOfAssign.innerHTML =  listOfAssign.innerHTML + '<option value="'+cur.assignmentTopic+'">'+cur.assignmentTopic+'</option>';

	        		 	 
	        		
	        		 
	        	 }
	    
     	 

	        	 listAssignStudents();
      
      
      
      
      
      
      
      
      
	        	   
      
      
      
      
      
      
      
      
      
      }

  });
    
    
    
    
    
    
    
    
    
    
    
    
    
    




}





function listAssignStudents(){
	

	   var StudentNameResponse = sessionStorage.getItem("studentListResp");

	    var obj = JSON.parse(StudentNameResponse);

	    var resultCode = obj.response.resultcode;
	    var message = obj.response.message;

	    var studentName = obj.response.studentNameListResult.studentList;
	    
	    var assignTracker = document.getElementById('assignTracker');
	    
	    
	    
	    var graph1='<div class="progress progress-sm progress-striped active m-t-xs m-b-none"> <div class="progress-bar progress-bar-success" data-toggle="tooltip" data-original-title="Mastered" style="width: 100%"></div> </div>';
	    
	    var graph2='<div class="progress progress-xs m-t-xs m-b-none"> <div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="getting It" style="width: 60%"></div> </div>';
	    
	    var graph3='<div class="progress progress-xs m-t-xs m-b-none"> <div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="Not Getting It" style="width: 20%"></div> </div>';
	    
	    var graph4='<div class="progress progress-xs m-t-xs m-b-none"> <div class="progress-bar progress-bar-danger" data-toggle="tooltip" data-original-title="Not Assessed" style="width: 5%"></div> </div>';
	    
	    
	    var graphs = [graph1, graph2,graph3,graph4];
	    
	   
	    
	    assignTracker.innerHTML ="";
	    for (var i = 0; i < studentName.length; i++) {

	        var cur = studentName[i];
	        assignTracker.innerHTML = assignTracker.innerHTML +'<tr>'+
	        '<td><b>' + cur.firstName + ' ' + cur.lastName + '</b></td>'+
	        '<td><div id="'+cur.studentId+'Assignment">' + graphs[Math.floor(Math.random() * (4 - 0) + 0)] + '</div></td>'+
	        '<td class="text-right"> <div class="btn-group"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-pencil"></i></a> <ul class="dropdown-menu pull-right">'+
	        '<li><a href="javascript:void(0)" onclick="changeAssignStatus1('+i+')">Not Assessed</a></li>'+ 
	        '<li><a href="javascript:void(0)" onclick="changeAssignStatus2('+i+')">Not Getting It</a></li>'+ 
	        '<li><a href="javascript:void(0)" onclick="changeAssignStatus3('+i+')">Getting It</a></li>'+
	        '<li><a href="javascript:void(0)" onclick="changeAssignStatus4('+i+')">Mastered</a></li></ul> </div> </td>'+
	        '</tr>';       
	        
	        
	        
	        
	        
	        
	        
	    
	    }





}

function changeAssignStatus1(index){
	
	 var StudentNameResponse = sessionStorage.getItem("studentListResp");

	    var obj = JSON.parse(StudentNameResponse);
        var resultCode = obj.response.resultcode;
	    var message = obj.response.message;
        var studentName = obj.response.studentNameListResult.studentList;
        
        var cur = studentName[index];
        
        
        var assignUser = document.getElementById(cur.studentId+'Assignment');
        assignUser.innerHTML = '<div class="progress progress-xs m-t-xs m-b-none"> <div class="progress-bar progress-bar-danger" data-toggle="tooltip" data-original-title="Not Assessed" style="width: 5%"></div> </div>';   
        
        
        
        
        
        
	
	
}


function changeAssignStatus2(index){
	
	 var StudentNameResponse = sessionStorage.getItem("studentListResp");

	    var obj = JSON.parse(StudentNameResponse);
       var resultCode = obj.response.resultcode;
	    var message = obj.response.message;
       var studentName = obj.response.studentNameListResult.studentList;
       
       var cur = studentName[index];
       
       
       var assignUser = document.getElementById(cur.studentId+'Assignment');
       assignUser.innerHTML = '<div class="progress progress-xs m-t-xs m-b-none"> <div class="progress-bar progress-bar-warning" data-toggle="tooltip" data-original-title="Not Getting It" style="width: 20%"></div> </div>';   
       
       
       
       
       
       
	
	
}


function changeAssignStatus3(index){
	
	 var StudentNameResponse = sessionStorage.getItem("studentListResp");

	    var obj = JSON.parse(StudentNameResponse);
       var resultCode = obj.response.resultcode;
	    var message = obj.response.message;
       var studentName = obj.response.studentNameListResult.studentList;
       
       var cur = studentName[index];
       
       
       var assignUser = document.getElementById(cur.studentId+'Assignment');
       assignUser.innerHTML = '<div class="progress progress-xs m-t-xs m-b-none"> <div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="getting It" style="width: 60%"></div> </div>';   
       
       
       
       
       
       
	
	
}


function changeAssignStatus4(index){
	
	 var StudentNameResponse = sessionStorage.getItem("studentListResp");

	    var obj = JSON.parse(StudentNameResponse);
       var resultCode = obj.response.resultcode;
	    var message = obj.response.message;
       var studentName = obj.response.studentNameListResult.studentList;
       
       var cur = studentName[index];
       
       
       var assignUser = document.getElementById(cur.studentId+'Assignment');
       assignUser.innerHTML = '<div class="progress progress-sm progress-striped active m-t-xs m-b-none"> <div class="progress-bar progress-bar-success" data-toggle="tooltip" data-original-title="Mastered" style="width: 100%"></div> </div>';   
       
       
       
       
       
       
	
	
}


