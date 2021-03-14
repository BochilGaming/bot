let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
[  🎰 | SLOTS ]

${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} <===
${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])} | ${pickRandom(['🍇','🍉','🍎','🍌','🍋','🍊','🍓','🍒','🍍','🍈','🥑','🍐','🥝'])}

[  🎰 | SLOTS ]

`.trim(), m)
    global.DATABASE._data.users[m.sender].exp += 100
}
handler.help = ['slot']
handler.tags = ['game']
handler.command = /^slot/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
