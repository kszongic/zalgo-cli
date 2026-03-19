# @kszongic/zalgo-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/zalgo-cli)](https://www.npmjs.com/package/@kszongic/zalgo-cli)
[![license](https://img.shields.io/npm/l/@kszongic/zalgo-cli)](./LICENSE)

> H̷̢̛̗̻̎ë̸̡̫́̌ ̷̧̛̈́c̴̣̈́o̵̦͐m̷̢̓̈e̸̡̛s̶̤̈́ — Generate creepy zalgo text from the command line.

## Install

```bash
npm install -g @kszongic/zalgo-cli
```

## Usage

```bash
# Basic usage
zalgo hello world

# Pipe text through stdin
echo "the end is near" | zalgo

# Control intensity (1-10, default 5)
zalgo -i 3 "subtle whisper"
zalgo --intensity 9 "MAXIMUM CORRUPTION"
```

## Options

| Flag | Description |
|------|-------------|
| `-i, --intensity <n>` | Intensity level 1-10 (default: 5) |
| `-h, --help` | Show help |
| `-v, --version` | Show version |

## Examples

**Light (intensity 1-3):**
```
zalgo -i 1 "just a hint"
# j̃ũs̃t̃ ã h̃ĩñt̃
```

**Medium (intensity 5):**
```
zalgo "he comes"
# h̴̨̛̗̻̎ë̸̡̫́̌ c̴̣̈́ö̵̦m̷̢̓̈e̸̡̛s̶̤̈́
```

**Heavy (intensity 8-10):**
```
zalgo -i 10 "ZALGO"
# Z̸̢̧̡̛̗̻̯̥̎̌̈́̓Á̸̡̫̦̤̌͐̈́Ļ̷̛̣̈́̈́G̴̢̓̈Ơ̸̡̗̻̎
```

## Zero Dependencies

This package has no dependencies. Just Node.js.

## License

MIT © 2026 kszongic
