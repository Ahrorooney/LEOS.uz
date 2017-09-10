$(document).ready(function()
{
	"use strict";
	
	/*-------------------------------Task functions-------------------------------*/
	
	$("#tag_list > button").click(function()
	{
		$("#input_Task_Tags").val($("#input_Task_Tags").val() + $(this).text());
		$(this).attr("disabled");
	});
	
	var task_title = "Game for Windows OS";
	var task_tags = "#C++ #designer #3D #database";
	var task_author = "Khikmet Bakhadirov";
	var task_time = "12-12-2017";
	var membr_num = 1;
	var frs_name = "<div class='form-group'><label class='col-sm-4 control-label'>First Name</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='First Name'></div></div>";
	var sec_name = "<div class='form-group'><label class='col-sm-4 control-label'>Second Name</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='Second Name'></div></div>";
	var phn_number = "<div class='form-group'><label class='col-sm-4 control-label'>Phone number</label><div class='col-sm-8'><input type='text' class='form-control' placeholder='+998901234567'></div></div>";
	var email_add = "<div class='form-group' id='email'><label class='col-sm-4 control-label'>Email</label><div class='col-sm-8'><input type='email' class='form-control' placeholder='example@mail.com'></div></div>";
	
	
	$("#id_card").click(function()
	{
			$("#list_card").append("<div class='task_card col-lg-4 col-md-4 col-sm-4 col-xs-4'><div class='task_card_img col-lg-3 col-md-3 col-sm-3 col-xs-3'><a href='#'><img src='images/MediaObj_Placeholder.png' alt='#'></a></div><div class='task_card_body col-lg-9 col-md-9 col-sm-9 col-xs-9'><div class='task_card_head'><p>"+ task_title +"</p></div>"+ task_tags +"</div><div class='task_card_footer col-lg-12 col-md-12 col-sm-12 col-xs-12'><div class='col-lg-7 col-md-7 col-sm-7 col-xs-7'><strong>"+ task_author +"</strong></div><div class='col-lg-5 col-md-5 col-sm-5 col-xs-5'><strong>"+ task_time +"</strong></div></div></div>");
	});
	$("#list").click(function()
	{
			$("#list_card").append("<div class='task_card col-lg-6 col-md-6 col-sm-6 col-xs-6'><div class='task_card_body col-lg-6 col-md-6 col-sm-6 col-xs-6'><div class='task_card_head'>"+ task_title +"</div>"+ task_tags +"</div><div class='task_card_footer col-lg-5 col-md-5 col-sm-5 col-xs-5'><p><strong>"+ task_author +"</strong></p><strong>"+ task_time +"</strong></div></div>");
	});
	
	/*-------------------------------Profile functions-------------------------------*/
	
	$("#add_member").click(function()
	{
		membr_num++;
		var member = "<div class='form-group'><label class='col-sm-4 control-label'>Team member №"+ membr_num +"</label><div class='col-sm-8'><hr></div></div>";
		$(this).before(member + frs_name + sec_name + email_add + phn_number);
	});
	
	if($("#teamInfo").html() === "")
	{
		$("#find_leave_Team").text("Find team");
	} else 
	{
		$("#find_leave_Team").text("Leave team");
	}
	
	$("#input_First_Name").attr("value",$("#first_name").text());
	$("#input_Second_Name").attr("value",$("#second_name").text());
	$("#input_Email").attr("value",$("#email").text());
	$("#input_Phone_Number").attr("value",$("#phone_number").text());
	$("#input_Study_place").attr("value",$("#place_of_study").text());
	$("#input_work_place").attr("value",$("#place_of_work").text());
	$("#input_Graduation_Date").attr("value",$("#date").text());
	$("#input_Occupation").attr("value",$("#occupation").text());
	$("#input_skills").text($("#skills").text());
	$("#input_bio").text($("#bio").text());
});