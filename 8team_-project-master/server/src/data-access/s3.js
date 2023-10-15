const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "<accessKeyId>",
  secretAccessKey: "<secretAccessKey>",
  region: "<region>",
});

module.exports = s3;
