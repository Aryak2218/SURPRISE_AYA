// ===========================
// STORY PROGRESS
// ===========================

let progressTimer;

// ===========================
// SLIDE SYSTEM
// ===========================

let currentSlide = 0;

const slides =
document.querySelectorAll(".slide");

const totalSlides =
slides.length;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

    updateProgress();

    const storyProgress =
    document.getElementById(
    "storyProgress"
    );

    if(
        slides[index].classList.contains(
        "story-slide"
        )
    ){

        if(storyProgress){

            storyProgress.style.display =
            "block";

        }

        startStoryProgress();

    }else{

        if(storyProgress){

            storyProgress.style.display =
            "none";

        }

        clearInterval(
        progressTimer
        );

    }

}

// ===========================
// STORY AUTO PROGRESS
// ===========================

function startStoryProgress(){

    const progress =
    document.getElementById(
    "storyProgress"
    );

    if(!progress) return;

    clearInterval(
    progressTimer
    );

    progress.innerHTML =
    '<div id="storyFill"></div>';

    const fill =
    document.getElementById(
    "storyFill"
    );

    let width = 0;

    progressTimer =
    setInterval(()=>{

        width += 2;

        fill.style.width =
        width + "%";

        if(width >= 100){

            clearInterval(
            progressTimer
            );

            nextSlide();

        }

    },100);

}

// ===========================
// NEXT PREV
// ===========================

function nextSlide(){

    if(
        currentSlide <
        totalSlides - 1
    ){

        currentSlide++;

        showSlide(
        currentSlide
        );

    }

}

function prevSlide(){

    if(
        currentSlide > 0
    ){

        currentSlide--;

        showSlide(
        currentSlide
        );

    }

}

// ===========================
// PROGRESS BAR
// ===========================

function updateProgress(){

    const progress =

    (
        (
            currentSlide + 1
        )
        /
        totalSlides
    )

    * 100;

    const progressBar =
    document.getElementById(
    "progressBar"
    );

    if(progressBar){

        progressBar.style.width =
        progress + "%";

    }

}

// ===========================
// OPEN WEBSITE
// ===========================

function startWebsite(){

    const opening =
    document.getElementById(
    "opening"
    );

    opening.style.opacity =
    "0";

    typing();

    setTimeout(()=>{

        opening.style.display =
        "none";

    },1000);

}

// ===========================
// TYPING EFFECT
// ===========================

const text =

"Untuk perempuan paling cantik, paling kuat, paling hebat, dan paling aku sayang ❤️";

let typingIndex = 0;

function typing(){

    const target =
    document.getElementById(
    "typing"
    );

    if(!target) return;

    if(
        typingIndex <
        text.length
    ){

        target.innerHTML +=
        text.charAt(
        typingIndex
        );

        typingIndex++;

        setTimeout(
        typing,
        45
        );

    }

}

// ===========================
// COUNTER HARI JADIAN
// ===========================

const startDate =
new Date("2025-12-06");

const today =
new Date();

const daysDiff =
Math.abs(
Math.floor(

(
today - startDate
)

/

(
1000 *
60 *
60 *
24
)

)
);

const counter =
document.getElementById(
"daysCounter"
);

if(counter){

    counter.innerHTML =
    daysDiff +
    " Hari ❤️";

}

// ===========================
// ALASAN BANGGA
// ===========================

const proudMessages = [

"❤️ Aku bangga karena kamu selalu berusaha semaksimal mungkin",

"❤️ Aku bangga karena kamu nggak gampang menyerah",

"❤️ Aku bangga karena kamu kuat walaupun sering bilang capek",

"❤️ Aku bangga karena kamu berhasil sampai seminar proposal",

"❤️ Aku bangga karena kamu selalu mau belajar",

"❤️ Aku bangga karena kamu selalu jadi versi terbaik dari diri kamu",

"❤️ Aku bangga karena kamu adalah Noor Alya Oktavia ❤️",

"❤️ Aku bangga karena aku punya kamu ❤️"

];

let proudIndex = 0;

function rotateProud(){

    const target =
    document.getElementById(
    "proudText"
    );

    if(!target) return;

    target.innerHTML =

    proudMessages[
    proudIndex
    ];

    proudIndex++;

    if(
        proudIndex >=
        proudMessages.length
    ){

        proudIndex = 0;

    }

}

rotateProud();

setInterval(
rotateProud,
3000
);

// ===========================
// MOTIVASI
// ===========================

function showMotivation(){

    const motivation =
    document.getElementById(
    "motivationText"
    );

    if(!motivation) return;

    motivation.innerHTML =

    "❤️ Sayangku... kalau revisinya banyak jangan takut yaa. Kerjain satu-satu pelan-pelan. Sempro aja bisa kamu lewatin dengan keren banget, masa revisi sama semhas nggak bisa? Aku percaya banget sama kamu. Aku bakal selalu ada buat nyemangatin kamu sampai semuanya selesai. Jadi semangat terus ya cantiknya aku ❤️🥹";

}

// ===========================
// PESAN RAHASIA
// ===========================

function showLove(){

    const love =
    document.getElementById(
    "love"
    );

    if(!love) return;

    love.innerHTML =

    "❤️ Aku sayang banget sama kamu. Makasih udah hadir di hidup aku. Makasih udah bertahan sampai sejauh ini. Aku bangga punya kamu, bahagia punya kamu, dan aku pengen terus sama kamu sampai tua nanti ❤️🥹🌹";

}

// ===========================
// MODAL FOTO
// ===========================

function openModal(img){

    const modal =
    document.getElementById(
    "imageModal"
    );

    const modalImg =
    document.getElementById(
    "modalImg"
    );

    modal.style.display =
    "block";

    modalImg.src =
    img.src;

}

function closeModal(){

    document.getElementById(
    "imageModal"
    ).style.display =
    "none";

}

// ===========================
// CLOSE MODAL OUTSIDE CLICK
// ===========================

window.onclick =
function(e){

    const modal =
    document.getElementById(
    "imageModal"
    );

    if(
        e.target === modal
    ){

        modal.style.display =
        "none";

    }

};

// ===========================
// KEYBOARD SUPPORT
// ===========================

document.addEventListener(
"keydown",
function(e){

    if(
        e.key ===
        "ArrowRight"
    ){

        nextSlide();

    }

    if(
        e.key ===
        "ArrowLeft"
    ){

        prevSlide();

    }

}
);

// ===========================
// HEART ANIMATION
// ===========================

for(
let i = 0;
i < 30;
i++
){

    const heart =
    document.createElement(
    "div"
    );

    heart.classList.add(
    "heart"
    );

    heart.innerHTML =
    "❤️";

    heart.style.left =

    Math.random() * 100
    + "%";

    heart.style.opacity =
    Math.random();

    heart.style.animationDuration =

    (
        Math.random() * 5
        + 5
    )

    + "s";

    document.body.appendChild(
    heart
    );

}

// ===========================
// INIT
// ===========================

showSlide(0);

updateProgress();
