# lorem-encode
A useless binary-to-text encoder created for sending a blocked file over FB Messenger

## How to use
```
# binary-to-text encoding
node lorem-encode/index.js source.zip encoded.txt

# text-to-binary decoding
node lorem-encode/index.js -d encoded.txt decoded.zip
```

## Configuration
The `keys.json` included with this repository is the configuration file. It contains 256 no-space word each for 0x00 to 0xFF representation.
```
[
  "quae",
  "omnis",
  "velit",
  "weakness",
  "ullamco",
  .
  .
  .
  "elit",
  "earum",
  "exercitation"
]
```
