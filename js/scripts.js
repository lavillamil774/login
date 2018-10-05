function openP(evt, pestana) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(pestana).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function registroUsuario(){

 var email=document.getElementById("idEmail2").value;
 var nombre=document.getElementById("idNombre").value;
 var telefono=document.getElementById("idTelefono").value;
 var clave2=document.getElementById("idClave2").value;
 var repetidaClave=document.getElementById("idRepetirClave").value;


if (!email=="" && !nombre=="" && !telefono=="" && !clave2=="" ) {

 if (clave2==repetidaClave) {

 alert("Usuario registrado");
  
 } else {

 alert("Repita clave por favor");
  
 }
  } else {
 alert("Digite los campos por favor ");


}

}

function login(){

  var email=document.getElementById("idEmail").value
  var clave=document.getElementById("idClave").value;

if (!email=="" && !clave=="") {

  alert("Verificando por favor espere...");

} else {
  alert("Digite todos los campos");
}

}