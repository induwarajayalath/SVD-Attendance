
const { google } = require('googleapis')

const tokenn = { access_token: 'ya29.a0Ae4lvC3V8nlok4QRILkGFFDdiGwbQNlL145yrmipYiS1lii2xSKwzcnDFkwE-3oI122ebWF0mfh3BKDyGkJFbmAHsf1lJZmyYSHTiATw4mWZN8jUZHeaNyQHNy_Ro8jKJLcVTPUO8-dREVHWSVygQPujCAwe0sBXKJw', refresh_token: '1//0gmNRRpuixc88CgYIARAAGBASNwF-L9Ir36gegvb6IEy7mJpLGjGINf-bhSl0zUB1OsiL3hmTxSBQQ8Pix5MF7hNRfpZZGVU6TqI', scope: 'https://www.googleapis.com/auth/drive', token_type: 'Bearer', expiry_date: 1586104829124 }
const cred = { installed: { client_id: '703374651518-t65ik5gui3nirdq2h5udriqv2nvh6lui.apps.googleusercontent.com', project_id: 'ds-portal-1585947467436', auth_uri: 'https://accounts.google.com/o/oauth2/auth', token_uri: 'https://oauth2.googleapis.com/token', auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs', client_secret: 'ynzNem8K-ywiTBfrabJfa-Qq', redirect_uris: ['urn:ietf:wg:oauth:2.0:oob', 'http://localhost'] } }

function googleDriveRun (functionName, data, callback) {
      authorize(cred, oAuth2Client => {
        switch (functionName) {
          case 'createFolder':
            createFolder(oAuth2Client, data.folderName, (err, response) => {
              callback(err, response)
            })
            break
          case 'getFileList':
            getFileList(oAuth2Client, data.pageToken, data.q, (err, response) => {
              callback(err, response)
            })
            break

          default:
            break
        }
      })
}

function authorize (credentials, callback) {
  // eslint-disable-next-line camelcase
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])
  oAuth2Client.setCredentials(tokenn)
  callback(oAuth2Client)
}

function createFolder (auth, folderName, callback) {
  const drive = google.drive({ version: 'v3', auth })
  var fileMetadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder',
    parents: ['15ME8YU3w9PB1-atq1ZM8u4eQpucKMIij'],
  }
  drive.files.create(
    {
      resource: fileMetadata,
      fields: 'id',
    },
    function (err, file) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, { folderId: file.data.id })
      }
    },
  )
}

function getFileList (auth, pageToken, val, callback) {
  const drive = google.drive({ version: 'v3', auth })
  drive.files.list(
    {
      corpora: 'user',
      pageSize: 10,
      q: val,
      pageToken: pageToken || '',
      fields: 'nextPageToken, files(*)',
    },
    (err, res) => {
      if (err) {
        callback(err, null)
        //console.log('The API returned an error: ' + err)
      } else {
        callback(null, res)
      }
    },
  )
}

function processList (files) {
  //console.log('Processing....')

  var fileList = {}
  files.forEach(file => {
    fileList[file.id] = {}
    fileList[file.id].name = file.name
    fileList[file.id].type = file.mimeType === 'application/vnd.google-apps.folder' ? 'folder' : 'file'
    fileList[file.id].webContentLink = file.webContentLink ? file.webContentLink : null
    fileList[file.id].createdTime = file.createdTime
  })
  //console.log(JSON.stringify(fileList))
}

/**
 * RUN
 */

// const createFolderData = {
//   folderName: 'Folder one'
// }

// googleDriveRun('createFolder', createFolderData, (err, response) => {
//   if (err) {
//     //console.log('createFolder error: ', err)
//   } else {
//     //console.log(response)
//   }
// })

const getFileListData = {
  pageToken: '',
  q: "parents='0ABb3zSW8VQzBUk9PVA'",
}

googleDriveRun('getFileList', getFileListData, (err, response) => {
  if (err) {
    //console.log('getFileList error: ', err)
  } else {
    //console.log(response.data.files)
    processList(response.data.files)
  }
})

module.exports = googleDriveRun

// export default googleDriveRun
