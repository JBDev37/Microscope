Template.registerHelper('pluralize', function(n, thing) {
  // mettre les noms au pluriel
  if (n <=1) {
    return n +' ' + thing ;
  } else {
    return n + ' ' + thing + 's';
  }
});

//Template.registerHelper --> helpers qui peut être utilisé dans n'importe quel template