el = document.getElementById('jump')

window.addEventListener('scroll', DisplaySwitch)
function DisplaySwitch(){
  let mediaQuery = matchMedia('(max-width: 798px');
  let y = window.pageYOffset

  if(y > 680 && !mediaQuery.matches){
    el.style.opacity = "1"
    el.style.bottom = "-100px"
  } else{
    el.style.opacity = "0"
    el.style.bottom = "-200px"
  }
}