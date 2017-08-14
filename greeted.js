module.exports = function(){

  const greetedList = [];
  const counterMap = {};
  const nameList = [];
//  const nameCounter = [];

  const getForm = function(req, res){
    res.render('greetings/index');
  };

  const addScreen = function(req, res) {
    res.render('greetings/add', {greetings: greetedList});
  }

  const add = function(req, res){

  var username = req.body.username;
  var languange = req.body.languange;
  //var counterList[i]nameList

  var foundName = greetedList.find(function(currentName){

    return currentName === username;
  });

  if (!username) {
    req.flash('error', 'Name should not be blank');
  }
  else if (!languange){
    req.flash('error', 'Select languange to be greeted in');
  }
  else {
    if (!foundName) {
      if (languange === 'english'){
        req.flash('greetMessage', 'Hello, ' + username);
        greetedList.push(username)
      }
      else if (languange === 'french') {
        req.flash('greetMessage', 'Bonjour, ' + username);
        greetedList.push(username);
      }
      else if (languange === 'tshivenda') {
        req.flash('greetMessage', 'Ndaaa, ' + username);
        greetedList.push(username);
      }
    }
    else if (foundName){
      if (languange === 'english'){
        req.flash('greetMessage', 'Hello, ' + username);
      }
      else if (languange === 'french') {
          req.flash('greetMessage', 'Bonjour, ' + username);
      }
      else if (languange === 'tshivenda') {
          req.flash('greetMessage', 'Ndaaa, ' + username);
      }
    }
  }
      /**(!foundName && languange === 'english'){
      req.flash('greetMessage', 'Hello, ' + username);
      greetedList.push(username);
    }
    else if (!foundName && languange === 'french') {
      req.flash('greetMessage', 'Bonjour, ' + username);
      greetedList.push(username);
    }
    else if (!foundName && languange === 'tshivenda') {
      req.flash('greetMessage', 'Ndaaa, ' + username);
      greetedList.push(username);
    }
  }**/
//  greetedList.push(username);

  var nameCounter = greetedList.length;

  if(counterMap[username] === undefined){
      counterMap[username] = 0;
    }
    counterMap[username] ++;
    const greetedCounter = counterMap[username]

    res.render('greetings/index', {counter : nameCounter});
}

  const counter = function(req,res){

  var username = req.params.username
  const greetedCounter = counterMap[username];
  res.send("Hello,"+ " " + username + " " +"has been greeted" +" " + greetedCounter +" "+"time(s)")
    }

  return {

    getForm,
    add,
    addScreen,
    counter
  }
}
