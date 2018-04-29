document.getElementById('navBroh').addEventListener('mouseleave', navCollapse);

function navCollapse(){
  console.log('Navbar collapse trigger');
  const navbarDisplay = document.getElementById('navbarSupportedContent');
  navbarDisplay.classList.remove('show');
}

document.querySelector('#subscribeList').addEventListener('submit', function(e){
  const name = document.querySelector('#name').value,
        email = document.querySelector('#email').value,
        contact = document.querySelector('#reasonForContact').value;
  console.log(name, email, contact);
});