// handle toggle button for raw <-> percentage
$(document).off('click', '#toggleView').on('click', '#toggleView', function() {
    const $btn = $(this);
    const showingRaw = $btn.data('raw') || false;

    if (!showingRaw) {
        $(".grade-raw").show();
        $(".grade-percentage").hide();
        $btn.text("Percentage");
    } else {
        $(".grade-raw").hide();
        $(".grade-percentage").show();
        $btn.text("Raw");
    }

    $btn.data('raw', !showingRaw);
});

// handle grade input save
$(document).off('keydown', 'input[class*="grade-input"]').on('keydown', 'input[class*="grade-input"]', function(e) {
    if (e.which === 13 && !e.shiftKey) {
        e.preventDefault();
        const type = $(this).attr('name'); // 'raw' or 'percentage'
        const classPrefix = `${type}-`;
        const matchingClass = Array.from(this.classList).find(cls => cls.startsWith(classPrefix));
        const keyIndex = matchingClass ? matchingClass.split('-')[1] : null;
        const rawClass = `raw-${keyIndex}`;
        const percentageClass = `percentage-${keyIndex}`;

        const $form = $(this).closest('form');
        const formData = $form.serializeArray();
        formData.push({ name: 'type', value: type });

        const relesed = $(this).data('released') == 1;

        if (!relesed){
            $.ajax({
                url: 'save_grade.php',
                method: 'POST',
                data: formData,
                success: function(response) {
                    const data = JSON.parse(response);
                    const totalCellClass = `.total-${keyIndex}`;
                    const percentageTotalScore = (data.total_items > 0) ? (data.total_score / data.total_items) * 100 : 0;
                    const weightedScore = percentageTotalScore * (data.percentageOfCriterion / 100);

                    $(`input.${rawClass}`).val(data.raw_score);
                    $(`input.${percentageClass}`).val(data.percentage_score);
                    $(totalCellClass).html(`((${data.total_score}/${data.total_items})x100)x${data.percentageOfCriterion}% = ${weightedScore.toFixed(2)}`);

                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Score saved successfully!',
                        timer: 1500,
                        showConfirmButton: false
                    });
                },
                error: function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to save score. Please try again.'
                    });
                }
            });
        }
        
    }
});
