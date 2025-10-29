$(".update").click(function () {
    // alert("akjshgdkajshdkajshdkajhd");
    var request = $.ajax({
        url: "../teacher/editgrades.php",
        method: "GET",
        data: {
            id: this.value
        },
        dataType: "json"
    });

    request.done(function( msg ) {
        // console.log(msg);
        // alert(msg);
        $('#grade_id').val(msg.id)
        $('#course_code').val(msg.course_code)
        $('#descriptive').val(msg.descriptive_title)
        $('#year').val(msg.year_level)
        $('#semester').val(msg.semester)
        $('#name').val(msg.name)
        $('#rating').val(msg.final_rating)
        $('#remarks').val(msg.remarks)
  })
})
$(".view").click(function () {
    // alert("akjshgdkajshdkajshdkajhd");
    var request = $.ajax({
        url: "../teacher/editgrades.php",
        method: "GET",
        data: {
            id: this.value
        },
        dataType: "json"
    });

    request.done(function( msg ) {
        // console.log(msg);
        // alert(msg);
        $('#mvcourse_code').val(msg.course_code)
        $('#mvdescriptive').val(msg.descriptive_title)
        $('#mvyear').val(msg.year_level)
        $('#mvsemester').val(msg.semester)
        $('#mvname').val(msg.name)
        $('#mvrating').val(msg.final_rating)
        $('#mvremarks').val(msg.remarks)
  })
})