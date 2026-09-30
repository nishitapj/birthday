const effects = document.getElementById("effects");

/* ===== Luxury Particles ===== */

for (let i = 0; i < 120; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.animationDuration = (2 + Math.random() * 4) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    effects.appendChild(particle);
}

/* ===== Cursor Glow ===== */

const glow = document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});

}

/* ===== Micro dust particles inside the landing card ===== */

const cardDust = document.querySelector(".card-dust");

if (cardDust) {

    for (let i = 0; i < 18; i++) {

        const dust = document.createElement("span");

        const size = Math.random() * 3 + 1.5;

        dust.style.width = size + "px";
        dust.style.height = size + "px";
        dust.style.left = (5 + Math.random() * 90) + "%";
        dust.style.top = (10 + Math.random() * 80) + "%";

        dust.style.animationDuration = (6 + Math.random() * 8) + "s";
        dust.style.animationDelay = Math.random() * 10 + "s";

        cardDust.appendChild(dust);

    }

}

/* ===== Ripple effect on the open button ===== */

const openBtn = document.getElementById("openBtn");

if (openBtn) {

    openBtn.addEventListener("click", (e) => {

        const rect = openBtn.getBoundingClientRect();

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const size = Math.max(rect.width, rect.height) * 1.2;

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        openBtn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 700);

    });

}

/* ===== Open Reveal Screen ===== */

const button=document.getElementById("openBtn");
const reveal=document.getElementById("revealScreen");

button.addEventListener("click",()=>{

    reveal.classList.add("show");

});

/* ===== Gift Animation ===== */

const gift=document.querySelector(".gift-box");
const lid=document.querySelector(".gift-lid");

const burst = document.querySelector(".energy-burst");

const cards = document.querySelectorAll(".photo-stack .photo");
const sparkContainer = document.querySelector(".spark-container");

const giftWrap = document.querySelector(".gift-wrap");
const cinemaBg = document.querySelector(".cinema-bg");
const dustField = document.querySelector(".dust-field");
const starField = document.querySelector(".star-field");
const sceneShootingStars = document.querySelector(".scene-shooting-stars");

/* ===== Twinkling stars (150-250) ===== */

if (starField) {

    const starCount = 150 + Math.floor(Math.random() * 101); // 150-250

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 2.4 + 1.5;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDuration = (2.5 + Math.random() * 5) + "s";
        star.style.animationDelay = Math.random() * 6 + "s";

        starField.appendChild(star);

    }

}

/* ===== Occasional shooting stars (every 8-15s) ===== */

if (sceneShootingStars) {

    const spawnShootingStar = () => {

        const star = document.createElement("span");

        star.style.left = (15 + Math.random() * 70) + "%";
        star.style.top = (2 + Math.random() * 20) + "%";

        sceneShootingStars.appendChild(star);

        setTimeout(() => star.remove(), 1200);

        // Schedule next one in 8-15 seconds
        setTimeout(spawnShootingStar, 8000 + Math.random() * 7000);

    };

    // First star after a short wait
    setTimeout(spawnShootingStar, 8000 + Math.random() * 7000);

}

/* ===== Soft floating dust particles ===== */

if (dustField) {

    for (let i = 0; i < 40; i++) {

        const dust = document.createElement("span");

        dust.className = "dust";

        const size = Math.random() * 3 + 1.5;

        dust.style.width = size + "px";
        dust.style.height = size + "px";
        dust.style.left = Math.random() * 100 + "%";
        dust.style.top = Math.random() * 100 + "%";

        dust.style.animationDuration = (8 + Math.random() * 10) + "s";
        dust.style.animationDelay = Math.random() * 12 + "s";

        dustField.appendChild(dust);

    }

}

/* ===== Slow cinematic parallax (background vs gift) ===== */

if (giftWrap && cinemaBg) {

// Hovering the gift also scales it slightly.
    const scaleOnHover = () =>
        (giftWrap.matches(":hover") ? " scale(1.04)" : "");

    document.addEventListener("mousemove", (e) => {

        const cx = (e.clientX / window.innerWidth - 0.5);
        const cy = (e.clientY / window.innerHeight - 0.5);

        // Background drifts opposite to the gift: subtle parallax
        cinemaBg.style.transform =
            "translate(" + (cx * -18) + "px," + (cy * -12) + "px)";

        giftWrap.classList.add("parallax");
        giftWrap.style.transform =
            "translate(" + (cx * 10) + "px," + (cy * 6) + "px)" + scaleOnHover();

    });

    document.addEventListener("mouseleave", () => {

        cinemaBg.style.transform = "translate(0,0)";
        giftWrap.style.transform = "";

    });

}

