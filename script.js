const calcBody = document.querySelector('.calculator');
const calculating = {
  arg_1: '',
  arg_2: '',
  option: ''
}
const numberDisplay = document.querySelector('.display-numbers');
const resultDisplay = document.querySelector('.display-result');
calcBody.addEventListener('click',event => {

  if(event.target.id === 'clear_ALL'){
    clearArg();
    clearDisplay(numberDisplay);
  }

  if(event.target.id === 'clear_PARTLY'){
    const text = numberDisplay.innerText;
    numberDisplay.innerText = text.substring(0, text.length - 1);
    if(numberDisplay.innerText === '') clearArg();
  }

  if(event.target.classList.contains('button__calc')){
    numberDisplay.innerText += event.target.innerText;
  }

  if(event.target.id === 'number__dot' && !numberDisplay.innerText.includes(".") && numberDisplay.innerText !== ''){
    numberDisplay.innerText += event.target.innerText;
  }


  if(event.target.id === 'option' || event.target.id === 'result-btn'  && numberDisplay.innerText !== ''){
    if(calculating.arg_1 === '') {
      calculating.arg_1 = numberDisplay.innerText;
    }
    else{
      calculating.arg_2 = numberDisplay.innerText;
    }
    clearDisplay(numberDisplay);
    if(event.target.id !== 'result-btn'){
      calculating.option = event.target.innerText;
      showResult();
    } 
    if(calculating.arg_1 !== '' && calculating.arg_2 !== '' && calculating.option !== '') calc(numberDisplay);
  }

})


const clearDisplay = display => display.innerText = ''
const calc = display => {
  let result;
  switch(calculating.option){
    case '+': result = ((calculating.arg_1*1) + (calculating.arg_2*1))+'';break;
    case '-': result = ((calculating.arg_1*1) - (calculating.arg_2*1))+'';break;
    case '*': result = ((calculating.arg_1*1) * (calculating.arg_2*1))+'';break;
    case '/': result = ((calculating.arg_1*1) / (calculating.arg_2*1))+'';break;
  }
  display.innerText = result;
  calculating.arg_1 = result;
  calculating.arg_2 = '';
  showResult();
  clearDisplay(display);
}
const clearArg = () => {
  for (const item in calculating) {
    calculating[item] = '';
  }
  resultDisplay.innerText = '';
}
const showResult = () => resultDisplay.innerText = "Result: " + calculating.arg_1 + ' ' + calculating.option;