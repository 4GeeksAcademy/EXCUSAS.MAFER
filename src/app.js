window.onload = function () {

  let who = ['Mi perro', 'El unicornio del vecino', 'El alienígena de la esquina', 'Un pajarito'];
  let action = ['himnotizó', 'se comió', 'desapareció con la mente', 'multiplicó'];
  let what = ['a Papá Noel', 'una gallina que iba pasando', 'a unos peces', 'a pikachu'];
  let when = ['durante la 2da guerra mundial','en 1994','mientras dormía','en la madrugada','mientras jugaba a la play'
  ];

  
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

 
  let excuse =
    who[whoIndex] + ' ' +
    action[actionIndex] + ' ' +
    what[whatIndex] + ' ' +
    when[whenIndex];

  document.getElementById("excuse").innerHTML = excuse;
};