gift.addEventListener("click",()=>{

    gift.classList.add("shake");

    setTimeout(()=>{

        gift.classList.remove("shake");

        // Open gift lid — heavier, weightier, more realistic motion
        lid.classList.add("open");

// Pink Energy Burst
burst.classList.add("show");

setTimeout(() => {

    burst.classList.remove("show");

}, 900);

createSparkBurst();

// >>> PHOTO REVEAL (REVERTED FLOW) <<<

        // Hide the gift scene behind the reveal
        setTimeout(() => {

            document.querySelector(".gift-scene").style.display = "none";

        }, 650);

        // 5 photos appear with a smooth fade + slight scale settle
        // (no camera blur, no dark transition, no flash, no sparkles)
        setTimeout(() => {

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 200);

            });

        }, 800);

        // After a short pause, show the centered message (fade in),
        // then continue to the Storybook once the message fades out.
        setTimeout(() => {

            showTypewriterMessage();

        }, 3000);

    },720);

});

/* =========================================================
   TYPEWRITER MESSAGE
========================================================= */

const messageOverlay = document.querySelector(".message-overlay");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

const TEXT_LINE_1 = "Every picture holds a beautiful memory...";
const TEXT_LINE_2 = "And today is all about celebrating you.";

function typeText(element, text, speed, callback) {

    let index = 0;

    element.textContent = "";
    element.classList.add("typing", "active");

    const timer = setInterval(() => {

        element.textContent += text.charAt(index);
        index++;

        if (index >= text.length) {

            clearInterval(timer);
            element.classList.remove("active");

            if (callback) callback();

        }

    }, speed);

}

function showTypewriterMessage() {

    // Show dim + pink glow overlay
    messageOverlay.classList.add("show");

    // Type line 1
    typeText(line1, TEXT_LINE_1, 45, () => {

        // Pause 1 second, then type line 2
        setTimeout(() => {

            typeText(line2, TEXT_LINE_2, 45, () => {

// Keep visible ~3 seconds, then fade out
                setTimeout(() => {

                    messageOverlay.classList.remove("show");

                    // Reset lines for potential re-trigger
                    setTimeout(() => {

                        line1.textContent = "";
                        line2.textContent = "";
                        line1.classList.remove("typing");
                        line2.classList.remove("typing");

                    }, 900);

                    // Open the storybook once the message has faded out
                    setTimeout(() => {

                        openStorybook();

                    }, 900);

                }, 3000);

            });

        }, 1000);

    });

}

function createSparkBurst(){

    for(let i=0;i<90;i++){

        const spark=document.createElement("div");

        spark.className="spark";

        const angle=Math.random()*360;

        const distance=250+Math.random()*350;

        spark.style.left="50%";
        spark.style.top="50%";

        spark.style.transition="1s ease-out";

        sparkContainer.appendChild(spark);

        requestAnimationFrame(()=>{

            spark.style.opacity="1";

            spark.style.transform=
            `translate(
                ${Math.cos(angle*Math.PI/180)*distance}px,
                ${Math.sin(angle*Math.PI/180)*distance}px
            ) scale(0)`;

        });

setTimeout(()=>{

            spark.style.opacity="0";

        },400);

        setTimeout(()=>{

            spark.remove();

        },1000);

    }

}

/* =========================================================
   PREMIUM BIRTHDAY STORYBOOK
========================================================= */

/* The photos available for the storybook are sourced from the
   existing photo-stack images. The book creates exactly ONE page
   per detected photo, so adding more photos automatically adds
   more pages — no hardcoded page count, no duplicates. */

const storybook = document.querySelector(".storybook");
const book = document.querySelector(".book");
const bookCover = document.querySelector(".book-cover");
const flipLeaf = document.querySelector(".flip-leaf");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

/* LEFT page: photo */
const pageImg = document.querySelector(".page-left .page-img");

/* RIGHT page: message */
const pageWish = document.querySelector(".page-right .page-wish");

