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
    frBTN.id = 'btn-friday';
    let getDivButtons = document.querySelector('.buttons-container');  
    getDivButtons.appendChild(frBTN);
  }

  fridayBtn();

  // ex5 - displayFridays
  function displayFridays(array){
    let buttonFriday = document.querySelector('#btn-friday')
    let getFridays = document.querySelectorAll('.friday');
    let setNewText = 'Sexta-Feira';

    buttonFriday.addEventListener('click', function(event){
      for (let index = 0; index < getFridays.length; index += 1){
        if (getFridays[index].innerText !== setNewText){
          getFridays[index].innerText = setNewText;
        } else {
          getFridays[index].innerText = dezFridays[index];
        }
      }
    });
  }

  let dezFridays = [ 4, 11, 18, 25];
  displayFridays(dezFridays);

  // ex6
  function zoomIn(){
    let getDays = document.querySelector('#days');

    getDays.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };

  function zoomOut(){
    let getDays = document.querySelector('#days');
    getDays.addEventListener('mouseout', function(event){
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  }
  
  zoomIn();
  zoomOut();

  // ex7

  function addTask(task){
    let taskContainer = document.querySelector('.my-tasks');
    let taskToAdd = document.createElement('span');
    taskToAdd.innerText = task;
    taskContainer.appendChild(taskToAdd);
  }

  addTask('Projeto');

  // ex8
  function coloredSubtitle(color){
    let taskContainer = document.querySelector('.my-tasks');
    let setDiv = document.createElement('div');
    
    setDiv.className = 'task';
    setDiv.style.backgroundColor = color;
    taskContainer.appendChild(setDiv);
  };

  coloredSubtitle('blue');