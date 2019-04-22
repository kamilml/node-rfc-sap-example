'use strict'

// rfc client
const rfcClient = require('node-rfc').Client

// ABAP system RFC connection parameters
const abapSystem = {
    user: "your_user",
    passwd: "your_password",
    ashost: "your_host",
    sysnr: "00",
    client: "000",
    lang: "EN"
}
const client = new rfcClient(abapSystem)


client.connect(err => {
    if (err) {
        return console.log('client.connect err', err)
    }        

    let data = {
        keyName: 'some string'
    }

    client.invoke('RFC_FUNCTION_NAME', data, (err, resRFC) => {
        if (err) {
            return console.log('client.invoke err', err)
        }

        console.log(resRFC)
    })
})
