
exports.msghandler = (msg, prefix, client) => {
  if (!msg.content.startsWith(prefix)) {
    console.log('no pref')
    return;
  }
  if (msg.channel.type !== 'text') {
    console.log('Not a text')
    return
  }
  if (msg.author.bot === true) {
    console.log('botuser')
    return;
  }
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").splice(1);
  if (command === 'ping') {
    msg.reply('Pong!')
  }
}
