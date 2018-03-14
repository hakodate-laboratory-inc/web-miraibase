const c = document.getElementById('backgroundAnimation')
const ctx = c.getContext('2d')

let x = c.width / 2 + (Math.random() - 0.5) * 100
let y = c.height / 2 + (Math.random() - 0.5) * 100

ctx.strokeStyle = 'rgb(255,255,255)'
ctx.lineWidth = 5

let count = 0

function draw () {
  ctx.beginPath()
  ctx.moveTo(x, y)
  x += (Math.random() - 0.5) * 10
  y += (Math.random() - 0.5) * 10
  if (x < 0) {
    x = c.width
    ctx.moveTo(x, y)
  }
  if (x > c.width) {
    x = 0
    ctx.moveTo(x, y)
  }
  if (y < 0) {
    y = c.height
    ctx.moveTo(x, y)
  }
  if (y > c.height) {
    y = 0
    ctx.moveTo(x, y)
  }
  ctx.lineTo(x, y)
  ctx.stroke()
  count++
  if (count < 8000) {
    ctx.globalCompositeOperation = 'source-over'
  } else {
    ctx.globalCompositeOperation = 'destination-out'
    if (count > 15000) count = 0
  }
}

setInterval(draw, 10)
draw()
