let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
MAAF FITUR BELUM TERSEDIA

ERROR MULU SIH :v
~GUNAKAN FITUR~
`.trim(), m)
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(ig)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler