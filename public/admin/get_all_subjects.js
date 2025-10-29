$(document).on('click', '.view-student', function() {
    var id = $(this).data('id');
    var name = $(this).data('name');
    var subjects = $(this).data('subjects');
    const program = $(this).data('program');
    const yearLevel = $(this).data('year-level');
    const semester = $(this).data('semester');
    const schoolYear = $(this).data('school-year');
    // Populate the modal
    $('#modalStudentName').text(name);
    $('#modalStudentProgramYear').text(`${yearLevel} - ${program}`);
    $("#modalStudentSemester").text(semester);
    $("#modalStudentSchoolYear").text(schoolYear)

    // ajax
    $.ajax({
        "url":"get_student_final_average.php",
        method:"post",
        data: {
            id, subjects
        },
        success:function(response){
            $('#modalStudentGrades').html(response)
        }
    })


    // Show the modal manually
    var myModal = new bootstrap.Modal(document.getElementById('studentModal'));
    myModal.show();
});
