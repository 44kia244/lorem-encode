const { Transform } = require('stream');

module.exports = function (keys) {
    return new Transform({
        transform (chunk, encoding, callback) {
            let decoded = [];
            let currentWord = [];

            if (this.oldBuffer instanceof Buffer) {
                this.oldBuffer.forEach(el => {
                    if (el !== 32) {
                        currentWord.push(el)
                    } else {
                        let decodedByte = String.fromCharCode(...currentWord);
                        decodedByte = keys.indexOf(decodedByte);
                        decoded.push(decodedByte);
                        currentWord = []
                    }
                });
                this.oldBuffer = false
            }

            chunk.forEach(el => {
                if (el !== 32) {
                    currentWord.push(el)
                } else {
                    let decodedByte = String.fromCharCode(...currentWord);
                    decodedByte = keys.indexOf(decodedByte);
                    decoded.push(decodedByte);
                    currentWord = []
                }
            });

            if (currentWord.length) this.oldBuffer = Buffer.from(currentWord);

            this.push(Buffer.from(decoded));
            callback();
        }
    });
};
