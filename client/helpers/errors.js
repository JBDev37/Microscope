// Collection Locale (client-seulement)
Errors = new Meteor.Collection(null); // nul car la colection n'est pas ajouté à la base de données

throwError = function(message) {
  Errors.insert({message: message});
};

