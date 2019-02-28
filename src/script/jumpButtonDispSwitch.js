let y = window.pageYOffset
const el = document.getElementById('jump')
el.addEventListener('scroll', DisplaySwitch, false)

function DisplaySwitch(){
	console.log("hello")
	if(y > 600)
	el.style.visibility = "visible"
	else el.style.visibility = "hidden"
}