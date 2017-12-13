exports.memadd = (member, client) => {
  const channel = member.guild.channels.find('name', 'general')
  if(!channel) return;
  channel.send(`Welcome to server, ${member}. Please read #rules and dm DMforSupport for help`)
  /*
  newUsers.set(member.id, member.user)

  if(newUsers.size > 3) {
    const userlist = newUsers.map(u => u.toString()).join(" ")
    guild.defaultChannel.send("Welcome, " + userlist + " to the server. \n Please read #rules and dm DmforSupport for help")
    newUsers.clear

  } ---- What does this do?
  */
}
