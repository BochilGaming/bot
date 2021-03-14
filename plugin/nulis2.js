let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'NULIS AAPA', m)

  await m.reply('SEBENTAR')
	axios.get(`https://api.zeks.xyz/api/nulis?text={text}%20test&apikey=apivinz`).then ((res) => {
	 	let hasil = `NIH BOSS ${res.data.result}`

    conn.sendFile(m.chat, hasil, m)
	})
}
handler.help = ['nulis'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(nulis2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler