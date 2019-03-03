const fs = require('fs');
const path = require('path');
const keys = require('./keys.json');
const Decoder = require('./Decoder');
const Encoder = require('./Encoder');

let args = process.argv.slice(2);

let decode = false;
let pathes = [];

args.forEach(arg => {
    switch (arg) {
        case '-d':
        case '--decode':
            decode = true;
            break;
        default:
            pathes.push(arg)
    }
});

if (pathes.length !== 2) throw new Error('invalid path');

let sourceFile = fs.createReadStream(path.resolve(pathes[0]));
let destFile = fs.createWriteStream(path.resolve(pathes[1]));

if (decode) {
    sourceFile.pipe(Decoder(keys)).pipe(destFile);
} else {
    sourceFile.pipe(Encoder(keys)).pipe(destFile);
}
