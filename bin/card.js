#!/usr/bin/env node

var npxcard = require("npxcard");

const sections = [
  {
    title: "João Pedro Coelho Jácome (Personal)",
    details: [
      ["Email", "joaopedrocj@gmail.com"],
      ["Web", "https://www.nerdvana.com.br"],
      ["GitHub", "https://github.com/joaopedrocj"],
    ],
  },
  {
    title: "Node.js / npm",
    details: [
      ["Profile", "https://www.npmjs.com/~joaopedrocj"],
      ["Card", "$ npx joaopedrocj"],
    ],
  },
];

// ----------------------------------------------------------------------------
// output

const output = npxcard(sections);
console.log(output);

// ----------------------------------------------------------------------------
