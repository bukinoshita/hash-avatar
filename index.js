'use strict'

const hash = require('string-hash')
const color = require('tinycolor2')

module.exports = (uid, {size} = {}) => {
  const n = hash(uid)
  const c1 = color({h: n % 360, s: 0.95, l: 0.5})
  const c1_ = c1.toHexString()
  const c2 = c1.triad()[1].toHexString()

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${size}px" height="${size}px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g">
        <stop stop-color="${c1_}" offset="0%"></stop>
        <stop stop-color="${c2}" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect id="Rectangle" fill="url(#g)" x="0" y="0" width="80" height="80"></rect>
    </g>
  </svg>`
}
