const audios = [
    { 
        src: '/audio/1.mp3', 
        title: 'Matkatef', 
        image: '/images/1.jpg' 
    },
    { 
        src: '/audio/2.mp3', 
        title: 'Ana Negm', 
        image: '/images/2.jpg' 
    },
    { 
        src: '/audio/3.mp3', 
        title: 'Laila', 
        image: '/images/3.jpg' 
    },
    { 
        src: '/audio/4.mp3', 
        title: 'Mabtohashnesh', 
        image: '/images/4.jpg' 
    },
    { 
        src: '/audio/5.mp3', 
        title: 'Ya abead Ya Asowd', 
        image: '/images/5.jpg' 
    }
    ,
    { 
        src: '/audio/6.mp3', 
        title: 'Roma', 
        image: '/images/6.jpg' 
    },
    { 
        src: '/audio/7.mp3', 
        title: 'EL Keif', 
        image: '/images/7.jpg' 
    },
    { 
        src: '/audio/8.mp3', 
        title: 'Tarantino', 
        image: '/images/8.jpg' 
    },
    { 
        src: '/audio/9.mp3', 
        title: 'El seka Shemal', 
        image: '/images/9.jpg' 
    }
    ];

let currentIndex = 0 ;

let audio = document.getElementById("audio");
let audioImg = document.getElementById("audioImg");
let audioText = document.getElementById("audioText");
let audioContainer = document.querySelector('.audios')
let duration = document.getElementById("duration");
let volume = document.getElementById("volume");
let muted = document.getElementById("muted");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");

function loadAudio (index) {
    audio.src = audios[index].src
    audioImg.src = audios[index].image
    audioText.textContent = audios[index].title
    audios.forEach((ele,index) => {
        audioContainer.children[index].firstElementChild.classList.remove("active")
        audioContainer.children[index].lastElementChild.classList.remove("active")
    })
    audioContainer.children[index].firstElementChild .classList.add("active")
    audioContainer.children[index].lastElementChild .classList.add("active")
}

function createPlayList () {
    for (let i = 0; i < audios.length; i++) {
        var audioItem = document.createElement('div')
        audioItem.setAttribute("data-index" , i)
        audioItem.classList.add("audio")
        var logoImage = document.createElement('img')
        logoImage.src = '/images/images.jpeg'
        audioItem.appendChild(logoImage)
        var songName = document.createElement("p")
        songName.textContent = `${audios[i].title}`
        audioItem.appendChild(songName)
        audioContainer.appendChild(audioItem)
    }

}

play.addEventListener('click' , function () {
    audio.play()
})

pause.addEventListener('click' , function () {
    audio.pause()
})

stop.addEventListener('click' , function () {
    audio.currentTime = 0
    audio.play()
})



muted.addEventListener('click' , function () {
    audio.muted = !audio.muted
    
    if (audio.muted) {
        muted.innerHTML = `<i class=" fa-solid fa-volume-xmark"></i>` 
        volume.value = 0
    } else {
        muted.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
        volume.value = 70
    }
})

volume.addEventListener('input' , function () {
    audio.volume = volume.value / 100
})

forward.addEventListener('click' , function () {
    currentIndex = (currentIndex + 1) % audios.length
    loadAudio(currentIndex)
    audio.play()
})

backward.addEventListener('click' , function () {
    currentIndex = (currentIndex + audios.length - 1) % audios.length
    loadAudio(currentIndex)
    audio.play()
})

duration.addEventListener('input' , function () {
    audio.currentTime = (duration.value/100) * audio.duration
    if (audio.currentTime === audio.duration) {
        forward.click()
    }
})

audio.addEventListener("timeupdate" , function () {
    duration.value = (audio.currentTime / audio.duration) * 100
    if (duration.value === duration.max) {
        forward.click()
    }
})


window.onload = function () {
    createPlayList ()
    loadAudio (currentIndex , true)

    
    document.addEventListener('click' , (e) => {
        if (e.target.className === 'audio') {
            audioContainer.children[currentIndex].classList.remove("order")
            currentIndex = e.target.getAttribute('data-index')
            e.target.classList.add("order")
            loadAudio(currentIndex)
            audio.play()
            audioContainer.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }
        
    })
}



console.dir(audio)