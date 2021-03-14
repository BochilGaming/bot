let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 BOT INFO 〙 ═
╠➥ Dibuat dengan bahasa JavaScript via NodeJS
╠➥ Author : DHAMZ
║
╠➥ YouTube : TAU LAH KAO
╠➥ Instagram : @idham.thoriq_
╠➥ FaceBook : Idham Thoriq
║
╠═〘 Thanks To 〙 ═
╠➥ Nurutomo
╠➥ Drawl Nag
╠➥ Dan kawan2 yang lain :)
║
╠═〘 DONATION 〙 ═
╠➥ GOPAY : 085294959195
╠➥ TELKOMNYET : 085294959195
║
╠═〘 DHAMZ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
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

