// check that the userId specifies owns the documents
ownsDocument = function (userId, doc) {
  return doc && doc.userId === userId;
}
