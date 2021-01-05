window.onload = function(){
    const statesList = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santo', ' Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarinha', 'São Paulo', 'Sergipe', 'Tocantins']

    const comboBox = document.getElementById('state');
    for (let index = 0; index < statesList.length; index +=1){
        let optionElement = document.createElement('option');
        optionElement.innerText = statesList[index];
        comboBox.appendChild(optionElement);
    }
}