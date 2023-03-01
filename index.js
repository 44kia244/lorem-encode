#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const keys = require('./keys.json');
const Decoder = require('./Decoder');
const Encoder = require('./Encoder');

let args = process.argv.slice(2);

let decode = false;
let pathes = [];
let help = false;

args.forEach(arg => {
    switch (arg) {
        case '-d':
        case '--decode':
            decode = true;
            break;
        case '-h':
        case '--help':
            help = true;
            break;
        default:
            pathes.push(arg)
    }
});

if (help || pathes.length !== 2) {
    console.error('Usage: lorem-encode [--help|-h] [--decode|-d] <inputFile> <outputFile>')
    process.exit(1)
}

let sourceFile = fs.createReadStream(path.resolve(pathes[0]));
let destFile = fs.createWriteStream(path.resolve(pathes[1]));

if (decode) {
    sourceFile.pipe(Decoder(keys)).pipe(destFile);
} else {
    sourceFile.pipe(Encoder(keys)).pipe(destFile);
}
