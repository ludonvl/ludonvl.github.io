$(function() {
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/contact@ludovicnouvel.fr", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(data){
                // Enable button & show success message
                $("#btnSubmit").attr("disabled", false);
                $('#success').html("<div class='alert alert-info'>");
                $('#success > .alert-info').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-info')
                    .append("<strong>Votre message a été envoyé avec succes. </strong>");
                $('#success > .alert-info')
                    .append('</div>');

                //clear all fields
                $('#contactForm').trigger("reset");
            },
            error: function(err) {
                // Fail message
                console.log(err);
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
