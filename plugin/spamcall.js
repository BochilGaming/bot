let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan Nomor Telpon untuk di SpamCall!\n\nMisal : !spamcall 895337278647', m)

	axios.get(`https://tobz-api.herokuapp.com/api/spamcall?no=${text}&apikey=BotWeA`).then ((res) => {
	 	let hasil = `${res.data.logs}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['spamcall'].map(v => v + ' <no hp>')
handler.tags = ['tools']
handler.command = /^(spamcall)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler