document.getElementById('contactForm').onsubmit=function(e){
e.preventDefault();
document.getElementById('formMsg').textContent='Message envoyé avec succès';
};