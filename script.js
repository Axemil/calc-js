const calcBody = document.querySelector('.calculator');
const calculating = {
  arg_1: 0,
  arg_2: 0,
  option: ''
}
calcBody.addEventListener('click',event => {
  const numberDisplay = document.querySelector('.display');
  if(event.target.classList.contains('button__calc')){
    numberDisplay.innerHTML += event.target.innerHTML;
  }
  if(event.target.id === 'clear_ALL'){
    calculating.arg_1 = 0;
    calculating.arg_2 = 0;
    calculating.option = '';
    clearDisplay(numberDisplay);
  }
  if(event.target.id === 'clear_PARTLY'){
    const text = numberDisplay.innerHTML;
    numberDisplay.innerHTML = text.substring(0, text.length - 1);
  }
  if(event.target.id === 'number__dot' && !numberDisplay.innerHTML.includes(".") && numberDisplay.innerHTML !== ''){
    numberDisplay.innerHTML += event.target.innerHTML;
  }
  if(event.target.id === 'option' && numberDisplay.innerHTML !== ''){
    calculating.arg_1 = numberDisplay.innerHTML;
    calculating.option = event.target.innerHTML;
    clearDisplay(numberDisplay);
  }
})
const clearDisplay = display => display.innerHTML = ''
