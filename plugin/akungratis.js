let handler = async m => m.reply(`
「 AKUN GRATIS 」

• MINECRAFT (XBOX)

1. Username : nikitasf@gmail.com
Password : tasfel13

2. Username : icudxiii@gmail.com
Password : Spencer13

3. Username : jackall04@gmail.com
Password : Foxtail19

4. Username : zaitsev2020@gmail.com
Password : sniperm4n

5. Username : joker2019@gmail.com
Password : legendversion2007

6. Username : coronaman1@gmail.com
Password : virusboosted1

「 DHAMZ BOT 」
`.trim()) // Tambah sendiri kalo mau
handler.help = ['akungratis','freeaccount']
handler.tags = ['tools']
handler.command = /^(akungratis|freeaccount)$/i

handler.limit = true

module.exports = handler
