const { createServer } = require('http')
const { exec } = require('child_process')

createServer((req, res) => {
  exec('json-server server.json -p 3333 -w -d 500', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
  res.end('Server started')
}).listen()