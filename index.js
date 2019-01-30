//1. name[0] 2. name[1] etc...

function dwarfRollCall(dwarves) {
  var list = "";
  var halfList = dwarves.length/2;
  for (let i = halfList; i<dwarves.length; i++){
    list += i+1 + ". "+ dwarves[i] + " ";
  } return(list); 
} 


// ['CALL!', 'CALL2!', etc...]

function summonCaptainPlanet(array){
  var planeteerCalls = array.map(function(x){return x.toUpperCase()});
  for (let i = 0; i<planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i] + "!";
  }return planeteerCalls;
} 


//Boolean: true if any elements in string are longer than 4

function longPlaneteerCalls(array) {
  var wordCount = array.map(function(x){return x.length});
  function greaterThanFour(element){
    return element > 4;
  } return wordCount.some(greaterThanFour);
}


//is there specific types of cheese? if so, return the cheese!

function findTheCheese (array) {
  var foodList = array.toString(); 
  if (foodList.includes("cheddar")){
    return "cheddar";
  } else if (foodList.includes("gouda")){
    return "gouda";
  } else if (foodList.includes("camembert")){
    return "camembert";
  } else if (foodList.includes("goat")) {
    return "goat";
  } else {
    return "no cheese!";
  }
  
  //
  function wordsWithB(array) {
    var bWords = [];
    for (let i=0; i<array.length; i++) {
      var theB = array[i].startsWith('b'); //true or false
      if (theB) {
          bWords.push(array[i]);
      } console.log(bWords);
      } return bWords;
    } 
  
}
