const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    var text = 'Olá, meu nome é:' + name + '! ' + message;
    var phoneNumber = '+5522997407901';
    
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(text);
    window.open(whatsappLink, '_blank');
  });