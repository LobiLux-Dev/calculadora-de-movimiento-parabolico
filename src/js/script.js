const v0Txt = document.getElementById('v0-txt')
const a0Txt = document.getElementById('a0-txt')
const tTxt = document.getElementById('t-txt')
const v0Lb = document.getElementById('v0-lb')
const a0Lb = document.getElementById('a0-lb')
const Vx0 = document.getElementById('Vx0')
const Vy0 = document.getElementById('Vy0')

const actualizar = () => {
	v0Lb.innerHTML = Number(v0Txt.value)
	a0Lb.innerHTML = Number(a0Txt.value)
	Vx0.innerHTML = Number((v0Txt.value * Math.cos(a0Txt.value * Math.PI / 180)).toFixed(4))
	Vy0.innerHTML = Number((v0Txt.value * Math.sin(a0Txt.value * Math.PI / 180)).toFixed(4))
}

const updateEvent = (evt, func) => {
	v0Txt.addEventListener(evt, func)
	a0Txt.addEventListener(evt, func)
	tTxt.addEventListener(evt, func)
}

updateEvent('keyup', () => {
	actualizar()
})
updateEvent('keypress', e => e.charCode>=48 && e.charCode<=57)

actualizar()