/* Turning leaf */
const flipImg = document.querySelector(".flip-leaf .flip-img");
const flipWish = document.querySelector(".flip-leaf .flip-back .flip-wish");

/* Universal birthday wishes — suitable for any friend. */

const WISH_LINES = [
    "Wishing you an amazing day filled with joy and laughter! 🎉",
    "Happy Birthday! May this year bring you every happiness. 🌟",
    "Enjoy your special day to the fullest birthday buddy! 🎂",
    "Sending you the warmest wishes on your special day! 💫",
    "Happy Birthday! Here's to a year of great adventures. 🎈",
    "May your day be as wonderful as you are! ✨",
    "Wishing you good health, success and lasting smiles! 🍀",
    "Happy Birthday! So glad to celebrate with you today. 🎊",
    "May all your dreams come true this year! 🌠",
    "Cheers to you and to an incredible year ahead! 🥳"
];

/* Auto-detect the available photos from the reveal photo stack.
   Each unique image path becomes one scrapbook page. */

const photoImages = document.querySelectorAll(".photo-stack .photo");

const STORY_PAGES = Array.from(photoImages).map((img, index) => ({
    img: img.getAttribute("src"),
    wish: WISH_LINES[index % WISH_LINES.length]
}));

let currentPage = 0;
let isFlipping = false;

/* Open the storybook and reveal the closed cover */

function openStorybook() {

    storybook.classList.add("show");

}

/* Clicking the cover opens the book */

bookCover.addEventListener("click", () => {

    book.classList.add("opened");

    renderPage(currentPage);

});

/* Render the two-page spread (photo left, message right).
   The index is clamped so it can never go below 0 or above
   the last page. */

function renderPage(pageIndex) {

    const lastPage = STORY_PAGES.length - 1;

    currentPage = Math.max(0, Math.min(pageIndex, lastPage));

    const page = STORY_PAGES[currentPage];

    if (!page) return;

    pageImg.src = page.img;
    pageWish.textContent = page.wish;

    pageIndicator.textContent =
        "Page " + (currentPage + 1) + " of " + STORY_PAGES.length;

    prevBtn.disabled = currentPage === 0;

    // The final page gets a dedicated finishing action instead of a disabled button.
    nextBtn.disabled = false;
    nextBtn.textContent = currentPage === lastPage ? "Finish ✨" : "Next →";

}

/* Page flip animation: next */

function goNext() {

    if (isFlipping || currentPage >= STORY_PAGES.length - 1) return;

    isFlipping = true;

    const next = STORY_PAGES[currentPage + 1];

    // Front face shows the current right page being flipped away
    flipImg.src = pageImg.src;
    flipWish.textContent = pageWish.textContent;

    // Show the flipping leaf, then after the flip reveal the next page
    flipLeaf.classList.add("flipping");

    setTimeout(() => {

        try {

            renderPage(currentPage + 1);

        } finally {

            // Hide the leaf and release the lock, even on error.
            flipLeaf.classList.remove("flipping");

            isFlipping = false;

        }

    }, 850);

}

/* Page flip animation: previous */

function goPrev() {

    if (isFlipping || currentPage <= 0) return;

    isFlipping = true;

    const prev = STORY_PAGES[currentPage - 1];

    // Front face shows the current right page being flipped back
    flipImg.src = pageImg.src;
    flipWish.textContent = pageWish.textContent;

    flipLeaf.classList.add("flipping");

    setTimeout(() => {

        try {

            renderPage(currentPage - 1);

        } finally {

            // Hide the leaf and release the lock, even on error.
            flipLeaf.classList.remove("flipping");

            isFlipping = false;

        }

    }, 850);

}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);


/* =========================================================
   FINAL BIRTHDAY FINALE
========================================================= */

const birthdayFinale = document.querySelector(".birthday-finale");
const letterBtn = document.getElementById("letterBtn");
const finalLetter = document.getElementById("finalLetter");
const replayBtn = document.getElementById("replayBtn");
const closeFinaleBtn = document.getElementById("closeFinaleBtn");
const finaleConfetti = document.querySelector(".finale-confetti");
const coverName = document.querySelector(".cover-name");
const personName = document.getElementById("personName");

/* Keep the name on the scrapbook cover in sync with the landing page. */
if (coverName && personName) {
    const name = personName.textContent.trim();
    if (name && name !== "{NAME}") coverName.textContent = name;
}

