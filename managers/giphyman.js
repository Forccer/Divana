/*
====================
This file contacts the Giphy-API
[D] dathappysheep#6683 #6883
[E] m.rumsey@hotmail.com
====================
*/
const giphy = require('giphy-api')();
exports.random = (searchterm, msg) => {
  if (typeof searchterm !== 'string') {
    msg.reply('Not a string!')
    return;
  }
  giphy.random(searchterm, function (err, res) {
      return res["data"].url
  });
}
exports.id = (searchterm, msg) => {
  if (typeof searchterm !== 'string') {
    msg.reply('Not a string!')
    return;
  }
  giphy.id(searchterm, function (err, res) {
      return res["data"].url
  });
}
exports.trending = () => {
  giphy.trending(function (err, res) {
   return res["data"].url
  });
}
exports.search = (searchterm, msg) => {
  if (typeof searchterm !== 'string') {
    msg.reply('Not a string!')
    return;
  }
  giphy.search({
    q: searchterm
    limit: 1
  }, function (err, res) {
      return res["data"].url
  });
}
