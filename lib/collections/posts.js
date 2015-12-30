Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function (user_id, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});
