// on definie les regles de publication pour les posts
Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);


  //return Posts.find({flagged: false}); // on publie uniquement les articles non-signalé
  //return Posts.find({flagged: false, author: author}); // on publie uniquement les articles en fonction de l'auteur
  /*return Posts.find({}, {fields: {
    date: false
  }});*/ // on publie les articles ou la date n'existe pas

  /*return Posts.find({'author':'Tom'}, {fields: {
    date: false
  }});*/ // ou publie uniquement les articles de Tom où il n'y a pas de date
});


Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('singlePost', function(id) {
  check(id, String)
  return Posts.find(id);
});