function launchFinaleConfetti() {
    if (!finaleConfetti) return;
    finaleConfetti.innerHTML = "";

    for (let i = 0; i < 85; i++) {
        const piece = document.createElement("span");
        piece.className = "finale-piece";
        piece.style.left = Math.random() * 100 + "%";
        piece.style.setProperty("--drift", (Math.random() * 260 - 130) + "px");
        piece.style.animationDuration = (3.5 + Math.random() * 4) + "s";
        piece.style.animationDelay = (Math.random() * 1.8) + "s";
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.background = ["#ff8fc3", "#ffd166", "#bda5ff", "#fff0f7", "#8ee8d0"][Math.floor(Math.random() * 5)];
        finaleConfetti.appendChild(piece);
    }
}

function showBirthdayFinale() {
    if (!birthdayFinale) return;
    birthdayFinale.classList.add("show");
    birthdayFinale.setAttribute("aria-hidden", "false");
    launchFinaleConfetti();
}

/* On the final scrapbook page, Next becomes a graceful ending trigger. */
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentPage === STORY_PAGES.length - 1) showBirthdayFinale();
    });
}

/* Open the final sealed letter. */
if (letterBtn) {
    letterBtn.addEventListener("click", () => {
        finalLetter.classList.add("open");
        letterBtn.classList.add("opened");
        letterBtn.querySelector(".letter-front").textContent = "A little message ♥";
        launchFinaleConfetti();
    });
}

/* Replay starts the experience from the beginning without refreshing the page. */
if (replayBtn) {
    replayBtn.addEventListener("click", () => {
        window.location.reload();
    });
}

/* Let the final button simply close the finale so the last memory remains visible. */
if (closeFinaleBtn) {
    closeFinaleBtn.addEventListener("click", () => {
        closeFinaleBtn.textContent = "♡ Memory Saved";
        closeFinaleBtn.disabled = true;
    });
}

/* =========================================================
   AFTERPARTY — three hidden surprises
========================================================= */
const surpriseCards = document.querySelectorAll(".surprise-card");
const surpriseResults = document.querySelectorAll(".surprise-result");
const unlockText = document.getElementById("unlockText");
const unlockBar = document.getElementById("unlockBar");
const openedSurprises = new Set();

surpriseCards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.surprise;
        surpriseCards.forEach(c => c.classList.remove("selected"));
        surpriseResults.forEach(r => r.classList.remove("visible"));
        card.classList.add("selected");
        const result = document.querySelector(`.surprise-result[data-result="${key}"]`);
        if (result) result.classList.add("visible");
        openedSurprises.add(key);
        const count = openedSurprises.size;
        if (unlockText) unlockText.textContent = `${count} / 3 surprises opened`;
        if (unlockBar) unlockBar.style.width = `${count / 3 * 100}%`;
        if (count === 3) {
            setTimeout(() => {
                unlockText.textContent = "✨ The final surprise is unlocked. Scroll down...";
                document.querySelector(".make-wish")?.classList.add("ready");
            }, 450);
        }
    });
});

/* Little constellation: each star reveals a different birthday wish. */
const wishStars = document.querySelectorAll(".wish-star");
const wishReveal = document.getElementById("wishReveal");
wishStars.forEach(star => {
    star.addEventListener("click", () => {
        wishStars.forEach(s => s.classList.remove("active"));
        star.classList.add("active");
        if (wishReveal) {
            wishReveal.textContent = star.dataset.wish || "A little wish, just for you. ✨";
        }
    });
});

/* Final candle moment: a tiny interactive ending before the ultimate screen. */
const makeWish = document.getElementById("makeWish");
const wishBtn = document.getElementById("wishBtn");
const ultimateFinale = document.getElementById("ultimateFinale");
const replayBtnFinal = document.getElementById("replayBtnFinal");

if (wishBtn && makeWish && ultimateFinale) {
    wishBtn.addEventListener("click", () => {
        makeWish.classList.add("wished");
        setTimeout(() => {
            ultimateFinale.classList.add("show");
            ultimateFinale.setAttribute("aria-hidden", "false");
            launchFinaleConfetti();
        }, 1100);
    });
}

if (replayBtnFinal) {
    replayBtnFinal.addEventListener("click", () => window.location.reload());
}
