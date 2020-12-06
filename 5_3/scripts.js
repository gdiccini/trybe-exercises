function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  // Ex1
  function injectDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let ulDays = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      
      let liElement = document.createElement('li');
      liElement.innerText = dezDaysList[index];
      liElement.className = 'day';

      if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
        liElement.className += ' holyday';
      }
      
      if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
        liElement.className += ' friday';
      }

      ulDays.appendChild(liElement);
    }
  }

  injectDays();

  // ex2
  function holidayButton(string){
    let divBtn = document.querySelector('.buttons-container');
    let buttonElement = document.createElement('button');
    buttonElement.innerText = string;
    buttonElement.id = 'btn-holyday';
    divBtn.appendChild(buttonElement);
  }

  holidayButton('Feriados');

  // ex3 - holydaysbackground
  function displayHolidays(){
    let buttonElement = document.querySelector('#btn-holyday');
    let holydays = document.querySelectorAll('.holyday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'green';
    buttonElement.addEventListener('click', function(event){
      for (let index = 0; index < holydays.length; index += 1){
        if (holydays[index].style.backgroundColor === setNewColor){
          holydays[index].style.backgroundColor = backgroundColor;    
        } else {
          holydays[index].style.backgroundColor = setNewColor;
        }        
      }    
    });
  }

  displayHolidays();

  //ex4 - friday btn
  
  function fridayBtn(){
    let frBTN = document.createElement('button');
    frBTN.innerText = 'Sexta-feira';
    let getDivButtons = document.querySelector('.buttons-container');  
    getDivButtons.appendChild(frBTN);
  }

  fridayBtn();