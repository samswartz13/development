var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "XXXXX",                   // NOTE that this was username in 1.x 
    password: "XXXXX",           // optional, prompted if none given
    host: "XXXXX",
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: 'public_html/',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ['**/*'],
    exclude: ['**/*.map'],     // e.g. exclude sourcemaps
    deleteRoot: true                // delete existing files at destination before uploading
}
 
// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err));

ftpDeploy.on('uploading', function(data) {
    data.totalFileCount;       // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename;             // partial path with filename being uploaded
});
ftpDeploy.on('uploaded', function(data) {
    console.log(data);         // same data as uploading event
});
    
// // use with callback
// ftpDeploy.deploy(config, function(err) {
//     if (err) console.log(err)
//     else console.log('finished');
// });