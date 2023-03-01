# lorem-encode
This is a binary-to-text encoder that replace a byte into a predefined unique string, and then use the same string set to decode back into binary. This can bypass the security check of facebook messenger, but require receiver to use this program to decode it.

*Note: I created this just for fun. No update or maintenance.*

# Installation
```bash
npm -g install lorem-encode
```

## How to use
```bash
# binary-to-text encoding
lorem-encode source.zip encoded.txt

# text-to-binary decoding
lorem-encode -d encoded.txt decoded.zip
```

## Configuration
The `keys.json` included with this repository is the configuration file. It contains 256 no-space unique word each for 0x00 to 0xFF representation.
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
