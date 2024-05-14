const fs = require('fs');
const zlib = require('zlib');

const fileContents = fs.createReadStream('/unityLibrary.zip');
const writeStream = fs.createWriteStream('/unityLibrary');
const unzip = zlib.createGunzip();

fileContents.pipe(unzip).pipe(writeStream);


