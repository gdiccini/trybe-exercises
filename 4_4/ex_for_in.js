let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
  };

  info1['recorrente'] = 'sim';
  info2['recorrente'] = 'sim';

  for(key in info1){
    if (key == 'personagem' || key == 'origem' || key == 'nota'){
      console.log(info1[key] + ' e ' + info2[key])
    } else if (info1[key] == 'sim' && info2[key] == 'sim'){
      console.log('Ambos recorrentes');
    }
  }