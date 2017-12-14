/*
====================
This file loads the required modules and also dispatches messages to these modules.
[D] dathappysheep#6683 or #6883
[E] m.rumsey@hotmail.com
====================
*/
const combase = require('../commands/base')
const ping = combase.ping
const help = combase.help
const info = combase.info

const giphybase = require('../commands/giphy')
const giphymeme = giphybase.meme;
const giphyid = giphybase.id;
const giphytrend = giphybase.trending;
exports.msghandler = (msg, prefix, client) => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if (msg.channel.type !== 'text') {
    return
  }
  if (msg.author.bot === true) {
    return;
  }
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").splice(1);
  //Base
  if (command === 'ping') {
    ping(msg, client)
  }
  if (command === 'help') {
    help(msg, client, 'WIP')
    //
  }
  if (command === 'info') {
    info(msg, client, 'WIP')
  }
  if (command === 'gid') {
    giphyid(msg, client, prefix)
  }
  if (command === 'gtrend') {
    giphytrend(msg, client)
  }
  // giphy

}
