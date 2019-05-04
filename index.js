// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var new_facts = [];
  var i = 0;

  while (i < facts.length) {
    i++;
    new_facts.push(facts[i] + "!!!");
  }
  return new_facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
   num += 1;
   array.push("I love the Beatles!");
  } while (num < 15);

  return array;
}
