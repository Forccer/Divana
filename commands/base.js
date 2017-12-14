/*
====================
This file recieves and responds to base grade messages.
[D] dathappysheep#6683 #6883
[E] m.rumsey@hotmail.com
====================
*/
exports.ping = (msg, client) => {
  msg.reply("pong!")
};
exports.help = (msg, client, helpmsg) => {
  msg.reply("WIP")
}
exports.info = (msg, client, infomsg) => {
  msg.reply("info WIP")
}
