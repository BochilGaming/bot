let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Idham!!! Ada Yang manggil nich:v
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@Idhamシ|@idhamシ/i
handler.command = new RegExp

module.exports = handler