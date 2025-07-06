document.addEventListener('DOMContentLoaded', function() {
    // Place audio controls in the #audioControls div
    const controls = document.createElement('div');
    controls.innerHTML = `
        <button id="toggleAudio">Pause</button>
        <div style="margin-top:1em;">
            <label>Volume
                <input type="range" id="audioVolume" min="0" max="1" step="0.01" value="0.7" style="vertical-align:middle;">
            </label>
        </div>
    `;
    document.getElementById('audioControls').appendChild(controls);

    const bgAudio = new Audio('main.mp3');
    bgAudio.loop = true;
    bgAudio.volume = 0.7;
    bgAudio.autoplay = true;

    let isPlaying = true;
    // Try to play audio automatically
    bgAudio.play().catch(() => {
        // If autoplay fails, set button to Play
        document.getElementById('toggleAudio').textContent = 'Play';
        isPlaying = false;
    });

    const toggleBtn = document.getElementById('toggleAudio');
    toggleBtn.onclick = () => {
        if (isPlaying) {
            bgAudio.pause();
            toggleBtn.textContent = 'Play';
        } else {
            bgAudio.play();
            toggleBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    };
    document.getElementById('audioVolume').oninput = (e) => {
        bgAudio.volume = e.target.value;
    };
    // Update button if user pauses audio via other means
    bgAudio.addEventListener('pause', () => {
        toggleBtn.textContent = 'Play';
        isPlaying = false;
    });
    bgAudio.addEventListener('play', () => {
        toggleBtn.textContent = 'Pause';
        isPlaying = true;
    });

    // Popup logic
    document.getElementById('helloBtn').addEventListener('click', function() {
        // Show custom modal
        document.getElementById('customModal').style.display = 'block';
        // Play audio immediately
        const audio = new Audio('force.mp3');
        audio.play();
        // Hide close button and close automatically after 3 seconds
        document.getElementById('closeModal').style.display = 'none';
        // Track if music was playing before popup
        const wasPlaying = !bgAudio.paused;
        if (wasPlaying) bgAudio.pause();
        setTimeout(function() {
            document.getElementById('customModal').style.display = 'none';
            document.getElementById('closeModal').style.display = '';
            // Resume main.mp3 only if it was playing before
            if (wasPlaying) {
                bgAudio.play();
            }
        }, 3000);
    });
});
