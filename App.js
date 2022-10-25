const textarea = document.querySelector('textarea')

const btn= document.querySelector('button')


const speechtext= (e)=>{

let voice = new SpeechSynthesisUtterance(e)

speechSynthesis.speak(voice)

}




btn.addEventListener("click", (e)=>{

    e.preventDefault()

if(textarea.value !== ""){
   speechtext(textarea.value)
}

})