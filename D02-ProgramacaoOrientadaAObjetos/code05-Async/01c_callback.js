//01b_callback.js
const fs = require('fs')

fs.readFile(
    '01a_textoQualquer.txt', 
    (err, buf) => {
        if(err)
            throw err
        else
            console.log(buf.toString())
    })