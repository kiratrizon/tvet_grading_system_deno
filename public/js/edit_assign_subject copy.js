$(".update").click(function () {
var request = $.ajax({
    url: "../admin/edit_assigned_subject.php",
    method: "GET",
    data: { id: $(this).data("id") },
    dataType: "json"
});

request.done(function (msg) {
    
    // alert(msg.id);
    // console.log(msg);

    $("#t_id").val(msg.id); 
    $("#teacher_name").val(msg.teacher_id); 
    $("#mecourse").val(msg.s_course).trigger('change'); 
    
    
    $("#meyear_level").val(msg.year_level).prop('disabled', false).trigger('change'); 
    $("#mesemester").val(msg.semester).prop('disabled', false); 
    $("#mesy").val(msg.school_year);
    $("#mesubject").val(msg.s_descriptive_title).prop('disabled', false);

     // Schedule
    $("#meschedule_day").val(msg.schedule_day);
    $("#meschedule_time_start").val(msg.schedule_time_start);
    $("#meschedule_time_end").val(msg.schedule_time_end);
});
});

// Handle course change
$("#mecourse").change(function() {
let course = $(this).val();
$("#meyear_level").prop("disabled", false);
$.ajax({
    url: "../admin/get_year_levels.php",
    method: "POST",
    data: { course: course },
    success: function(response) {
        $("#meyear_level").html(response);
    }
});
});

// Handle year level change
$("#meyear_level").change(function() {
let course = $("#mecourse").val();
let year_level = $(this).val();
$("#mesemester").prop("disabled", false);
$.ajax({
    url: "../admin/get_semesters.php",
    method: "POST",
    data: { course: course, year_level: year_level },
    success: function(response) {
        $("#mesemester").html(response);
    }
});
});

// Handle semester change
$("#mesemester").change(function() {
let course = $("#mecourse").val();
let year_level = $("#meyear_level").val();
let semester = $(this).val();
$("#mesubject").prop("disabled", false);
$.ajax({
    url: "../admin/get_subjects.php",
    method: "POST",
    data: { course: course, year_level: year_level, semester: semester },
    success: function(response) {
        $("#mesubject").html(response);
    }
});
});



$(".view").click(function () {
var request = $.ajax({
    url: "../admin/edit_assigned_subject.php",
    method: "GET",
    data: { id: $(this).data("id") },
    dataType: "json"
});

request.done(function (msg) {
    
    // alert(msg.id);

    
    // console.log(msg);
    $("#mvteacher_name").val(msg.t_name); 
    $("#mvcourse").val(msg.course_name || msg.s_course); 
    $("#mvssubject").val(msg.s_descriptive_title); 
    $("#mvyearlevel").val(msg.s_year_level);
    $("#mvschoolyear").val(msg.school_year);
    $("#mvsemester").val(msg.s_semester);
    $("#mvassigned").val(msg.assigned_date);

// alert(msg.schedule_day)
     // Schedule
    $("#mvschedule_day").val(msg.schedule_day);
    $("#mvschedule_time_start").val(msg.schedule_time_start);
    $("#mvschedule_time_end").val(msg.schedule_time_end);
    
});
});