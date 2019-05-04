// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    str = ("${musicians[i]} plays ${instruments[i]}")
    array.push(str);
  }
  return array;
}

function johnLennonFacts(facts) {
  //var new_facts = []
//  while (var i = 0; i < facts.length; i++) {
    console.log("hi")//new_facts[i] = facts[i] + "!!!";
  }
  //return new_facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
   num += 1;
   array.push("I love the Beatles!");
  } while (num < 15);

  return array;
}
