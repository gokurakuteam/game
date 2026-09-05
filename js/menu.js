/**
 * Das Abendessen - Модуль меню
 */

const Menu = {
    cloudOffset: 0,
    mouseX: 0,
    mouseY: 0,

    init() {
        this.parallaxBg = document.getElementById('parallax');
        this.layers = document.querySelectorAll('.layer');
        
        this.btnPlay = document.getElementById('btn-play');
        this.btnMusic = document.getElementById('btn-music');
        this.btnSound = document.getElementById('btn-sound');
        
        this.pauseMenu = document.getElementById('pause-menu');
        this.btnResume = document.getElementById('btn-resume');
        this.btnPauseMusic = document.getElementById('btn-pause-music');
        this.btnPauseSound = document.getElementById('btn-pause-sound');
        this.btnExit = document.getElementById('btn-exit');
        
        this.ambientAudio = document.getElementById('ambient-audio');
        this.horrorAudio = document.getElementById('horror-audio');
        this.windAudio = document.getElementById('wind-audio');
        this.currentMusicTrack = 'ambient';
        this.audioStarted = false;

        this.bindEvents();
        this.animateParallax();
    },

    startAudioEngine() {
        if (this.audioStarted) return;
        this.ambientAudio.volume = 0.5;
        if (this.horrorAudio) this.horrorAudio.volume = 0.55;
        this.windAudio.volume = 0.7;
        
        Settings.music = !this.btnMusic.innerText.includes('Вимк');
        Settings.sound = !this.btnSound.innerText.includes('Вимк');
        
        this.updateButtonLabels();

        if (Settings.music) {
            const active = this.currentMusicTrack === 'horror' ? this.horrorAudio : this.ambientAudio;
            if (active) this.safePlayAudio(active);
        }
        if (Settings.sound && document.getElementById('main-menu').classList.contains('active')) {
            this.safePlayAudio(this.windAudio);
        }
        
        this.audioStarted = true;
    },

    playHorrorAmbient() {
        this.currentMusicTrack = 'horror';
        if (this.ambientAudio) this.ambientAudio.pause();
        if (Settings.music && this.horrorAudio && this.audioStarted) {
            this.horrorAudio.volume = 0.55;
            this.safePlayAudio(this.horrorAudio);
        }
    },

    playNormalAmbient() {
        this.currentMusicTrack = 'ambient';
        if (this.horrorAudio) this.horrorAudio.pause();
        if (Settings.music && this.ambientAudio && this.audioStarted) {
            this.ambientAudio.volume = 0.5;
            this.safePlayAudio(this.ambientAudio);
        }
    },

    safePlayAudio(audioElement) {
        if (audioElement && audioElement.paused) {
            const playPromise = audioElement.play();
            if (playPromise !== undefined) playPromise.catch(() => {});
        }
    },

    updateButtonLabels() {
        this.btnMusic.innerText = `Музика: ${Settings.music ? 'Увімк' : 'Вимк'}`;
        this.btnPauseMusic.innerText = `Музика: ${Settings.music ? 'Увімк' : 'Вимк'}`;
        this.btnSound.innerText = `Звуки: ${Settings.sound ? 'Увімк' : 'Вимк'}`;
        this.btnPauseSound.innerText = `Звуки: ${Settings.sound ? 'Увімк' : 'Вимк'}`;
    },

    toggleMusic() {
        Settings.music = !Settings.music;
        this.updateButtonLabels();
        if (this.audioStarted) {
            if (Settings.music) {
                const active = this.currentMusicTrack === 'horror' ? this.horrorAudio : this.ambientAudio;
                if (active) this.safePlayAudio(active);
            } else {
                if (this.ambientAudio) this.ambientAudio.pause();
                if (this.horrorAudio) this.horrorAudio.pause();
            }
        }
    },

    toggleSound() {
        Settings.sound = !Settings.sound;
        this.updateButtonLabels();
        if (this.audioStarted) {
            if (Settings.sound && document.getElementById('main-menu').classList.contains('active')) {
                this.safePlayAudio(this.windAudio);
            } else {
                this.windAudio.pause();
            }
        }
    },

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            if (!document.getElementById('main-menu').classList.contains('active')) return;
            this.mouseX = (e.clientX - window.innerWidth / 2);
            this.mouseY = (e.clientY - window.innerHeight / 2);
        });

        document.addEventListener('pointerdown', () => this.startAudioEngine(), { once: true });
        document.addEventListener('keydown', () => this.startAudioEngine(), { once: true });

        this.btnPlay.addEventListener('click', (e) => {
            e.stopPropagation();
            this.startAudioEngine();
            this.btnPlay.blur();
            
            document.getElementById('main-menu').classList.remove('active');
            document.getElementById('game-container').classList.add('active');
            this.windAudio.pause();
            
            if (Settings.music) this.safePlayAudio(this.ambientAudio);
            
            Game.start();
            Cutscenes.wakeUp(); 
        });

        this.btnMusic.addEventListener('click', (e) => { e.stopPropagation(); this.startAudioEngine(); this.toggleMusic(); this.btnMusic.blur(); });
        this.btnSound.addEventListener('click', (e) => { e.stopPropagation(); this.startAudioEngine(); this.toggleSound(); this.btnSound.blur(); });
        
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && document.getElementById('game-container').classList.contains('active')) {
                this.togglePauseMenu();
            }
        });

        this.btnResume.addEventListener('click', () => { this.togglePauseMenu(); this.btnResume.blur(); });
        this.btnPauseMusic.addEventListener('click', () => { this.toggleMusic(); this.btnPauseMusic.blur(); });
        this.btnPauseSound.addEventListener('click', () => { this.toggleSound(); this.btnPauseSound.blur(); });

        this.btnExit.addEventListener('click', () => {
            this.btnExit.blur();
            this.pauseMenu.classList.add('hidden');
            document.getElementById('game-container').classList.remove('active');
            document.getElementById('main-menu').classList.add('active');
            if (Settings.sound && this.audioStarted) this.safePlayAudio(this.windAudio);
            Game.isPaused = false;
        });
    },

    togglePauseMenu() {
        if (Dialog.isActive) return;
        const isHidden = this.pauseMenu.classList.contains('hidden');
        if (isHidden) {
            this.pauseMenu.classList.remove('hidden');
            Game.isPaused = true;
            if (Settings.music) this.ambientAudio.volume = 0.2;
        } else {
            this.pauseMenu.classList.add('hidden');
            Game.isPaused = false;
            if (Settings.music) {
                this.ambientAudio.volume = Dialog.normalMusicVolume || 0.5;
                this.safePlayAudio(this.ambientAudio);
            }
        }
    },
    
    animateParallax() {
        if (document.getElementById('main-menu').classList.contains('active')) {
            this.cloudOffset += 0.2;
            this.layers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed'));
                const xOffset = (this.mouseX * speed) / 100;
                const yOffset = (this.mouseY * speed) / 100;
                layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                layer.style.backgroundPositionX = `-${(this.cloudOffset * speed)}px`;
            });
        }
        requestAnimationFrame(this.animateParallax.bind(this));
    }
};
