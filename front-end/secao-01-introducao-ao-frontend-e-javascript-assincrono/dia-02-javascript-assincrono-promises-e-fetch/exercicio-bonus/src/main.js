import './style.css';

// Getting html elements
const dogBtn = document.getElementById('dog-btn');
const catBtn = document.getElementById('cat-btn');
const surpriseBtn = document.getElementById('surprise-btn');
const petImage = document.getElementById('pet-img');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      petImage.src = data.message;
    });
});

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      petImage.src = data.file;
    });
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
  ])
    .then((response) => response.json())
    .then((data) => {
      petImage.src = data.file || data.message;
    });
});
