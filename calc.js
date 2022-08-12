function getComputedValue(){
  return document.getElementById('computed-value').innerText
}
function printComputedValue(num){
  document.getElementById('computed-value').innerText = num 
}

function getOutputValue(){
  return document.getElementById('output-value').innerText
}
function printOutputValue(num){
  if(num == ''){
    document.getElementById('output-value').innerText = num 
  }else{
    document.getElementById('output-value').innerText = getFormattedNumber(num) 
  }
}
// function to add comas between the numbers
function getFormattedNumber(num){
  if(num == '-'){ 
    return ''
  }
  let n = Number(num)
  let value = n.toLocaleString('en')
  return value 
}
//function to remove the comas since they're not a numbers
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''))
}

// adding functionality to the operators
let operator = document.getElementsByClassName('operator')
  for(let i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
      if(this.id == 'clear'){
        printComputedValue('')
        printOutputValue('')
      }
      else if(this.id == 'backspace'){
        let outputValue = reverseNumberFormat(getOutputValue()).toString()
        if(outputValue){ //if output is a value and not a string
          outputValue = outputValue.substr(0, outputValue.length-1)
          printOutputValue(outputValue)
        }
      }
      else{
        let outputValue = getOutputValue()
        let computedValue = getComputedValue()
        
        if(outputValue == '' && computedValue !== ''){
          if(isNaN(computedValue[computedValue.length-1])){
            computedValue = computedValue.substr(0, computedValue.length-1)
          }
        }
        if(outputValue !== '' || computedValue !== ''){
          // condition? true:false
          outputValue = outputValue == ''?
          outputValue:reverseNumberFormat(outputValue)
          computedValue = computedValue + outputValue
          if(this.id == '='){
            let result = eval(computedValue)
            printOutputValue(result)
            printComputedValue('')
          }else{
            computedValue = computedValue + this.id
            printComputedValue(computedValue)
            printOutputValue('')
          }
        }
      }
    })
  }

// adding functionality to the numbers
let number = document.getElementsByClassName('number')
  for(let i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
     let outputValue = reverseNumberFormat(getOutputValue())
     if(outputValue !== NaN){ // if output 'is' a number
        outputValue = outputValue + this.id
        printOutputValue(outputValue)
      }
    })
  }