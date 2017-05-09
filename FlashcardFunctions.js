/* By: Ryan Ripperger */
//var TermStorage = [];
//var DefStorage = [];
var VocabStorage = [];
var newVocab;

function Vocab (term, def){
    this.word = term;
    this.meaning = def;
}

function addToObject()
{
  //Retrieve the values entered by the User
  var term = document.getElementById("addTerm").value;
  var def = document.getElementById("addDefinition").value;

  //var defName = document.createTextNode("Definition = " + def);

  /*newVocab = new Vocab(term, def);
  localStorage.setItem("test", JSON.stringify(newVocab));
  var test = localStorage.getItem("test");
  test = JSON.parse(test);
  VocabStorage.push(newVocab);
  */

  newVocab = new Vocab(term, def);
  VocabStorage.push(newVocab);

  var list = document.getElementById("listDisplay");
  var item = document.createElement("P");
  var itemName = document.createTextNode(VocabStorage.length + ") Term = " + term + " | \r\nDefinition = " + def);
  item.appendChild(itemName);
  list.appendChild(item);

  console.log(VocabStorage.length + " test");
  document.getElementById("addTerm").value = "";
  document.getElementById("addDefinition").value = "";
}

/*
function addToObject()
{
  //Store terms and definitions from the user input
  var term = document.getElementById("addTerm").value;
  var def = document.getElementById("addDefinition").value;

  //Stores the terms and definitons in their perspective arrays
  TermStorage.push(term);
  DefStorage.push(def);

  var list = document.getElementById("listDisplay");
  var item = document.createElement("P");
  var itemName = document.createTextNode(TermStorage.length + ") Term = " + term + " | \r\nDefinition = " + def);
  item.appendChild(itemName);
  list.appendChild(item);

  console.log(TermStorage.length + " test");
  document.getElementById("addTerm").value = "";
  document.getElementById("addDefinition").value = "";
  window.sessionStorage.setItem("items", JSON.stringify(testArray));
  var storedArray = JSON.parse(sessionStorage.getItem("items"));
  sessionStorage.TermStorage = JSON.stringify(TermStorage);
  sessionStorage.DefStorage = JSON.stringify(DefStorage);
}
*/
