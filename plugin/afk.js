let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`${conn.getName(m.sender)} Sekarang sedang AFK!\n\nAlasan ${text ? ': ' + text : ''}`)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i
handler.group = true

module.exports = handler
