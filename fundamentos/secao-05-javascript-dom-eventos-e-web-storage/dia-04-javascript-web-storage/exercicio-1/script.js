// Captura de elementos
const body = document.getElementsByTagName('body')[0];
const bgColorsList = document.querySelectorAll('#background-color button');
const fontFamilyList = document.querySelectorAll('#font-family button');
const fontSizeList = document.querySelectorAll('#font-size button');
const fontColorList = document.querySelectorAll('#font-color button');
const spacingList = document.querySelectorAll('#spacing button');

const changeBgColor = () => {
  for (let index = 0; index < bgColorsList.length; index += 1) {
    const colorBtn = bgColorsList[index];
    colorBtn.addEventListener('click', (event) => {
      body.style.backgroundColor = event.target.innerHTML;
    });
  }
};
changeBgColor();

const changeFontFamily = () => {
  for (let index = 0; index < fontFamilyList.length; index++) {
    const fontFamilyBtn = fontFamilyList[index];
    fontFamilyBtn.addEventListener('click', (event) => {
      body.style.fontFamily = event.target.innerHTML;
    });
  }
};
changeFontFamily();

const changeFontSize = () => {
  for (let index = 0; index < fontSizeList.length; index++) {
    const fontSizeBtn = fontSizeList[index];
    fontSizeBtn.addEventListener('click', (event) => {
      body.style.fontSize = event.target.innerHTML;
    });
  }
};
changeFontSize();

const changeFontColor = () => {
  for (let index = 0; index < fontColorList.length; index++) {
    const fontColorBtn = fontColorList[index];
    fontColorBtn.addEventListener('click', (event) => {
      body.style.color = event.target.innerHTML;
    });
  }
};
changeFontColor();
