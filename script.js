// ===========================
// STORY PROGRESS
// ===========================
let progressTimer;

// ===========================
// SLIDE SYSTEM & AUDIO CONTROL
// ===========================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index){
    slides.forEach(slide=>{
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
    updateProgress();

    const storyProgress = document.getElementById("storyProgress");
    const music = document.getElementById("bgMusic");

    // 1. CEK APAKAH SLIDE SAAT INI ADALAH SLIDE FOTO (story-slide)
    if(slides[index].classList.contains("story-slide")){
        if(storyProgress) { storyProgress.style.display = "block"; }
        startStoryProgress();
        
        // MUSIK TETAP BERMAIN DI SLIDE FOTO
        if(music){
            music.play().catch(error => console.log("Musik tertunda interaksi: ", error));
        }
    } 
    // 2. JIKA MASUK KE HALAMAN TRANSISI PERINGATAN, MUSIK AKTIF SEJAK AWAL 🎶
    else if(slides[index].classList.contains("transition-slide")){
        if(storyProgress) { storyProgress.style.display = "none"; }
        clearInterval(progressTimer);
        if(music){
            music.play().catch(error => console.log("Musik tertunda interaksi: ", error));
        }
    }
    // 3. CEK APAKAH INI SLIDE SERTIFIKAT (KITA PELATUK PESTA KONFETI!) 🎉
    else if(slides[index].classList.contains("certificate-slide")){
        if(storyProgress) { storyProgress.style.display = "none"; }
        clearInterval(progressTimer);
        if(music){
            music.play().catch(error => console.log("Musik tertunda interaksi: ", error));
        }
        triggerConfetti(); // Meluncurkan rintik konfeti
    }
    // 4. JIKA KELUAR KE HALAMAN LAINNYA, MUSIK OTOMATIS BERHENTI (PAUSE)
    else {
        if(storyProgress) { storyProgress.style.display = "none"; }
        clearInterval(progressTimer);
        
        if(music){
            music.pause();
        }
    }
}

// =====================================
// STORY AUTO PROGRESS (DIPERLAMA ~12s)
// =====================================
function startStoryProgress(){
    const progress = document.getElementById("storyProgress");
    if(!progress) return;
    clearInterval(progressTimer);
    progress.innerHTML = '<div id="storyFill"></div>';
    const fill = document.getElementById("storyFill");
    let width = 0;

    progressTimer = setInterval(()=>{
        width += 0.9; 
        fill.style.width = width + "%";
        if(width >= 100){
            clearInterval(progressTimer);
            nextSlide();
        }
    }, 50);
}

// ===========================
// NEXT PREV
// ===========================
function nextSlide(){
    if(currentSlide < totalSlides - 1){
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide(){
    if(currentSlide > 0){
        currentSlide--;
        showSlide(currentSlide);
    }
}

// ===========================
// PROGRESS BAR
// ===========================
function updateProgress(){
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    const progressBar = document.getElementById("progressBar");
    if(progressBar){ progressBar.style.width = progress + "%"; }
}

// ===========================
// OPEN WEBSITE
// ===========================
function startWebsite(){
    const opening = document.getElementById("opening");
    opening.style.opacity = "0";
    
    typing();
    setTimeout(()=>{
        opening.style.display = "none";
    },1000);
}

// ===========================
// TYPING EFFECT
// ===========================
const text = "Untuk perempuan paling cantik, paling kuat, paling hebat, dan paling aku sayang ❤️";
let typingIndex = 0;

function typing(){
    const target = document.getElementById("typing");
    if(!target) return;
    if(typingIndex < text.length){
        target.innerHTML += text.charAt(typingIndex);
        typingIndex++;
        setTimeout(typing, 50);
    }
}

// ==========================================
// LIVE COUNTER HARI JADIAN (06 DESEMBER 2025)
// ==========================================
function jalankanCounterJadian() {
    const tanggalJadian = new Date("2025-12-06T00:00:00").getTime();

    setInterval(() => {
        const sekarang = new Date().getTime();
        const selisihWaktu = sekarang - tanggalJadian;

        const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
        const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
        const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

        if (document.getElementById("count-days")) {
            document.getElementById("count-days").innerText = hari;
            document.getElementById("count-hours").innerText = jam;
            document.getElementById("count-minutes").innerText = menit;
            document.getElementById("count-seconds").innerText = detik;
        }
    }, 1000);
}
jalankanCounterJadian();

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
    const target = document.getElementById("proudText");
    if(!target) return;
    target.innerHTML = proudMessages[proudIndex];
    proudIndex++;
    if(proudIndex >= proudMessages.length){ proudIndex = 0; }
}
rotateProud();
setInterval(rotateProud, 3500);

// ===========================
// MOTIVASI
// ===========================
function showMotivation(){
    const motivation = document.getElementById("motivationText");
    const container = document.getElementById("motivationContainer");
    if(!motivation) return;
    
    container.style.display = "block";
    motivation.innerHTML = "❤️ Sayangku... kalau revisinya banyak jangan takut yaa. Kerjain satu-satu pelan-pelan. Sempro aja bisa kamu lewatin dengan keren banget, masa revisi sama semhas nggak bisa? Aku percaya banget sama kamu. Aku bakal selalu ada buat nyemangatin kamu sampai semuanya selesai. Jadi semangat terus ya cantiknya aku ❤️🥹";
}

// ===========================
// PESAN RAHASIA
// ===========================
function showLove(){
    const love = document.getElementById("love");
    const container = document.getElementById("loveContainer");
    if(!love) return;
    
    container.style.display = "block";
    love.innerHTML = "❤️ Aku sayang banget sama kamu. Makasih udah hadir di hidup aku. Makasih udah bertahan sampai sejauh ini. Aku bangga punya kamu, bahagia punya kamu, dan aku pengen terus sama kamu sampai tua nanti ❤️🥹🌹";
}

// ===========================
// MODAL FOTO
// ===========================
function openModal(img){
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// ===========================
// CLOSE MODAL
// ===========================
function closeModal(){
    document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(e){
    const modal = document.getElementById("imageModal");
    if(e.target === modal){ modal.style.display = "none"; }
};

// ===========================
// KEYBOARD SUPPORT
// ===========================
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){ nextSlide(); }
    if(e.key === "ArrowLeft"){ prevSlide(); }
});

// ===========================
// HEART ANIMATION
// ===========================
for(let i = 0; i < 25; i++){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.opacity = Math.random() * 0.6 + 0.4;
    heart.style.fontSize = (Math.random() * 10 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(heart);
}

// ==========================================
// AMBIENT CONFETTI GENERATOR 🎉
// ==========================================
function triggerConfetti() {
    // Bersihkan konfeti lama agar tidak menumpuk di memori browser
    const oldConfetti = document.querySelectorAll('.confetti');
    oldConfetti.forEach(c => c.remove());

    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#ffd700', '#64dfdf', '#7400b8', '#4ea8de'];
    
    // Membuat rintik hujan kertas konfeti sebanyak 80 helai
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 8 + 6 + 'px';
            confetti.style.height = Math.random() * 14 + 8 + 'px';
            confetti.style.animationDuration = Math.random() * 2.5 + 2 + 's'; 
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            
            document.body.appendChild(confetti);
            
            // Hapus elemen otomatis setelah jatuh melewati batas bawah layar
            setTimeout(() => confetti.remove(), 4500);
        }, i * 35); 
    }
}

// ===========================
// INIT
// ===========================
showSlide(0);
updateProgress();
