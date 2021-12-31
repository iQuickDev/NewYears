var hours = document.querySelector('#hours')
var minutes = document.querySelector('#minutes')
var seconds = document.querySelector('#seconds')
var countdown = document.querySelector('.countdown')
var newYears = new Date(	1640960838000) // 1640991600000
var phraseDisplayer = document.querySelector('#randomphrase')
var song = new Audio("song.mp3")
var isBlinkToggled = false
var isSongPlaying = false
let all = document.querySelectorAll(".container *")

const container = document.querySelector('.container')
const fireworks = new Fireworks(container,
    {
      rocketsPoint: 50,
      hue: { min: 0, max: 360 },
      delay: { min: 5, max: 15 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 75,
      trace: 3,
      explosion: 30,
      autoresize: true,
      brightness: { 
        min: 50, 
        max: 80,
        decay: { min: 0.015, max: 0.03 }
      },
      mouse: { 
        click: false, 
        move: false, 
        max: 10
      },
      boundaries: { 
        x: 50, 
        y: 50, 
        width: container.clientWidth, 
        height: container.clientHeight 
      },
})

updateTime()

var updater = setInterval(updateTime, 1000)
var phraseInterval = setInterval(() => {phraseDisplayer.innerHTML = randomPhrases[randomInt(0, randomPhrases.length - 1)]}, 600000)

function updateTime()
{
    let timeLeft = newYears - new Date()

    if (timeLeft < 60000 && !isBlinkToggled)
    {
        countdown.classList.add("almost")
        isBlinkToggled = true
    }

    if (timeLeft < 19000 && !isSongPlaying)
    {
        isSongPlaying = true
        song.play()
    }

    if (timeLeft < 1000)
    {
        countdown.textContent = '00:00:00'
        clearInterval(updater)
        clearInterval(phraseInterval)
        fireworks.start()
        phraseDisplayer.innerHTML = "SI SBOCCIA"
        countdown.classList.remove("almost")
        all.forEach(element => {
            element.classList.add("party")
        })
        return
    }

    hours.textContent = Math.floor(timeLeft / 1000 / 60 / 60)
    minutes.textContent = Math.floor(timeLeft / 1000 / 60) % 60
    seconds.textContent = Math.floor(timeLeft / 1000) % 60

    if (hours.textContent < 10)
    {
        hours.textContent = '0' + hours.textContent
    }
    if (minutes.textContent < 10)
    {
        minutes.textContent = '0' + minutes.textContent
    }
    if (seconds.textContent < 10)
    {
        seconds.textContent = '0' + seconds.textContent
    }
}

var randomPhrases =
[
    "La stanchezza è solo nella tua testa <br> - Pier Noel Asunzion",
    "Preferirei non parlare di misure <br> - Pier Noel Asunzion",
    "Non sono le palle a fare l'uomo, bensì la palla <br> - Pier Noel Asunzion",
    "Il puma mi fa na sega <br> - Pier Noel Asunzion",
    "Ci vediamo nel tuo culo <br> - Pier Noel Asunzion",
    "Fanculo i negri <br> - Pier Noel Asunzion",
    "Quanti grammi ? <br> - iQuick",
    "GUISEPPE SENATORE <br> - iQuick",
    "Mi pizzicano le palle, ci sono dei granelli di sabbia <br> - iQuick"
]

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms))
}
