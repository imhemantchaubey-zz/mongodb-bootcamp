percentage = parseInt(prompt('Enter your percentage: '))
if(percentage >= 75){
  alert('1st class with distinction');
} else if(percentage > 60){
  alert('1st class');
} else if(percentage > 50){
  alert('2nd class');
} else if(percentage > 40){
  alert('3rd class');
} else{
  alert('Fail...!');
}