/** @type {import('.')} */
let binding;
try {
  binding = require('./server-native.node');
} catch {
  const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
  binding = require(`./server-native.${arch}.node`);
}

module.exports = binding;
