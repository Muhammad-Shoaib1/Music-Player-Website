let myAudio = document.getElementById("audio")
let icon = document.getElementById("Icon")

icon.onclick = function(){
  if(myAudio.paused){
    myAudio.play()
    icon.src = "./Images/pause.png"
  }else {
    myAudio.pause()
    icon.src = "./Images/play.png"
  }
}