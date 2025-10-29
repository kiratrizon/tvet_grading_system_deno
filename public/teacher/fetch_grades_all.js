$(document).off('click', '#breakdownView').on('click', '#breakdownView', function() {
    const $btn = $(this);
    const showing = $btn.data('showing') || false;

    if (!showing) {
        $('.for-breakdown').show();
        $btn.text('Hide Breakdown');
    } else {
        $('.for-breakdown').hide();
        $btn.text('Show Breakdown');
    }

    // toggle and remember state
    $btn.data('showing', !showing);
});

$(document).off('click', '#releaseGrades').on('click', '#releaseGrades', function() {
    const $btn = $(this);
    const teacherSubjectId = $btn.data('teacher');
    const period = $btn.data('period');

    Swal.fire({
        title: 'Are you sure?',
        text: `You are about to release the grades. This cannot be undone.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, do it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'release_grades.php',
                type: 'POST',
                data: {
                    teacher_subject_id: teacherSubjectId,
                    period: period,
                    release: 1
                },
                success: function(response) {
                    if (response.trim() === 'success') {
                        Swal.fire({
                            title: `Released!`,
                            text: `The grades have been released successfully.`,
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        $('.criteria-tab[data-id="0"]').trigger('click');
                    } else {
                        Swal.fire('Error!', 'There was an error releasing the grades.', 'error');
                    }
                },
                error: function() {
                    Swal.fire('Error!', 'There was an error releasing the grades.', 'error');
                }
            });
        }
    });
});
