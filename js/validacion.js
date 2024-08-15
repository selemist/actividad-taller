function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() { 
    //evento: con un click en el boton Registrarme (id="regBtn"), debe producirse lo siguiente:
    const checkBox = document.getElementById("terminos");
    const isChecked = checkBox.checked;

    if (isChecked) {
        showAlertSuccess();  
    } else {
        showAlertError();    
    }
});