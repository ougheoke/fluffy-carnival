

$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 

  $
    ("#submit").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 


      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      

      $("#coolNameFactsOutput").html(coolFacts);
  
    });
  
  });


function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = "<br><h5>" + nameLength(userName) + "</h5>"
  coolFacts += "<h5>" + nameStart(userName) + "</h5>";
  coolFacts += "<h5> " + nameEnd(userName) + "</h5>";
  coolFacts += "<h5>" + reverseName(userName) + "</h5>";
  coolFacts += "<br><h2>" + animalEmoji(userName) + "</h2>";

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}
  

function nameStart(name) {
  return "Your name starts with '" + name[0] + "'";
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "and ends with '" + name[lastIndex] + "'";
}

function reverseName(name) {
  return "Your name backwards is: " + name.split("").reverse().join("");
}

function animalEmoji(name) {
  if (name.length <= 3){
    return "Your Spirit Animal is: 🐻"
  }
  if (name.length >= 4 && name.length <= 5) {
    return "Your Spirit Animal is: 🦓"
  }
  if (name.length >= 6 && name.length <= 7) {
    return "Your Spirit Animal is: 🦋"
  }
  if (name.length >= 8 && name.length <= 9) {
    return "Your Spirit Animal is: 🦢"
  }
  if (name.length >= 10) {
    return "Your Spirit Animal is: 🐯"
  }
}