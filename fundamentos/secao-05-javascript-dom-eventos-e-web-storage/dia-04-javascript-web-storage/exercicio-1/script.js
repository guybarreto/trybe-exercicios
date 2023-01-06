// Loading stored settings
window.onload = () => {
  body.style.backgroundColor = localStorage.getItem('bgColor');
  body.style.fontFamily = localStorage.getItem('fontFamily');
  body.style.fontSize = localStorage.getItem('fontSize');
  body.style.color = localStorage.getItem('fontColor');
  body.style.lineHeight = localStorage.getItem('spacing');
};

// Element capture
const body = document.getElementsByTagName('body')[0];
const bgColorsList = document.querySelectorAll('#background-color button');
const fontFamilyList = document.querySelectorAll('#font-family button');
const fontSizeList = document.querySelectorAll('#font-size button');
const fontColorList = document.querySelectorAll('#font-color button');
const spacingList = document.querySelectorAll('#spacing button');

// Background color
const changeBgColor = () => {
  for (let index = 0; index < bgColorsList.length; index += 1) {
    const colorBtn = bgColorsList[index];
    colorBtn.addEventListener('click', (event) => {
      body.style.backgroundColor = event.target.innerHTML;
      localStorage.setItem('bgColor', event.target.innerHTML);
    });
  }
};
changeBgColor();

// Font family
const changeFontFamily = () => {
  for (let index = 0; index < fontFamilyList.length; index++) {
    const fontFamilyBtn = fontFamilyList[index];
    fontFamilyBtn.addEventListener('click', (event) => {
      body.style.fontFamily = event.target.innerHTML;
      localStorage.setItem('fontFamily', event.target.innerHTML);
    });
  }
};
changeFontFamily();

// Font size
const changeFontSize = () => {
  for (let index = 0; index < fontSizeList.length; index++) {
    const fontSizeBtn = fontSizeList[index];
    fontSizeBtn.addEventListener('click', (event) => {
      body.style.fontSize = event.target.innerHTML;
      localStorage.setItem('fontSize', event.target.innerHTML);
    });
  }
};
changeFontSize();

// Font color
const changeFontColor = () => {
  for (let index = 0; index < fontColorList.length; index++) {
    const fontColorBtn = fontColorList[index];
    fontColorBtn.addEventListener('click', (event) => {
      body.style.color = event.target.innerHTML;
      localStorage.setItem('fontColor', event.target.innerHTML);
    });
  }
};
changeFontColor();

// Spacing
const changeSpacing = () => {
  for (let index = 0; index < spacingList.length; index++) {
    const spacingBtn = spacingList[index];
    spacingBtn.addEventListener('click', (event) => {
      body.style.lineHeight = event.target.innerHTML;
      localStorage.setItem('spacing', event.target.innerHTML);
    });
  }
};
changeSpacing();
