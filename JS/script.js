console.log("#####Début de script#####");

var result = Math.floor(Math.random()*101);
console.log("L'Ia a choisi ce nombre = " +result);

var tableau = [];

var nbretour = 0;


function nombre (){

  var number = document.getElementById("chiffre").elements[0].value;
  console.log("Vous avez saisi ce nombre = " +number);

  var soustraction = Math.abs(result - number);//mettre le chiffre en absolut

  var reset = document.getElementById("chiffre").reset();//fais apparaitre et disparaitre dans le input un


  if (soustraction ==0 ){
    document.getElementById("CF").innerHTML = "Bien joué! Vous m'avez trouvé!!";
    alert(" Toutes mes félicitations !");
  } else if (soustraction <=10){
    document.getElementById("CF").innerHTML = "Ca brûle";
  } else if (soustraction <=20){
    document.getElementById("CF").innerHTML = "C'est trés chaud";
  } else if (soustraction <=30){
    document.getElementById("CF").innerHTML = "C'est chaud";
  } else if (soustraction <=40){
    document.getElementById("CF").innerHTML = "Ca se rechauffe!";
  } else if (soustraction <=50){
    document.getElementById("CF").innerHTML = "Ce se refroidit";
  } else if (soustraction <=60){
    document.getElementById("CF").innerHTML = "C'est froid";
  } else if (soustraction <=70){
    document.getElementById("CF").innerHTML = "C'est trés froid";
  } else if (soustraction <=80){
    document.getElementById("CF").innerHTML = "C'est trés trés froid";
  } else if (soustraction <=90){
    document.getElementById("CF").innerHTML = "C'est glacial";
  } else {
    document.getElementById("CF").innerHTML = "C'est le pôle nord";
  }

nbretour++;
console.log(nbretour);

tableau.push(number);
console.log(tableau);

   }


console.log("#####Fin de script#####");
