import './style.css';
import Swal from 'sweetalert2';

// Getting elements
const heroImg = document.getElementById('hero-img');
const heroName = document.getElementById('hero-name');
const sortBtn = document.getElementById('sortBtn');

// Variables to access the API
const acessToken = 5910149375738156;
const baseURL = `https://superheroapi.com/api.php/${acessToken}`;
const maxHeroes = 731;
const randomHeroID = () => Math.floor(Math.random() * maxHeroes);

sortBtn.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(`${baseURL}/${randomHeroID()}`)
    .then((response) => response.json())
    .then((data) => {
      heroImg.src = data.image.url;
      heroName.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    }));
});
