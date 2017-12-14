/*
====================
This file recieved messages then contacts the Giphy API module.
[D] dathappysheep#6683 #6883
[E] m.rumsey@hotmail.com
====================
*/
const giphyman = require('../managers/giphyman')
const giprandom = giphyman.random
const gipid = giphyman.id
const giptrend = giphyman.trending
const gipsearch = giphyman.search
exports.meme = (msg, client) => {
  msg.channel.send(giprandom('meme', msg))
}
exports.id = (msg, client, prefix) => {
  let searchterm = msg.content.split(" ").splice(1);
  msg.channel.send(gipid(searchterm, msg))
}
exports.trending = (msg, client) => {
  msg.channel.send(giptrend())
}
exports.search = (msg, client) => {
  let searchterm = msg.content.split(" ").splice(1);
  msg.channel.send(gipsearch(searchterm, msg))
}
