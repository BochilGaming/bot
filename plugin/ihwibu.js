let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
GPP LAH, WIBU MAH DA GANTENG:)
GAK LAH CAMDA:V
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /IH WIBU|ih wibu|Ih wibu/i
handler.command = new RegExp

module.exports = handler