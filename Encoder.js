const { Transform } = require('stream');

module.exports = function (keys) {
    return new Transform({
        transform (chunk, encoding, callback) {
            let encoded = '';
            chunk.forEach(el => {
                encoded += keys[el] + ' ';
            });
            this.push(encoded);
            callback();
        }
    });
}