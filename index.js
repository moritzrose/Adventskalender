let container = document.querySelector(".container")
let doors = document.querySelectorAll(".door")

function getCurrentDate(){
    return new Date()
}

let currentDate = getCurrentDate()
let currentDay = currentDate.getDate()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
let events = ["🎄","⛄","🛷","🦌","❄️","🎁","🎅","🌟","🕯️","🔔","🍫","🤶🏼","🐕","🍪","🍬","🍦","🎂","🍨","🍭","🧸","🪁","🎷","💐","🕹️",]
numbers.sort((a, b) => 0.5 - Math.random());
for (let door of doors) {
    let doorNumber = numbers.pop()
    door.innerText = doorNumber
    door.addEventListener("click", () => {
        if(currentDate.getMonth()+2<12){
            alert("It is not December yet!!")
        }
        else {
            if (doorNumber > currentDay){
                alert("You still have to wait " + (doorNumber - currentDay) + " days, to open that :)")
            }
            if (doorNumber <= currentDay){
                door.innerText = events[doorNumber-1]
            }
        }
    })
}

document.body.addEventListener("click", () => {
    let audio = document.getElementById("music")
    audio.play()

})
