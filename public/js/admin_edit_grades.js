$(document).on("click", ".update", function () {
    let gradeId = $(this).data("id");

    console.log("Fetching data for ID:", gradeId);

    $.ajax({
        url: "../admin/editgrades.php",
        method: "GET",
        data: { id: gradeId },
        dataType: "json",
        success: function (msg) {
            // alert(msg.name);
            if (msg.error) {
                alert(msg.error);
            } else {
                $("#grade_id").val(msg.id);
                $("#course_code").val(msg.course_code);
                $("#descriptive").val(msg.descriptive_title);
                $("#year").val(msg.year_level);
                $("#semester").val(msg.semester);
                $("#name").val(msg.name);
                $("#rating").val(msg.final_rating);
                $("#remarks").val(msg.remarks);
            }
        },
        error: function () {
            alert("Error fetching data. Please try again.");
        },
    });
});
