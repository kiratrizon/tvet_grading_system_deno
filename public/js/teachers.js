$(".update").click(function () {
    // alert("akjshgdkajshdkajshdkajhd");
    var request = $.ajax({
        url: "../admin/editteacher.php",
        method: "GET",
        data: {
            id: this.value
        },
        dataType: "json"
    });

    request.done(function( msg ) {
        // console.log(msg);
        // alert(msg);
        $("#id").val(msg.t_id);
        let fullName = msg.t_name || "";
        let nameParts = fullName.split(" ");

        let firstName = nameParts[0] || "";
        let lastName = nameParts.slice(1).join(" ") || ""; 

        $("#mefname").val(firstName);
        $("#melname").val(lastName);


        if (msg.t_gender === 'male') {
            $('#memale').prop('checked', true);
        }else {
            $('#mefemale').prop('checked', true);
        }

        $("#oldemail").val(msg.t_user_name)
        $("#meusername").val(msg.t_user_name)
  })
})


$(".view").click(function () {
    // alert("akjshgdkajshdkajshdkajhd");
    var request = $.ajax({
        url: "../admin/editteacher.php",
        method: "GET",
        data: {
            id: this.value
        },
        dataType: "json"
    });

    request.done(function( msg ) {
        // console.log(msg);
        // alert(msg);
        $("#id").val(msg.t_id);
        let fullName = msg.t_name || "";
        let nameParts = fullName.split(" ");

        let firstName = nameParts[0] || "";
        let lastName = nameParts.slice(1).join(" ") || ""; 

        $("#mvfname").val(firstName);
        $("#mvlname").val(lastName);


        if (msg.t_gender === 'male') {
            $('#mvmale').prop('checked', true);
        }else {
            $('#mvfemale').prop('checked', true);
        }

        $("#oldemail").val(msg.t_user_name)
        $("#mvusername").val(msg.t_user_name)
  })
})