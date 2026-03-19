#!/usr/bin/env node
'use strict';

// Combining diacritical marks for zalgo effect
const UP = [
  0x030d, 0x030e, 0x0304, 0x0305, 0x033f, 0x0311, 0x0306, 0x0310,
  0x0352, 0x0357, 0x0351, 0x0307, 0x0308, 0x030a, 0x0342, 0x0343,
  0x0344, 0x034a, 0x034b, 0x034c, 0x0303, 0x0302, 0x030c, 0x0350,
  0x0300, 0x0301, 0x030b, 0x030f, 0x0312, 0x0313, 0x0314, 0x033d,
  0x0309, 0x0363, 0x0364, 0x0365, 0x0366, 0x0367, 0x0368, 0x0369,
  0x036a, 0x036b, 0x036c, 0x036d, 0x036e, 0x036f, 0x0346, 0x034a,
];

const MID = [
  0x0315, 0x031b, 0x0340, 0x0341, 0x0358, 0x0321, 0x0322, 0x0327,
  0x0328, 0x0334, 0x0335, 0x0336, 0x034f, 0x035c, 0x035d, 0x035e,
  0x035f, 0x0360, 0x0362, 0x0338, 0x0337, 0x0361, 0x0489,
];

const DOWN = [
  0x0316, 0x0317, 0x0318, 0x0319, 0x031c, 0x031d, 0x031e, 0x031f,
  0x0320, 0x0324, 0x0325, 0x0326, 0x0329, 0x032a, 0x032b, 0x032c,
  0x032d, 0x032e, 0x032f, 0x0330, 0x0331, 0x0332, 0x0333, 0x0339,
  0x033a, 0x033b, 0x033c, 0x0345, 0x0347, 0x0348, 0x0349, 0x034d,
  0x034e, 0x0353, 0x0354, 0x0355, 0x0356, 0x0359, 0x035a, 0x0323,
];

function pick(arr) {
  return String.fromCodePoint(arr[Math.floor(Math.random() * arr.length)]);
}

function zalgo(text, intensity) {
  const min = Math.max(1, Math.floor(intensity * 0.5));
  const max = intensity;
  let out = '';
  for (const ch of text) {
    out += ch;
    if (ch === ' ' || ch === '\n' || ch === '\t') continue;
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < n; i++) out += pick(UP);
    for (let i = 0; i < Math.ceil(n * 0.4); i++) out += pick(MID);
    for (let i = 0; i < n; i++) out += pick(DOWN);
  }
  return out;
}

function printHelp() {
  console.log(`Usage: zalgo [options] <text...>

Generate creepy zalgo text.

Options:
  -i, --intensity <n>  Intensity level 1-10 (default: 5)
  -h, --help           Show this help
  -v, --version        Show version

Examples:
  zalgo hello world
  echo "he comes" | zalgo -i 8
  zalgo --intensity 3 "subtle corruption"`);
}

// Parse args
const args = process.argv.slice(2);
let intensity = 5;
const textParts = [];

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '-h' || a === '--help') { printHelp(); process.exit(0); }
  if (a === '-v' || a === '--version') {
    console.log(require('./package.json').version);
    process.exit(0);
  }
  if (a === '-i' || a === '--intensity') {
    intensity = Math.min(10, Math.max(1, parseInt(args[++i], 10) || 5));
    continue;
  }
  textParts.push(a);
}

const scale = [2, 3, 4, 5, 7, 9, 12, 16, 20, 25];
const mapped = scale[intensity - 1] || 7;

if (textParts.length > 0) {
  console.log(zalgo(textParts.join(' '), mapped));
} else {
  // Read from stdin
  let data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => { data += chunk; });
  process.stdin.on('end', () => {
    if (data) console.log(zalgo(data.trimEnd(), mapped));
    else { printHelp(); process.exit(1); }
  });
}
