function mySwitch(){
    document.getElementById('demo').style.display = 'none';
    document.getElementById('dem').style.display = 'none';
    document.getElementById('form').style.display = 'flex';
}

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    var username = document.getElementById('user').value;

  if (username == 'Danielle'){}
  else{
    e.preventDefault();
    alert('Sorry that is not the name of the Birthday Girl. Try again');
  }
})