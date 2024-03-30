

let TTT = document.querySelector(".nowTimeS")
function Time() {
    let now = new Date()
    TTT.innerText = Math.floor(now.getTime() / 1000)
    watch.innerText=`${now.getHours()} ` + " : "  +`${now.getMinutes()} ` +" : "+`${now.getSeconds()} ` 
}
setInterval(Time, 1000);


let format = document.querySelector('.format')
let InputTime = document.querySelector(".InputTime")
let YouZoneTime = document.querySelector(".YouZoneTime")
let gtm = document.querySelector(".gtm")
let InputBUtton = document.querySelector(".InputBUtton")
let year = document.querySelector("#year")
let month = document.querySelector("#month")
let day = document.querySelector("#day")
let hour = document.querySelector("#hour")
let minut = document.querySelector("#minut")
let seconds = document.querySelector("#seconds")



let convertOne = document.querySelector('.convertOne')
convertOne.addEventListener('click', (e) => {
    e.preventDefault
    format.classList.add('active')
    console.log(InputTime.value);
    let UU = InputTime.value
    let dnn = new Date(UU*1000)
    YouZoneTime.nextElementSibling.innerText = dnn
    gtm.nextElementSibling.innerText=dnn.toGMTString() + "+0000"
})
let SecontYourTime = document.querySelector(".SecontYourTime")
let secontGmt = document.querySelector(".secontGmt")
let Timestamp = document.querySelector(".Timestamp")
let unix = document.querySelector(".unix")
let watch = document.querySelector(".watch")



InputBUtton.addEventListener("click", (e)=>{
    e.preventDefault()
    unix.classList.add('active')

    let StringTime = new Date(year.value,month.value ,day.value , hour.value , minut.value ,seconds.value)
    console.log(StringTime);
    SecontYourTime.nextElementSibling.innerText=StringTime
    secontGmt.nextElementSibling.innerText=StringTime.toGMTString() + "+0000"
    Timestamp.nextElementSibling.innerText = StringTime.getTime()/1000



})
