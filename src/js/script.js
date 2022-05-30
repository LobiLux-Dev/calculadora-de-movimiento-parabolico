const v0Txt = document.getElementById('v0-txt') // Velocidad Inicial
const a0Txt = document.getElementById('a0-txt') // Ángulo Inicial
const tTxt = document.getElementById('t-txt') // Tiempo
// Etiquetas
const v0Lb = document.getElementById('v0-lb') // Velocidad Inicial
const a0Lb = document.getElementById('a0-lb') // Ángulo Inicial
const Vx0 = document.getElementById('Vx0') // Velocidad Horizontal
const Vy0 = document.getElementById('Vy0') // Velocidad Vertical
const xmax = document.getElementById('xmax') // Maximo alcance
const ymax = document.getElementById('ymax') // Maxima altura
const tymax = document.getElementById('tymax') // Tiempo hasta altura máxima
const ttotal = document.getElementById('ttotal') // Tiempo total
const x = document.getElementById('x') // Posición horizontal
const y = document.getElementById('y') // Posición vertical
const vx = document.getElementById('vx') // Velocidad horizontal
const vy = document.getElementById('vy') // Velocidad vertical
const a = document.getElementById('a') // Ángulo de la trayectoria

const actualizar = () => {
  v0Lb.innerHTML = Number(v0Txt.value)
  a0Lb.innerHTML = Number(a0Txt.value)
  Vx0.innerHTML = Number(v0Txt.value * Math.cos((a0Txt.value * Math.PI) / 180)).toFixed(4)
  Vy0.innerHTML = Number(v0Txt.value * Math.sin((a0Txt.value * Math.PI) / 180)).toFixed(4)
  xmax.innerHTML = Number((v0Txt.value ** 2 * Math.sin((2 * a0Txt.value * Math.PI) / 180)) / 9.81).toFixed(4)
  ymax.innerHTML = Number((v0Txt.value ** 2 * Math.sin((a0Txt.value * Math.PI) / 180) ** 2) / (2 * 9.81)).toFixed(4)
  tymax.innerHTML = Number(v0Txt.value * Math.sin(a0Txt.value * Math.PI / 180) / 9.81).toFixed(4)
  ttotal.innerHTML = Number((2 * v0Txt.value * Math.sin((a0Txt.value * Math.PI) / 180)) / 9.81).toFixed(4)
  x.innerHTML = Number((v0Txt.value * Math.cos((a0Txt.value * Math.PI) / 180)) * tTxt.value).toFixed(4)
  y.innerHTML = Number(((v0Txt.value * Math.sin((a0Txt.value * Math.PI) / 180)) * tTxt.value) - (9.81 * (tTxt.value**2)) / 2).toFixed(4)
  vx.innerHTML = Number(v0Txt.value * Math.cos((a0Txt.value * Math.PI) / 180)).toFixed(4)
  vy.innerHTML = Number((v0Txt.value * Math.sin((a0Txt.value * Math.PI) / 180)) - (9.81 * tTxt.value)).toFixed(4)
  a.innerHTML = '?'
}

v0Txt.addEventListener('keyup', () => actualizar())
a0Txt.addEventListener('keyup', () => actualizar())
tTxt.addEventListener('keyup', () => actualizar())

actualizar()