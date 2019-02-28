el = document.getElementById('jump')

window.addEventListener('scroll', DisplaySwitch)

function DisplaySwitch(){
  let y = window.pageYOffset
  console.log(y);

  if(y > 680){
    el.style.opacity = "1"
    el.style.bottom = "-100px"
  }
  else{
    el.style.opacity = "0"
    el.style.bottom = "-200px"
  }
  console.log("hello")
}