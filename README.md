# @kszongic/zalgo-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/zalgo-cli)](https://www.npmjs.com/package/@kszongic/zalgo-cli)
[![npm downloads](https://img.shields.io/npm/dm/@kszongic/zalgo-cli)](https://www.npmjs.com/package/@kszongic/zalgo-cli)
[![node](https://img.shields.io/node/v/@kszongic/zalgo-cli)](https://nodejs.org)
[![zero deps](https://img.shields.io/badge/dependencies-0-brightgreen)](./package.json)
[![cross-platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-blue)]()
[![license](https://img.shields.io/npm/l/@kszongic/zalgo-cli)](./LICENSE)

> Generate creepy zalgo text from the command line. Zero dependencies.

```
$ zalgo "hello world"
h e l l o   w o r l d   (but cursed)
```

## Why?

- Creepy text for Halloween, horror themes, or just for fun
- Social media posts that stand out
- Game dev glitch text for menus, loading screens, or lore
- Unicode stress-testing for your app
- Zero dependencies, installs in under a second

## Install

```bash
npm install -g @kszongic/zalgo-cli
```

Or run without installing:

```bash
npx @kszongic/zalgo-cli "he comes"
```

## Usage

```bash
zalgo hello world
echo "the end is near" | zalgo
zalgo -i 3 "subtle whisper"
zalgo --intensity 9 "MAXIMUM CORRUPTION"
```

## Options

| Flag | Description |
|------|-------------|
| `-i, --intensity <n>` | Intensity level 1-10 (default: 5) |
| `-h, --help` | Show help |
| `-v, --version` | Show version |

## Intensity Guide

| Level | Vibe |
|-------|------|
| 1-2 | Subtle unease |
| 3-4 | Something is wrong |
| 5 | Classic zalgo (default) |
| 6-7 | Hard to read |
| 8-10 | Pure chaos |

## Recipes

### Halloween social media post

```bash
zalgo -i 7 "trick or treat" | pbcopy   # macOS
zalgo -i 7 "trick or treat" | clip     # Windows
```

### Spooky commit message

```bash
git commit -m "$(zalgo -i 3 'fix: resolved the haunted bug')"
```

### Generate glitch text for a game

```bash
for word in "ERROR" "SYSTEM FAILURE" "HE SEES YOU" "WAKE UP"; do
  zalgo -i 8 "$word"
done > glitch-strings.txt
```

### Gradual corruption effect

```bash
for i in 1 3 5 7 9; do
  zalgo -i $i "the signal is degrading"
done
```

### Unicode stress test

```bash
zalgo -i 10 "$(cat input.txt)" | your-renderer
```

### Chain with other tools

```bash
fortune | zalgo -i 4
echo "moo" | zalgo -i 6 | cowsay
```

## How It Works

Zalgo text uses Unicode combining characters, diacritical marks that stack above, below, and through base characters. The CLI randomly attaches combining marks (U+0300 to U+036F and beyond) to each character. Higher intensity means more marks per character means more chaos.

This is valid Unicode. Any system that renders Unicode will display the stacked marks. Some renderers handle it gracefully; others don't. That's the fun.

## Use Cases

- Social media and messaging eye-catching posts
- Horror/ARG content creepy text for games, videos, stories
- Memes and fun
- QA testing stress-test text rendering, input validation, databases
- Creative coding generative art, interactive fiction

## Comparison

| Feature | zalgo-cli | zalgo.js (library) | Online generators |
|---------|-----------|-------------------|-------------------|
| CLI / pipe-friendly | Yes | No | No |
| Intensity control | 1-10 | Yes | Sometimes |
| stdin support | Yes | No | No |
| Zero dependencies | Yes | No | N/A |
| Offline | Yes | Yes | No |
| Scriptable | Yes | Yes | No |

## Related Tools

Other @kszongic CLI tools:

- [matrix-rain-cli](https://github.com/kszongic/matrix-rain-cli) Matrix digital rain in the terminal
- [mirror-text-cli](https://github.com/kszongic/mirror-text-cli) Reverse/mirror text with Unicode
- [lorem-gen-cli](https://github.com/kszongic/lorem-gen-cli) Generate placeholder text
- [rotn-cli](https://github.com/kszongic/rotn-cli) ROT-N cipher encoding
- [string-hash-cli](https://github.com/kszongic/string-hash-cli) Hash strings from the terminal

## Zero Dependencies

This package has no dependencies. Just Node.js.

## License

MIT
