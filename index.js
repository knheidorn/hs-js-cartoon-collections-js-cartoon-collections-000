function dwarfRollCall(dwarves) {
  var i;
  var list = "";
  for (i = 0; i<dwarves.length; i++){
    list += i+1 + ". "+ dwarves[i] + " ";
  } return list;
}

function summonCaptainPlanet(array){
  var planeteerCalls = array.map(function(x){return x.toUpperCase()});
  var i;
  for (i = 0; i<planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i] + "!";
  }return planeteerCalls;
} 

function longPlaneteerCalls(array) {
  var wordCount = array.map(function(x){return x.length});
  function greaterThanFour(element, index, array){
    return element > 4;
  } return wordCount.some(greaterThanFour);
}

function findTheCheese (array) {
  var foodList = array.toString();
  if (foodList.includes("cheddar")){
    return "cheddar";
  } else if (foodList.includes("gouda")){
    return "gouda";
  } else if (foodList.includes("camembert")){
    return "camembert";
  } else {
    return "no cheese!";
  }
}
