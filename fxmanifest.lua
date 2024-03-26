fx_version 'adamant'
game 'gta5'
description 'Ruple Banking'
version '1.0.2'

client_scripts {
    'client/main.lua',
    'client/cl_banks.lua',
}

server_scripts {
    '@mysql-async/lib/MySQL.lua',
    'server/*.lua',
}

ui_page 'html/bank.html'

files {
    'html/bank.html',
    'html/style.css',
    'html/load.css',
    'html/ui.js',
    'html/img/*.png',
}