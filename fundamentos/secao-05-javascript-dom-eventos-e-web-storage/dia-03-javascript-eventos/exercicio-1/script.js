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
  const nextday = decemberDaysList[index + 1];
  const newLiTag = document.createElement('li');
  newLiTag.innerHTML = day;
  newLiTag.className = 'day';

  if (day == 24 || day == 25 || day == 31) {
    newLiTag.className += ' holiday';
  }
  if (
    day == 2 ||
    day == 9 ||
    day == 16 ||
    day == 23 ||
    (day == 30 && nextday != 1)
  ) {
    newLiTag.className += ' friday';
  }
  ulDays.appendChild(newLiTag);
}

// 2.
const createHolidaysButton = (string) => {
  const newHolidaysButton = document.createElement('button');
  newHolidaysButton.innerHTML = string;
  newHolidaysButton.id = 'btn-holiday';
  const fatherNewHolidaysButton =
    document.getElementsByClassName('buttons-container')[0];
  fatherNewHolidaysButton.appendChild(newHolidaysButton);
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

// 4.
const createFridayButton = (string) => {
  const newFridayButton = document.createElement('button');
  newFridayButton.innerHTML = string;
  newFridayButton.id = 'btn-friday';
  const fatherNewFridayButton =
    document.getElementsByClassName('buttons-container')[0];
  fatherNewFridayButton.appendChild(newFridayButton);
};
createFridayButton('Sexta-feira');

// 5.
const fridaysTextBackup = [];

const backingUpFridaysText = () => {
  const fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index += 1) {
    const friday = fridays[index];
    fridaysTextBackup.push(friday.innerText);
  }
};
backingUpFridaysText();

const changeFridaysText = () => {
  const fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index += 1) {
    const friday = fridays[index];
    friday.innerText != 'Sextou! o/'
      ? (friday.innerText = 'Sextou! o/')
      : (friday.innerText = fridaysTextBackup[index]);
  }
};
const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', changeFridaysText);

// 6.
const daysArray = document.getElementsByClassName('day');

const zoom = (event) => {
  if (event.type == 'mouseenter') {
    // mouseenter, zoom in and bold
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = 'bold';
  } else {
    // mouseleave, zoom out and no bold
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = 'normal';
  }
};

const zoomOut = (event) => {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = 'normal';
};

for (let index = 0; index < daysArray.length; index += 1) {
  const day = daysArray[index];
  day.addEventListener('mouseenter', zoom);
  day.addEventListener('mouseleave', zoom);
}

// 7.
const divMyTasks = document.getElementsByClassName('my-tasks')[0];
const addTask = (task) => {
  const newSpanTag = document.createElement('span');
  newSpanTag.innerHTML = task;
  const fatherNewSpanTag = divMyTasks;
  fatherNewSpanTag.appendChild(newSpanTag);
};
addTask('Projeto:');

// 8.
const taskColor = (color) => {
  const newDivTag = document.createElement('div');
  newDivTag.className = 'task';
  newDivTag.style.backgroundColor = color;
  const fathernewDivTag = divMyTasks;
  fathernewDivTag.appendChild(newDivTag);
};
taskColor('green');
