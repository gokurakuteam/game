// --- МОДУЛЬ ГРИ ---
const Game = {
    player: null,
    room: null,
    isPaused: false,
    
    x: 0,
    y: 0,
    speed: 3.5,
    
    frameX: 0,
    frameY: 0,
    frameCount: 6,
    spriteSize: 96, // 48 * 2 = 96px (2x масштаб від піксель-арту)
    isMoving: false,
    animTimer: 0,
    animInterval: 100,

    // Хітбокс для 96px спрайта (тіло ~36x64)
    hitboxW: 32,
    hitboxH: 18,
    hitboxOffsetX: 32,
    hitboxOffsetY: 72,

    keysBound: false,
    toastTimer: null,

    keys: {
        w: false, a: false, s: false, d: false,
        W: false, A: false, S: false, D: false,
        ц: false, ф: false, і: false, в: false,
        Ц: false, Ф: false, І: false, В: false,
        ArrowUp: false, ArrowLeft: false, ArrowDown: false, ArrowRight: false
    },

    init() {
        this.player = document.getElementById('player');
        this.room = document.getElementById('room');
        this.objectsLayer = document.getElementById('objects-layer');
        this.interactPrompt = document.getElementById('interact-prompt');
        this.currentHighlightedItem = null;

        // UI елементи щоденника / записника
        this.btnNotebook = document.getElementById('btn-notebook');
        this.notebookBadge = document.getElementById('notebook-badge');
        this.notebookToast = document.getElementById('notebook-toast');
        this.notebookModal = document.getElementById('notebook-modal');
        this.btnCloseNotebook = document.getElementById('btn-close-notebook');
        this.notebookList = document.getElementById('notebook-list');
        this.notebookContent = document.getElementById('notebook-content');

        // UI елементи книги казок
        this.bookModal = document.getElementById('book-modal');
        this.btnCloseBook = document.getElementById('btn-close-book');
        this.bookToc = document.getElementById('book-toc');
        this.bookPage = document.getElementById('book-page');

        // Екрани завершення
        this.gameOverScreen = document.getElementById('game-over-screen');
        this.victoryScreen = document.getElementById('victory-screen');
        this.btnRetry = document.getElementById('btn-retry');
        this.btnVictoryMenu = document.getElementById('btn-victory-menu');

        // Ставимо гравця в центр кімнати
        this.x = 432;
        this.y = 360;
        
        const roomConfig = LevelData.rooms[LevelData.currentRoomId];
        if (roomConfig && this.room) {
            this.room.style.backgroundImage = roomConfig.backgroundImages;
            this.room.style.setProperty('--room-border', roomConfig.borderImage);
        }

        this.buildLevel();
        this.updatePlayerPosition();
        this.bindKeys();
    },

    buildLevel() {
        if (this.objectsLayer) this.objectsLayer.innerHTML = '';
        document.querySelectorAll('.debug-wall').forEach(el => el.remove());

        LevelData.items.forEach(item => {
            if (item.sprite) {
                let el = document.createElement('div');
                el.id = 'item-' + item.id;
                el.className = 'room-object';
                el.style.backgroundImage = `url('${item.sprite}')`;
                if (item.zIndex) el.style.zIndex = item.zIndex;
                if (this.objectsLayer) this.objectsLayer.appendChild(el);
            }
        });

        if (LevelData.showDebug) {
            LevelData.walls.forEach(wall => {
                let el = document.createElement('div');
                el.className = 'debug-wall';
                el.style.position = 'absolute';
                el.style.left = wall.x + 'px'; el.style.top = wall.y + 'px';
                el.style.width = wall.w + 'px'; el.style.height = wall.h + 'px';
                el.style.backgroundColor = 'rgba(255, 0, 0, 0.35)';
                el.style.border = '1px solid red';
                el.style.pointerEvents = 'none';
                el.style.zIndex = 999;
                this.room.appendChild(el);
            });
            this.debugPlayerHitbox = document.createElement('div');
            this.debugPlayerHitbox.style.position = 'absolute';
            this.debugPlayerHitbox.style.width = this.hitboxW + 'px';
            this.debugPlayerHitbox.style.height = this.hitboxH + 'px';
            this.debugPlayerHitbox.style.backgroundColor = 'rgba(0, 255, 0, 0.4)';
            this.debugPlayerHitbox.style.border = '1px solid green';
            this.debugPlayerHitbox.style.pointerEvents = 'none';
            this.debugPlayerHitbox.style.zIndex = 1000;
            this.room.appendChild(this.debugPlayerHitbox);
        }
    },

    switchRoom(roomId, spawnX, spawnY) {
        LevelData.currentRoomId = roomId;
        Quests.currentRoom = roomId;
        this.clearHighlight();

        this.x = spawnX;
        this.y = spawnY;
        this.updatePlayerPosition();

        const roomConfig = LevelData.rooms[roomId];
        if (roomConfig && this.room) {
            this.room.style.backgroundImage = roomConfig.backgroundImages;
            this.room.style.setProperty('--room-border', roomConfig.borderImage);
        }

        // Повертаємо спокійний ембієнт, якщо виходимо з кімнати виходу або після казок
        if (roomId !== 'exit_room' && Menu.currentMusicTrack === 'horror' && !Quests.gameWon) {
            Menu.playNormalAmbient();
        }

        this.buildLevel();

        const omaEl = document.getElementById('oma-npc');
        if (omaEl) {
            if (roomId === 'start_room') {
                if (Quests.omaLeftRoom1) {
                    omaEl.style.display = 'none';
                } else {
                    omaEl.style.display = 'block';
                    omaEl.style.left = '337px';
                    omaEl.style.top = '320px';
                    omaEl.style.zIndex = '392';
                    omaEl.style.backgroundPosition = '0px 0px';
                }
            } else if (roomId === 'room_next_to_starting_one') {
                omaEl.style.display = 'none';
            } else if (roomId === 'exit_room') {
                omaEl.style.display = 'block';
                omaEl.style.left = '480px';
                omaEl.style.top = '340px';
                omaEl.style.zIndex = '412';
                omaEl.style.backgroundPosition = '0px 0px';
            }
        }
    },

    addJournalEntry(entry) {
        if (Quests.hasEntry(entry.id)) return false;

        Quests.journal.push({
            id: entry.id,
            title: entry.title,
            source: entry.source,
            text: entry.text,
            words: entry.words || []
        });

        // Сповіщення
        if (this.notebookToast) {
            this.notebookToast.innerText = `✨ Новий запис: ${entry.title}`;
            this.notebookToast.classList.remove('hidden');
            this.notebookToast.classList.add('show');
            clearTimeout(this.toastTimer);
            this.toastTimer = setTimeout(() => {
                this.notebookToast.classList.remove('show');
                setTimeout(() => this.notebookToast.classList.add('hidden'), 300);
            }, 3500);
        }

        // Пульсація та бейдж кнопки
        if (this.notebookBadge) {
            this.notebookBadge.classList.remove('hidden');
        }
        if (this.btnNotebook) {
            this.btnNotebook.classList.add('pulse');
        }

        return true;
    },

    openNotebook(selectedId = null) {
        if (Dialog.isActive) return;
        this.isPaused = true;
        if (this.notebookBadge) this.notebookBadge.classList.add('hidden');
        if (this.btnNotebook) this.btnNotebook.classList.remove('pulse');
        if (this.notebookModal) this.notebookModal.classList.remove('hidden');
        this.renderNotebook(selectedId);
    },

    closeNotebook() {
        if (this.notebookModal) this.notebookModal.classList.add('hidden');
        this.isPaused = false;
    },

    toggleNotebook() {
        if (!this.notebookModal) return;
        if (this.notebookModal.classList.contains('hidden')) {
            this.openNotebook();
        } else {
            this.closeNotebook();
        }
    },

    renderNotebook(selectedId = null) {
        if (!this.notebookList || !this.notebookContent) return;
        const journal = Quests.journal;

        if (journal.length === 0) {
            this.notebookList.innerHTML = '<p class="notebook-placeholder" style="margin-top: 20px; font-size: 0.95rem;">Записів ще немає.<br>Оглядайте кімнати.</p>';
            this.notebookContent.innerHTML = '<p class="notebook-placeholder">Оглядайте предмети, меблі та полички, щоб знайти зачіпки про минуле Оми та її будинку...</p>';
            return;
        }

        let target = null;
        if (selectedId) {
            target = journal.find(e => e.id === selectedId);
        }
        if (!target) {
            target = journal[journal.length - 1];
        }

        this.notebookList.innerHTML = '';
        journal.forEach(item => {
            const btn = document.createElement('button');
            btn.className = `notebook-item-btn ${item.id === target.id ? 'active' : ''}`;
            btn.innerText = item.title;
            btn.onclick = () => this.renderNotebook(item.id);
            this.notebookList.appendChild(btn);
        });

        let wordsHtml = '';
        if (target.words && target.words.length > 0) {
            const listItems = target.words.map(w => `<li>• ${w}</li>`).join('');
            wordsHtml = `
                <div class="entry-words">
                    <h4>Німецькі слова та переклад:</h4>
                    <ul>${listItems}</ul>
                </div>
            `;
        }

        this.notebookContent.innerHTML = `
            <h3 class="entry-title">${target.title}</h3>
            <div class="entry-source">Знайдено: ${target.source}</div>
            <p class="entry-body">${target.text}</p>
            ${wordsHtml}
        `;
    },

    openBookModal(selectedStoryId = 'cute') {
        if (Dialog.isActive) return;
        this.isPaused = true;
        if (this.bookModal) this.bookModal.classList.remove('hidden');
        this.renderFairyTale(selectedStoryId);
    },

    closeBookModal() {
        if (this.bookModal) {
            this.bookModal.classList.add('hidden');
            const windowEl = this.bookModal.querySelector('.book-window');
            if (windowEl) windowEl.classList.remove('horror-mode');
        }
        if (typeof Dialog !== 'undefined' && typeof Dialog.hideWordTooltip === 'function') {
            Dialog.hideWordTooltip();
        }
        this.isPaused = false;
        // Повертаємо звичайну музику, якщо грала моторошна казка, а ми не в кульмінації з Омою
        if (Menu.currentMusicTrack === 'horror' && !Cutscenes.omaClimaxActive && !Quests.gameWon) {
            Menu.playNormalAmbient();
        }
    },

    renderFairyTale(storyId) {
        if (!this.bookToc || !this.bookPage || typeof FairyTales === 'undefined') return;

        if (typeof Dialog !== 'undefined' && typeof Dialog.hideWordTooltip === 'function') {
            Dialog.hideWordTooltip();
        }

        let story = FairyTales.find(s => s.id === storyId);
        if (!story) story = FairyTales[0];

        const windowEl = this.bookModal.querySelector('.book-window');

        // Перемикання музики та візуального стилю для кривавої казки
        if (story.isHorror) {
            if (windowEl) windowEl.classList.add('horror-mode');
            Menu.playHorrorAmbient();
        } else {
            if (windowEl) windowEl.classList.remove('horror-mode');
            // Якщо не в фінальній розмові з Омою, грає нормальний ембієнт
            if (!Cutscenes.omaClimaxActive) {
                Menu.playNormalAmbient();
            }
        }

        // Рендеримо зміст (TOC)
        this.bookToc.innerHTML = '';
        FairyTales.forEach(s => {
            const btn = document.createElement('button');
            btn.className = `book-item-btn ${s.id === story.id ? 'active' : ''} ${s.isHorror ? 'horror-btn' : ''}`;
            btn.innerText = (s.isHorror ? '🩸 ' : '📖 ') + s.title;
            btn.onclick = () => this.renderFairyTale(s.id);
            this.bookToc.appendChild(btn);
        });

        // Додаємо запис у щоденник (для милої казки це дає greta_fairytale, що є ключем до перемоги)
        if (story.journalEntry) {
            this.addJournalEntry(story.journalEntry);
        }

        // Форматуємо німецький текст із інтерактивними підказками
        let formattedGerman = story.germanText;
        if (typeof Dialog !== 'undefined' && typeof Dialog.formatTextWithDict === 'function') {
            formattedGerman = Dialog.formatTextWithDict(story.germanText);
        }

        let dedicationHtml = '';
        if (story.dedication) {
            dedicationHtml = `
                <div class="story-dedication">
                    <strong style="display: block; margin-bottom: 4px;">✍️ Напис олівцем на форзаці книги:</strong>
                    <em>${story.dedication}</em>
                </div>
            `;
        }

        let annaNoteHtml = '';
        if (story.annaNote) {
            annaNoteHtml = `
                <div class="story-anna-note">
                    <strong>💡 Думка ${Quests.playerName || 'Анни'}:</strong><br>
                    ${story.annaNote}
                </div>
            `;
        }

        this.bookPage.innerHTML = `
            <div class="story-subtitle">${story.category}</div>
            <h3 class="story-title">${story.title}</h3>
            
            <div class="story-hint">💡 Наведіть курсор або натисніть на виділені німецькі слова, щоб побачити переклад українською:</div>

            <div class="book-text-section">
                <div class="story-german-text">${formattedGerman}</div>
                <div class="story-translation">${story.translation}</div>
            </div>

            ${dedicationHtml}
            ${annaNoteHtml}
        `;

        // Підтримка інтерактивного перекладу: наведення курсору та клік по кожному слову
        this.bookPage.querySelectorAll('.dict-word').forEach(span => {
            span.addEventListener('mouseenter', () => {
                if (typeof Dialog !== 'undefined' && typeof Dialog.showWordTooltip === 'function') {
                    Dialog.showWordTooltip(span);
                }
            });
            span.addEventListener('mouseleave', () => {
                if (typeof Dialog !== 'undefined' && typeof Dialog.hideWordTooltip === 'function') {
                    Dialog.hideWordTooltip();
                }
            });
            span.addEventListener('click', (e) => {
                e.stopPropagation();
                if (typeof Dialog !== 'undefined' && typeof Dialog.showWordTooltip === 'function') {
                    Dialog.showWordTooltip(span);
                }
            });
        });

        // При скролі сторінки книги ховаємо тултіп, щоб він не зависав у повітрі
        this.bookPage.onscroll = () => {
            if (typeof Dialog !== 'undefined' && typeof Dialog.hideWordTooltip === 'function') {
                Dialog.hideWordTooltip();
            }
        };
    },

    restartGame() {
        Quests.reset();
        if (this.gameOverScreen) this.gameOverScreen.classList.add('hidden');
        if (this.victoryScreen) this.victoryScreen.classList.add('hidden');
        this.switchRoom('start_room', 432, 360);
        const omaEl = document.getElementById('oma-npc');
        if (omaEl) omaEl.style.display = 'none';
        Cutscenes.wakeUp();
    },

    returnToMenu() {
        Quests.reset();
        if (this.gameOverScreen) this.gameOverScreen.classList.add('hidden');
        if (this.victoryScreen) this.victoryScreen.classList.add('hidden');
        this.switchRoom('start_room', 432, 360);
        const omaEl = document.getElementById('oma-npc');
        if (omaEl) omaEl.style.display = 'none';
        document.getElementById('game-container').classList.remove('active');
        document.getElementById('main-menu').classList.add('active');
        this.isPaused = false;
        if (Settings.sound && Menu.audioStarted) Menu.safePlayAudio(Menu.windAudio);
    },

    start() {
        this.init();
        this.lastTime = performance.now();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    bindKeys() {
        if (this.keysBound) return;
        this.keysBound = true;

        window.addEventListener('keydown', (e) => {
            if (this.keys.hasOwnProperty(e.key)) this.keys[e.key] = true;

            // Відкриття / закриття записника на клавішу J (або українську [О])
            const isJournalKey = (e.code === 'KeyJ' || e.key === 'j' || e.key === 'J' || e.key === 'о' || e.key === 'О');
            if (isJournalKey && !Dialog.isActive) {
                this.toggleNotebook();
                return;
            }

            // Закриття записника або книги по Escape
            if (e.code === 'Escape') {
                if (this.bookModal && !this.bookModal.classList.contains('hidden')) {
                    this.closeBookModal();
                    e.stopPropagation();
                    return;
                }
                if (this.notebookModal && !this.notebookModal.classList.contains('hidden')) {
                    this.closeNotebook();
                    e.stopPropagation();
                    return;
                }
            }

            // Взаємодія виключно на клавішу [E] (підтримує також українську розкладку 'у' / 'У')
            const isInteractKey = (e.code === 'KeyE' || e.key === 'e' || e.key === 'E' || e.key === 'у' || e.key === 'У');
            if (!this.isPaused && !Dialog.isActive && !e.repeat && isInteractKey) {
                this.tryInteract();
            }
        });

        window.addEventListener('keyup', (e) => {
            if (this.keys.hasOwnProperty(e.key)) this.keys[e.key] = false;
        });

        // Кліки по кнопках інтерфейсу
        if (this.btnNotebook) {
            this.btnNotebook.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleNotebook();
                this.btnNotebook.blur();
            });
        }
        if (this.btnCloseNotebook) {
            this.btnCloseNotebook.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeNotebook();
                this.btnCloseNotebook.blur();
            });
        }
        if (this.btnCloseBook) {
            this.btnCloseBook.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeBookModal();
                this.btnCloseBook.blur();
            });
        }
        if (this.btnRetry) {
            this.btnRetry.addEventListener('click', (e) => {
                e.stopPropagation();
                this.btnRetry.blur();
                this.restartGame();
            });
        }
        if (this.btnVictoryMenu) {
            this.btnVictoryMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                this.btnVictoryMenu.blur();
                this.returnToMenu();
            });
        }
    },

    updateInteractions() {
        if (this.isPaused || Dialog.isActive) {
            if (this.currentHighlightedItem) {
                this.clearHighlight();
            }
            return;
        }

        const cx = this.x + this.hitboxOffsetX + this.hitboxW / 2;
        const cy = this.y + this.hitboxOffsetY + this.hitboxH / 2;

        let closestItem = null;
        let minDistance = Infinity;

        for (let item of LevelData.items) {
            const targetX = item.promptPos ? item.promptPos.x : (item.x + (item.w || 0) / 2);
            const targetY = item.promptPos ? item.promptPos.y : (item.y + (item.h || 0) / 2);
            const dist = Math.hypot(cx - targetX, cy - targetY);
            const range = item.interactRange || 80;

            if (dist <= range && dist < minDistance) {
                minDistance = dist;
                closestItem = item;
            }
        }

        if (closestItem !== this.currentHighlightedItem) {
            this.clearHighlight();
            if (closestItem) {
                this.setHighlight(closestItem);
            }
        }
    },

    setHighlight(item) {
        this.currentHighlightedItem = item;
        const el = document.getElementById(item.elementId || ('item-' + item.id));
        if (el) {
            el.classList.add('highlighted');
        }
        if (this.interactPrompt) {
            this.interactPrompt.classList.remove('hidden');
        }
    },

    clearHighlight() {
        if (this.currentHighlightedItem) {
            const el = document.getElementById(this.currentHighlightedItem.elementId || ('item-' + this.currentHighlightedItem.id));
            if (el) el.classList.remove('highlighted');
            this.currentHighlightedItem = null;
        }
        if (this.interactPrompt) {
            this.interactPrompt.classList.add('hidden');
        }
    },

    tryInteract() {
        if (this.currentHighlightedItem && typeof this.currentHighlightedItem.onInteract === 'function') {
            const item = this.currentHighlightedItem;
            this.clearHighlight();
            item.onInteract();
        }
    },

    updateMovement() {
        if (this.isPaused) {
            this.isMoving = false;
            this.frameY = 0;
            return;
        }

        let dx = 0; let dy = 0;
        if (this.keys.w || this.keys.W || this.keys.ц || this.keys.Ц || this.keys.ArrowUp) dy -= this.speed;
        if (this.keys.s || this.keys.S || this.keys.і || this.keys.І || this.keys.ArrowDown) dy += this.speed;
        if (this.keys.a || this.keys.A || this.keys.ф || this.keys.Ф || this.keys.ArrowLeft) dx -= this.speed;
        if (this.keys.d || this.keys.D || this.keys.в || this.keys.В || this.keys.ArrowRight) dx += this.speed;

        this.isMoving = (dx !== 0 || dy !== 0);
        if (this.isMoving) {
            if (dx > 0) this.frameY = 3;
            else if (dx < 0) this.frameY = 4;
            else if (dy > 0) this.frameY = 1;
            else if (dy < 0) this.frameY = 2;
        } else {
            this.frameY = 0;
        }

        const newX = this.x + dx; const newY = this.y + dy;
        const hx = newX + this.hitboxOffsetX; const hy = newY + this.hitboxOffsetY;
        let collision = false;
        
        if (hx < 0 || hy < 0 || hx + this.hitboxW > this.room.clientWidth || hy + this.hitboxH > this.room.clientHeight) {
            collision = true;
        }
        if (!collision) {
            for (let w of LevelData.walls) {
                if (hx < w.x + w.w && hx + this.hitboxW > w.x && hy < w.y + w.h && hy + this.hitboxH > w.y) {
                    collision = true; break;
                }
            }
        }

        if (!collision) {
            this.x = newX; this.y = newY;
        }
    },

    updateAnimation(deltaTime) {
        this.animTimer += deltaTime;
        if (this.animTimer > this.animInterval) {
            this.frameX = (this.frameX + 1) % this.frameCount;
            this.animTimer = 0;
            this.updatePlayerSprite();
        }
    },

    updatePlayerPosition() {
        this.player.style.left = `${this.x}px`;
        this.player.style.top = `${this.y}px`;
        this.player.style.zIndex = Math.floor(this.y + this.hitboxOffsetY + this.hitboxH);
        
        if (LevelData.showDebug && this.debugPlayerHitbox) {
            this.debugPlayerHitbox.style.left = (this.x + this.hitboxOffsetX) + 'px';
            this.debugPlayerHitbox.style.top = (this.y + this.hitboxOffsetY) + 'px';
        }
    },

    updatePlayerSprite() {
        const bgPosX = -(this.frameX * this.spriteSize);
        const bgPosY = -(this.frameY * this.spriteSize);
        this.player.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    },

    gameLoop(currentTime) {
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        this.updateMovement();
        this.updatePlayerPosition();
        this.updateAnimation(deltaTime);
        this.updateInteractions();
        if (document.getElementById('game-container').classList.contains('active')) {
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }
};
