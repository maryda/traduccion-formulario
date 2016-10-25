var textoDos=document.getElementById("form-signin-heading");
textoDos.innerHTML="Por favor inicia sesión";

var email= document.getElementById("inputEmail").placeholder="Correo Electronico";

var contr=document.getElementById("inputPassword").placeholder="Contraseña";


var check=document.getElementsByTagName("span")[0];
check.textContent="Recordar datos";


var btn=document.getElementsByTagName("button")[0];
btn.textContent="Iniciar Sesión";
