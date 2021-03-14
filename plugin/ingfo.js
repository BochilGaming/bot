let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╭─「 ${conn.user.name} x DHAM BOT 」
│
│⚠️ *INFO BOT* ⚠️
│Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick
│Rec: Idham Thoriq
│Script: @Nurotomo
│Github: *COMING SOON!!*
│*Sosmed :*
│
│➥Instagram: @idham.thoriq_
│➥ YouTube: Idham Thoriq Channel
│ *DONASI* 
│
│➥ GOPAY: 085294959195
│➥ Tsel: 085294959195
│➥ BANG OF INDONESIA:4453452 (JK)
│
╰────
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['ingfo']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler