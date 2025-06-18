$(document).ready(function () {
    //regresar al menu donde esta la imagen y ocultando el fomulario y la tabla del beneficiario
    $("#MenuInicio").click(function (event) {
        $("#divInicio").show(1000);
        $("#divNosotros").hide(1000);
        $("#divProteccionCivil").hide(1000);
        $("#divContacto").hide(1000);
    });

    $("#MenuNosotros").click(function (event) {
        $("#divInicio").hide(1000);
        $("#divNosotros").show(1000);
        $("#divProteccionCivil").hide(1000);
        $("#divContacto").hide(1000);
    });

    $("#MenuProteccionCivil").click(function (event) {
        $("#divInicio").hide(1000);
        $("#divNosotros").hide(1000);
        $("#divProteccionCivil").show(1000);
        $("#divContacto").hide(1000);
    });

    $("#MenuContacto").click(function (event) {
        $("#divInicio").hide(1000);
        $("#divNosotros").hide(1000);
        $("#divProteccionCivil").hide(1000);
        $("#divContacto").show(1000);
    });

    $("#MenuServ1").click(function (event) {
        $("#divInicio").hide(1000);
        $("#divNosotros").hide(1000);
        $("#divProteccionCivil").hide(1000);
        $("#divContacto").hide(1000);
        $("#divServ1").show(1000);
        $("#divServ2").hide(1000);
    });

    $("#MenuServ2").click(function (event) {
        $("#divInicio").hide(1000);
        $("#divNosotros").hide(1000);
        $("#divProteccionCivil").hide(1000);
        $("#divContacto").hide(1000);
        $("#divServ1").hide(1000);
        $("#divServ2").show(1000);
    });

    $("#formulario").submit(function(event) {
        event.preventDefault();  // Esto evita que el formulario se envíe de manera tradicional
    });

    $('#sidebarCollapse').click(function (event) {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });

    

});

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

