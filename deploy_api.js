const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
const git = require('git-rev-sync')
require('dotenv').config()

const config = {
  user: process.env.FTP_API_USER,
  password: process.env.FTP_API_PASSWORD,
  host: process.env.FTP_API_HOST,
  localRoot: __dirname + '/api',
  remoteRoot: './',
  include: ['**/*.*'],
  exclude: ['.DS_Store'],
  deleteRemote: false,
  forcePasv: true
}

ftpDeploy.deploy(config)
  .then((res) => {
    console.log(`Deploy Complete ${git.short()}.`)
  })
  .catch((err) => {
    throw err
  })

ftpDeploy.on('uploaded', (data) => {
  console.log(`uploded ${data.transferredFileCount}: ${data.filename}`) // same data as uploading event
})
