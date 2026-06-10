document.addEventListener('DOMContentLoaded', () => {
 
/* ==========================================
   AUDIO PLAYER
========================================== */

const audioContainer = document.getElementById('audioControls');

let bgAudio = null;
let isPlaying = false;

if (audioContainer) {

    audioContainer.innerHTML = `
        <button id="toggleAudio" class="btn btn-primary">
            Play Music
        </button>

        <div style="margin-top:15px;">
            <label>
                Volume
                <input
                    type="range"
                    id="audioVolume"
                    min="0"
                    max="1"
                    step="0.01"
                    value="0.7">
            </label>
        </div>
    `;

    bgAudio = new Audio('main.mp3');
    bgAudio.loop = true;
    bgAudio.volume = 0.7;

    const toggleBtn = document.getElementById('toggleAudio');
    const volumeSlider = document.getElementById('audioVolume');

    bgAudio.play()
        .then(() => {
            isPlaying = true;
            toggleBtn.textContent = 'Pause Music';
        })
        .catch(() => {
            isPlaying = false;
            toggleBtn.textContent = 'Play Music';
        });

    toggleBtn.addEventListener('click', () => {

        if (isPlaying) {
            bgAudio.pause();
        } else {
            bgAudio.play();
        }

    });

    volumeSlider.addEventListener('input', (e) => {
        bgAudio.volume = e.target.value;
    });

    bgAudio.addEventListener('play', () => {
        isPlaying = true;
        toggleBtn.textContent = 'Pause Music';
    });

    bgAudio.addEventListener('pause', () => {
        isPlaying = false;
        toggleBtn.textContent = 'Play Music';
    });

}

/* ==========================================
   MODAL / FORCE BUTTON
========================================== */

const helloBtn = document.getElementById('helloBtn');
const modal = document.getElementById('customModal');
const closeModal = document.getElementById('closeModal');

if (helloBtn && modal) {

    helloBtn.addEventListener('click', () => {

        modal.classList.add('open');

        document.body.style.overflow = 'hidden';

        const forceAudio = new Audio('force.mp3');

        forceAudio.play().catch(() => {});

        const wasPlaying = bgAudio && !bgAudio.paused;

        if (wasPlaying) {
            bgAudio.pause();
        }

        setTimeout(() => {

            modal.classList.remove('open');

            document.body.style.overflow = '';

            if (wasPlaying && bgAudio) {
                bgAudio.play().catch(() => {});
            }

        }, 3000);

    });

}

if (closeModal && modal) {

    closeModal.addEventListener('click', () => {

        modal.classList.remove('open');

        document.body.style.overflow = '';

    });

}

if (modal) {

    modal.addEventListener('click', (e) => {

        if (e.target === modal) {

            modal.classList.remove('open');

            document.body.style.overflow = '';

        }

    });

}

/* ==========================================
   FEEDBACK FORM TOGGLE
========================================== */

const showFormBtn = document.getElementById('showFormBtn');
const googleForm = document.getElementById('googleFormContainer');

if (showFormBtn && googleForm) {

    showFormBtn.addEventListener('click', () => {

        if (
            googleForm.style.display === 'none' ||
            googleForm.style.display === ''
        ) {

            googleForm.style.display = 'block';

        } else {

            googleForm.style.display = 'none';

        }

    });

}

/* ==========================================
   MOBILE NAVIGATION
========================================== */

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {

    navToggle.addEventListener('click', () => {

        const expanded =
            navToggle.getAttribute('aria-expanded') === 'true';

        navToggle.setAttribute(
            'aria-expanded',
            String(!expanded)
        );

        siteNav.classList.toggle('open');

    });

}

/* ==========================================
   PAGE REVEAL ANIMATION
========================================== */

const mainEl = document.querySelector('main');

if (mainEl) {

    requestAnimationFrame(() => {

        mainEl.classList.add('revealed');

    });

}

/* ==========================================
   PAGE TRANSITIONS
========================================== */

document.querySelectorAll('nav a').forEach((link) => {

    link.addEventListener('click', (e) => {

        const href = link.getAttribute('href');

        if (!href) return;

        e.preventDefault();

        if (mainEl) {

            mainEl.classList.add('page-exit');

        }

        setTimeout(() => {

            window.location.href = href;

        }, 300);

        });

    });

});


