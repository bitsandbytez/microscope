Errors = new Mongo.Collection(null);

throwError = function (message) {
  Error.insert({message: message});
}
