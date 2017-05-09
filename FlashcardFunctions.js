/* By: Ryan Ripperger */
var TermStorage = [];
var DefStorage = [];
var newVocab;
var buttonClick = false;

function Vocab (term, def){
    this.word = term;
    this.meaning = def;
}

/*
function addToObject()
{
  //Retrieve the values entered by the User
  var term = document.getElementById("addTerm").value;
  var def = document.getElementById("addDefinition").value;

  //var defName = document.createTextNode("Definition = " + def);

  newVocab = new Vocab(term, def);
  localStorage.setItem("test", JSON.stringify(newVocab));
  var test = localStorage.getItem("test");
  test = JSON.parse(test);
  VocabStorage.push(newVocab);


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
*/

function addToObject()
{
  //Store terms and definitions from the user input
  var term = document.getElementById("addTerm").value;
  var def = document.getElementById("addDefinition").value;

  //Stores the terms and definitons in their perspective arrays
  TermStorage.push(term);
  DefStorage.push(def);

  //Creates a Node that appends after every entry to the Array
  var list = document.getElementById("listDisplay");
  var item = document.createElement("P");
  var itemName = document.createTextNode(TermStorage.length + ") Term = " + term + " | \r\nDefinition = " + def);
  item.appendChild(itemName);
  list.appendChild(item);

  //Resets the value in the input box to empty set
  console.log(TermStorage.length + " test");
  document.getElementById("addTerm").value = "";
  document.getElementById("addDefinition").value = "";

  //Stores the created array into session storage
  window.sessionStorage.setItem("words", JSON.stringify(TermStorage));
  window.sessionStorage.setItem("meanings", JSON.stringify(DefStorage));

  //var storedArray = JSON.parse(sessionStorage.getItem("items"));
  //sessionStorage.TermStorage = JSON.stringify("words");
  //sessionStorage.DefStorage = JSON.stringify("meanings");
}

function createStudyGuide()
{
  //Retrieve the term/def arrays stored in session sessionStorage
  var storedTerms = JSON.parse(sessionStorage.getItem("words"));
  var storedDefs = JSON.parse(sessionStorage.getItem("meanings"));
  console.log(storedTerms);
  console.log(storedDefs);

  if (buttonClick == false) {
      alert("Creating Study Guide!");
      buttonClick = true;
  }

  else {
      return;
  }

  for (var i = 0; i < storedTerms.length; i++)
  {
    var sgTerms = document.getElementById("studyGuideTerms");
    var sgDefs = document.getElementById("studyGuideDefs")
    var item1 = document.createElement("P");
    var item2 = document.createElement("P");
    var itemName = document.createTextNode((i+1) + " - " + storedTerms[i]);
    var itemDef = document.createTextNode((i+1) + " - " + storedDefs[i]);
    item1.appendChild(itemName);
    item2.appendChild(itemDef);
    sgTerms.appendChild(item1);
    sgDefs.appendChild(item2);
  }
}
function validateTerm()
{
  var termInput = document.getElementById("addTerm").value;
  var userSpace = termInput.includes(" ");

  if (termInput.length < 1) {
    document.getElementById("termError").innerHTML="Answer must be at least 1 character.";
    document.getElementById("termError").classList.remove("hidden-message");
    document.getElementById("termError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("termGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("termGroup").classList.add("has-error");
  }

  else if(isNaN(termInput)==false)
  {
    document.getElementById("termError").innerHTML="Term cannot contain a number.";
    document.getElementById("termError").classList.remove("hidden-message");
    document.getElementById("termError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("termGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("termGroup").classList.add("has-error");
  }

  else
  {
    //Remove error message
    document.getElementById("termError").innerHTML="";
    //Turn the username items green
    document.getElementById("termGroup").classList.add("has-success");
    //Toggle has-error to off
    document.getElementById("termGroup").classList.remove("has-error");
    //Toggle off error message
  }
}

function validateDef()
{
  var defInput = document.getElementById("addDefinition").value;

  if (defInput.length < 1) {
    document.getElementById("defError").innerHTML="Answer must be at least 1 character.";
    document.getElementById("defError").classList.remove("hidden-message");
    document.getElementById("defError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("defGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("defGroup").classList.add("has-error");
  }

  else if(isNaN(defInput)==false)
  {
    document.getElementById("defError").innerHTML="Definition cannot contain a number.";
    document.getElementById("defError").classList.remove("hidden-message");
    document.getElementById("defError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("defGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("defGroup").classList.add("has-error");
  }

  else
  {
    //Remove error message
    document.getElementById("defError").innerHTML="";
    //Turn the username items green
    document.getElementById("defGroup").classList.add("has-success");
    //Toggle has-error to off
    document.getElementById("defGroup").classList.remove("has-error");
    //Toggle off error message
  }
}
