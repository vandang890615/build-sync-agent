// Background Music Player
class MusicPlayer {
    constructor() {
        this.audio = null;
        this.isPlaying = false;
        this.isMinimized = false;
        this.currentVolume = 0.3;

        this.init();
    }

    init() {
        // Create audio element
        this.audio = new Audio();
        // Using a royalty-free ambient music from a CDN
        // You can replace this with your own music file
        this.audio.src = 'https://cdn.pixabay.com/audio/2022/03/10/audio_2c87ba15c6.mp3';
        this.audio.loop = true;
        this.audio.volume = this.currentVolume;

        // Create player UI
        this.createPlayerUI();

        // Add event listeners
        this.addEventListeners();
    }

    createPlayerUI() {
        const playerHTML = `
            <div class="music-player" id="musicPlayer">
                <button class="music-toggle" id="musicToggle" aria-label="Toggle music">
                    <span id="playIcon">🎵</span>
                </button>
                <div class="music-info">
                    <div class="music-title">Ambient Background</div>
                    <div class="music-artist">Relaxing Music</div>
                </div>
                <div class="volume-control">
                    <span class="volume-icon" id="volumeIcon">🔊</span>
                    <input 
                        type="range" 
                        class="volume-slider" 
                        id="volumeSlider" 
                        min="0" 
                        max="100" 
                        value="30"
                        aria-label="Volume control"
                    >
                </div>
                <button class="minimize-btn" id="minimizeBtn" aria-label="Minimize player">−</button>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', playerHTML);
    }

    addEventListeners() {
        const toggleBtn = document.getElementById('musicToggle');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeIcon = document.getElementById('volumeIcon');
        const minimizeBtn = document.getElementById('minimizeBtn');
        const player = document.getElementById('musicPlayer');

        // Toggle play/pause
        toggleBtn.addEventListener('click', () => this.togglePlay());

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            this.setVolume(volume);
        });

        // Volume icon click to mute/unmute
        volumeIcon.addEventListener('click', () => this.toggleMute());

        // Minimize button
        minimizeBtn.addEventListener('click', () => this.toggleMinimize());

        // Auto-play attempt (will only work if user has interacted with page)
        document.addEventListener('click', () => {
            if (!this.isPlaying && !this.hasInteracted) {
                this.hasInteracted = true;
                // Don't auto-play, let user choose
            }
        }, { once: true });
    }

    togglePlay() {
        const playIcon = document.getElementById('playIcon');
        const player = document.getElementById('musicPlayer');

        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
            playIcon.textContent = '🎵';
            player.classList.remove('playing');
        } else {
            this.audio.play().then(() => {
                this.isPlaying = true;
                playIcon.textContent = '⏸️';
                player.classList.add('playing');
            }).catch(error => {
                console.log('Audio play failed:', error);
            });
        }
    }

    setVolume(volume) {
        this.currentVolume = volume;
        this.audio.volume = volume;
        this.updateVolumeIcon();
    }

    toggleMute() {
        const volumeSlider = document.getElementById('volumeSlider');

        if (this.audio.volume > 0) {
            this.previousVolume = this.audio.volume;
            this.audio.volume = 0;
            volumeSlider.value = 0;
        } else {
            const vol = this.previousVolume || 0.3;
            this.audio.volume = vol;
            volumeSlider.value = vol * 100;
        }

        this.updateVolumeIcon();
    }

    updateVolumeIcon() {
        const volumeIcon = document.getElementById('volumeIcon');

        if (this.audio.volume === 0) {
            volumeIcon.textContent = '🔇';
        } else if (this.audio.volume < 0.5) {
            volumeIcon.textContent = '🔉';
        } else {
            volumeIcon.textContent = '🔊';
        }
    }

    toggleMinimize() {
        const player = document.getElementById('musicPlayer');
        const minimizeBtn = document.getElementById('minimizeBtn');

        this.isMinimized = !this.isMinimized;

        if (this.isMinimized) {
            player.classList.add('minimized');
            minimizeBtn.textContent = '+';
        } else {
            player.classList.remove('minimized');
            minimizeBtn.textContent = '−';
        }
    }
}

// Initialize music player when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.musicPlayer = new MusicPlayer();
    });
} else {
    window.musicPlayer = new MusicPlayer();
}
