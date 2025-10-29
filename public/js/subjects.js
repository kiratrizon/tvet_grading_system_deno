$(".update").click(function () {
    // alert("akjshgdkajshdkajshdkajhd");
    var request = $.ajax({
        url: "../admin/editsubjects.php",
        method: "GET",
        data: {
            id: this.value
        },
        dataType: "json"
    });

    request.done(function( msg ) {
        // console.log(msg);
        // alert(msg);
        $("#me_s_id").val(msg.s_id);

        $('#meyear').val(msg.s_year_level);

        // Semester
        $('#mesemester').val(msg.s_semester);

        // Course
        $('#mecourse').val(msg.s_course);

        // alert(msg.s_course_code);

        $("#mecourse_code").val(msg.s_course_code);
        $("#medescriptive_title").val(msg.s_descriptive_title);
        $("#menth").val(msg.s_nth);
        $("#meunits").val(msg.s_units);
        $("#melee").val(msg.s_lee);
        $("#melab").val(msg.s_lab);
        $("#mecovered_qualification").val(msg.s_covered_qualification);
        $("#mepre_requisite").val(msg.s_pre_requisite);
  })
})

$(".view").click(function () {
    // alert("akjshgdkajshdkajshdkajhd");
    var request = $.ajax({
        url: "../admin/editsubjects.php",
        method: "GET",
        data: {
            id: this.value
        },
        dataType: "json"
    });

    request.done(function( msg ) {
        // console.log(msg);
        // alert(msg);

        // Course
        var course = msg.course_name;
        var updateCourse = $('#mvcourse');

        updateCourse.append(`<option value='${course}' readonly selected hidden>${course}</option>`);
        updateCourse.val(course);

        // Semester
        var semester = msg.s_semester;
        var updateSemester = $('#mvsemester');

        updateSemester.append(`<option value='${semester}' readonly selected hidden>${semester}</option>`);
        updateSemester.val(semester);

        // yearl Level
        var year = msg.s_year_level;
        var updateYear = $('#mvyear');
        updateYear.append(`<option value='${year}' readonly selected hidden>${year}</option>`);
        updateYear.val(year);

        // alert(msg.s_course_code);

        $("#mvcourse_code").val(msg.s_course_code);
        $("#mvdescriptive_title").val(msg.s_descriptive_title);
        $("#mvnth").val(msg.s_nth);
        $("#mvunits").val(msg.s_units);
        $("#mvlee").val(msg.s_lee);
        $("#mvlab").val(msg.s_lab);
        $("#mvcovered_qualification").val(msg.s_covered_qualification);
        $("#mvpre_requisite").val(msg.s_pre_requisite);
  })
})

