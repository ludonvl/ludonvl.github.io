$(function() {
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/ludovic.nouvel@epitech.eu", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(data){
                // Enable button & show success message
                $("#btnSubmit").attr("disabled", false);
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Votre message a été envoyé avec succes. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#contactForm').trigger("reset");
            },
            error: function(err) {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Désolé, il semblerai que mon serveur mail ne répond pas. Essaie plus tard !");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
            }
        });
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
