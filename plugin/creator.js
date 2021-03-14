let handler = function (m) {
  // this.sendContact(m.chat, '6285294959195', 'Idham :v', m)
  this.sendContact(m.chat, '6285294959195', 'Idham :c', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
