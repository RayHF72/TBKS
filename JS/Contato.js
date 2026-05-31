(function(){
  emailjs.init("cDeGmla5pGKKicn0f");
})();

document.getElementById("formEmail").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_ivm4t1b", "template_r6t5e4w", this)
    .then(function() {
      alert("Email enviado com sucesso!");
    }, function(error) {
      alert("Erro ao enviar: " + error.text);
    });
});