window.onload = function(){
    const statesList = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', ' Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarinha', 'São Paulo', 'Sergipe', 'Tocantins'];
    const statesAbreviation = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA','PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    const comboBox = document.getElementById('state');
    for (let index = 0; index < statesList.length; index +=1){
        let optionElement = document.createElement('option');
        optionElement.innerText = statesList[index];
        optionElement.value = statesAbreviation[index];
        comboBox.appendChild(optionElement);
    }
}

function dateFormatChecker(){
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function(){
        const date = document.getElementById('start-date').value;
        const dateArray = date.split('/');
        if (dateArray[0] < 0 || dateArray[0] >=31 || dateArray[1] < 0 || dateArray[1] >= 12 || dateArray[2] < 0){
            alert('Data Inválida')
        }
    });
}

dateFormatChecker();