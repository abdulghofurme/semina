const mongoose = require("mongoose");
const { DBMongoUrl } = require("../config");

mongoose.connect(DBMongoUrl);
//   .then(() => {
//     console.log("DB MONGODB Connection - Success");
//   })
//   .catch((e) => {
//     console.log("DB MONGODB Connection - Success");
//     console.log(e);
//   });

// save db connection to constant variable
const db = mongoose.connection;

// export db connection to reuse in another files
module.exports = db;
