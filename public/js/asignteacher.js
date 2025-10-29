$(document).ready(function() {
    $("#course").change(function() {
        let course = $(this).val();
        $("#year_level").prop("disabled", false);
        $.ajax({
            url: "../admin/get_year_levels.php",
            method: "POST",
            data: { course: course },
            success: function(response) {
                $("#year_level").html(response);
            }
        });
    });

    $("#year_level").change(function() {
        let course = $("#course").val();
        let year_level = $(this).val();
        $("#semester").prop("disabled", false);
        $.ajax({
            url: "../admin/get_semesters.php",
            method: "POST",
            data: { course: course, year_level: year_level },
            success: function(response) {
                $("#semester").html(response);
            }
        });
    });

    $("#semester").change(function() {
        let course = $("#course").val();
        let year_level = $("#year_level").val();
        let semester = $(this).val();
        $("#subject").prop("disabled", false);
        $.ajax({
            url: "../admin/get_subjects.php",
            method: "POST",
            data: { course: course, year_level: year_level, semester: semester },
            success: function(response) {
                $("#subject").html(response);
            }
        });
    });
});