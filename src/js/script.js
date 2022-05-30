const v0Txt = document.getElementById('v0-txt')
const a0Txt = document.getElementById('a0-txt')
const tTxt = document.getElementById('t-txt')
const v0Lb = document.getElementById('v0-lb')
const a0Lb = document.getElementById('a0-lb')
const Vx0 = document.getElementById('Vx0')
const Vy0 = document.getElementById('Vy0')
const xmax = document.getElementById('xmax')
const ymax = document.getElementById('ymax')
const tymax = document.getElementById('tymax')
const ttotal = document.getElementById('ttotal')

const actualizar = () => {
	v0Lb.innerHTML = Number(v0Txt.value)
	a0Lb.innerHTML = Number(a0Txt.value)
	Vx0.innerHTML = Number((v0Txt.value * Math.cos(a0Txt.value * Math.PI / 180)).toFixed(4))
	Vy0.innerHTML = Number((v0Txt.value * Math.sin(a0Txt.value * Math.PI / 180)).toFixed(4))
	xmax.innerHTML = Number(((v0Txt.value ** 2 * Math.sin(2 * a0Txt.value * Math.PI / 180)) / 9.81)).toFixed(4)
	ymax.innerHTML = Number((v0Txt.value ** 2 * Math.sin(a0Txt.value * Math.PI / 180) ** 2) / (2 * 9.81)).toFixed(4)
	tymax.innerHTML = Number((v0Txt.value * Math.sin(a0Txt.value * Math.PI / 180) / 9.81)).toFixed(4)
	ttotal.innerHTML = Number((2 * v0Txt.value * Math.sin(a0Txt.value * Math.PI / 180) / 9.81)).toFixed(4)
}

v0Txt.addEventListener('keyup', () => actualizar())
a0Txt.addEventListener('keyup', () => actualizar())
tTxt.addEventListener('keyup', () => actualizar())

actualizar()