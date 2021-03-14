let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • GOPAY [085294959195]
│ • Telkomsel [085294959195]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
