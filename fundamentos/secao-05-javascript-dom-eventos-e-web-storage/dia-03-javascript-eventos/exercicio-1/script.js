const createDaysOfTheWeek = () => {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1.
const decemberDaysList = [
  27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const ulDays = document.getElementById('days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const day = decemberDaysList[index];
  const newLiTag = document.createElement('li');
  newLiTag.innerHTML = day;
  newLiTag.className = 'day';

  if (day == 24 || day == 25 || day == 31) {
    newLiTag.className += ' holiday';
  }
  if (day == 4 || day == 11 || day == 18 || day == 25) {
    newLiTag.className += ' friday';
  }
  ulDays.appendChild(newLiTag);
}

// 2.
const createHolidaysButton = (string) => {
  const newHolidaysButton = document.createElement('button');
  newHolidaysButton.innerHTML = 'Feriados';
  newHolidaysButton.id = 'btn-holiday';
  const fatherHolidaysButton =
    document.getElementsByClassName('buttons-container')[0];
  fatherHolidaysButton.appendChild(newHolidaysButton);
};
createHolidaysButton('Feriados');

// 3.
const changeDaysBackground = () => {
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    const day = holidays[index];
    day.style.backgroundColor != 'white'
      ? (day.style.backgroundColor = 'white')
      : (day.style.backgroundColor = 'rgb(238,238,238)');
  }
};
const holidaysButton = document.getElementById('btn-holiday');
holidaysButton.addEventListener('click', changeDaysBackground);
