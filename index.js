const fs = require('fs')
const XmlStream = require('xml-stream')

let stream = fs.createReadStream("XMLGoogle.xml")

let xml = new XmlStream(stream);

xml.collect('Entry', true)

xml.on('endElement: Entry', (item) => {
    console.log(item)
})
