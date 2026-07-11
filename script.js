// ==============================
// OPEN INVITATION
// ==============================

const openBtn = document.getElementById("openInvitation");
const opening = document.querySelector(".opening");
const music = document.getElementById("music");

if (openBtn && opening) {
  openBtn.addEventListener("click", function () {
    opening.style.display = "none";

    if (music) {
      music.play().catch(() => {});
    }

    document.body.style.overflowY = "auto";
  });
}

// ==============================
// COUNTDOWN
// ==============================

const targetDate = new Date("September 28, 2026 08:00:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();

  const distance = targetDate - now;

  if (distance <= 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (document.getElementById("days"))
    document.getElementById("days").innerHTML = days;

  if (document.getElementById("hours"))
    document.getElementById("hours").innerHTML = hours;

  if (document.getElementById("minutes"))
    document.getElementById("minutes").innerHTML = minutes;

  if (document.getElementById("seconds"))
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ==============================
// NAMA TAMU
// ==============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest && document.getElementById("guest")) {

  document.getElementById("guest").innerHTML =
    "Kepada Yth.<br><strong>" +
    decodeURIComponent(guest) +
    "</strong>";

}


// ==============================
// ANIMASI SCROLL
// ==============================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

});

document.querySelectorAll("section").forEach((section) => {

  observer.observe(section);

});


// ==============================
// GALLERY LIGHTBOX
// ==============================

document.querySelectorAll(".grid img").forEach((img) => {

  img.addEventListener("click", function () {

    const popup = document.createElement("div");

    popup.style.position = "fixed";
    popup.style.left = "0";
    popup.style.top = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,.9)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "9999";

    const photo = document.createElement("img");

    photo.src = this.src;
    photo.style.maxWidth = "90%";
    photo.style.maxHeight = "90%";
    photo.style.borderRadius = "15px";

    popup.appendChild(photo);

    popup.onclick = function () {

      popup.remove();

    };

    document.body.appendChild(popup);

  });

});


// ==============================
// MUSIC BUTTON
// ==============================

const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {

    musicBtn.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        if (music.paused) {
            music.play();
            musicBtn.innerHTML = "🎵";
            musicBtn.classList.add("playing");
        } else {
            music.pause();
            musicBtn.innerHTML = "🔇";
            musicBtn.classList.remove("playing");
        }

    });

}


// ==============================
// BUNGA SAKURA
// ==============================

function bunga() {

  const sakura = document.createElement("div");

  sakura.className = "sakura";

  sakura.innerHTML = "🌸";

  sakura.style.left = Math.random() * 100 + "vw";

  sakura.style.animationDuration = (Math.random() * 5 + 5) + "s";

  document.body.appendChild(sakura);

  setTimeout(() => {

    sakura.remove();

  }, 9000);

}

setInterval(bunga, 600);


// ==============================
// PRELOADER
// ==============================

window.addEventListener("load", function () {

  const preloader = document.getElementById("preloader");

  if (preloader) {

    preloader.style.display = "none";

  }

});


// ==============================
// BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

  if (!topBtn) return;

  if (window.scrollY > 400) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

if (topBtn) {

  topBtn.onclick = function () {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  };

}


// ==============================
// SHARE
// ==============================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

  shareBtn.onclick = async function () {

    if (navigator.share) {

      await navigator.share({

        title: "Wedding Invitation",

        text: "Kami Mengundang Anda",

        url: location.href

      });

    }

  };

}


// ==============================
// GOOGLE CALENDAR
// ==============================

const calendarBtn = document.getElementById("calendarBtn");

if (calendarBtn) {

  calendarBtn.href =
    "https://calendar.google.com/calendar/render?action=TEMPLATE";

}


// ==============================
// UCAPAN
// ==============================

function kirimUcapan() {

  const nama = document.getElementById("nama").value;

  const isi = document.getElementById("ucapan").value;

  if (nama === "" || isi === "") {

    alert("Silakan isi nama dan ucapan.");

    return;

  }

  const card = document.createElement("div");

  card.className = "cardUcapan";

  card.innerHTML =
    "<h3>" + nama + "</h3><p>" + isi + "</p>";

  document.getElementById("hasilUcapan").prepend(card);

  document.getElementById("nama").value = "";

  document.getElementById("ucapan").value = "";

}function copyRekening(){

navigator.clipboard.writeText("1780010394407");

const toast=document.createElement("div");

toast.innerHTML="✅ Nomor rekening berhasil disalin";

toast.style.position="fixed";
toast.style.bottom="100px";
toast.style.left="50%";
toast.style.transform="translateX(-50%)";
toast.style.background="#222";
toast.style.color="#fff";
toast.style.padding="12px 20px";
toast.style.borderRadius="30px";
toast.style.zIndex="99999";

document.body.appendChild(toast);

setTimeout(()=>{
toast.remove();
},2500);

}