let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberikan Kode Gift Gratis!
│
│ > Harga :
│• 10K / Bulan (4 Minguu)
│• 50K / Tahun (12 Bulan)
│
│ > Pembayaran :
│• GOPAY/TELKOMSEL: 085294959195
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
