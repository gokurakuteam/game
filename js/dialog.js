/**
 * Das Abendessen - Модуль діалогу з підтримкою думок персонажа та перекладу німецьких слів (A1-A2)
 */

const GermanDictionary = {
    "liebling": "люба / дорогенька",
    "ich": "я",
    "habe": "маю (знайшла)",
    "dich": "тебе",
    "im": "у / в",
    "wald": "лісі",
    "in": "в / у",
    "der": "артикль (чол. роду / у)",
    "nähe": "поблизу / неподалік",
    "gefunden": "знайшла",
    "wie": "як",
    "heißt": "звати / називаєшся",
    "du": "ти",
    "heiße": "звуть (мене звати)",
    "schöner": "гарне",
    "name": "ім'я",
    "nenn": "називай",
    "mich": "мене",
    "einfach": "просто",
    "oma": "бабуся",
    "komm": "йди сюди / ходи",
    "ruh": "відпочивай",
    "aus": "відпочинь (ruh dich aus)",
    "das": "це / ця",
    "essen": "їжа / вечеря",
    "ist": "є",
    "bald": "скоро",
    "fertig": "готова",
    "mein": "моє / мій",
    "kind": "дитя / дитина",
    "wo": "де",
    "bin": "є (я є)",
    "lass": "залиш / пусти",
    "ruhe": "спокій",
    "bist": "є (ти є)",
    "sicherheit": "безпеці",
    "aber": "але",
    "hast": "маєш",
    "meine": "моє / мої",
    "frage": "запитання / питаю",
    "nicht": "не",
    "beantwortet": "відповіла",
    "sei": "не будь",
    "unhöflich": "неввічливою / грубою",
    "noch": "ще",
    "einmal": "раз",
    "kein": "жодного / ніякого",
    "ausweg": "вихід",
    "kleidung": "одяг",
    "deutsche": "німецька",
    "hausküche": "домашня кухня",
    "fleischgerichte": "м'ясні страви",
    "die": "артикль жін. роду",
    "blume": "квітка / рослина",
    "pflanze": "рослина",
    "sofa": "диван",
    "stuhl": "стілець",
    "tisch": "стіл / столик",
    "lampe": "лампа",
    "enkelin": "онука",
    "greta": "Грета (ім'я)",
    "schmerz": "біль",
    "trauer": "жалоба / горе",
    "einsamkeit": "самотність",
    "einsam": "самотній / самотня",
    "allein": "самотня / сама",
    "stille": "тиша",
    "familie": "сім'я / родина",
    "freiheit": "воля / свобода",
    "schlüssel": "ключ",
    "traurig": "сумна / сумно",
    "foto": "світлина / фото",
    "topf": "каструля",
    "warten": "чекати",
    "zeit": "час",
    "gehen": "йти / піти",
    "geh": "йди",
    "bitte": "будь ласка",
    "vergib": "пробач",
    "kalt": "холодно / холодна",
    "nacht": "ніч",
    "nie": "ніколи",
    "wieder": "знову",
    "zurück": "назад",
    "verstand": "розум",
    "geraubt": "забрала / затьмарила",
    "getan": "зробила",
    "hexe": "відьма",
    "verrückte": "божевільна",
    "raus": "назовні / геть",
    "hier": "тут / ось",
    "will": "хочу",
    "willst": "хочеш",
    "wohin": "куди",
    "genau": "точно так само",
    "alle": "всі",
    "anderen": "інші",
    "bleibst": "залишишся",
    "beginnt": "починається",
    "jetzt": "зараз",
    "niemand": "ніхто",
    "verlässt": "не покине / не вийде",
    "haus": "будинок",
    "immer": "назавжди",
    "lauf": "біжи",
    "laufen": "бігти",
    "himmel": "небо / рай",
    "müde": "втомлена",
    "keller": "підвал",
    "betrüger": "обманщик / шахрай",
    "belügen": "брехати / обманювати",
    "verstehe": "розумію",
    "verstehen": "розуміти",
    "weiß": "знаю",
    "ihrem": "вашим / її",
    "ihre": "ваша / її",
    "doch": "же / все ж таки",
    "gleich": "ось-ось / зараз",
    "darfst": "маєш право / дозволено",
    "verlassen": "покинути / залишати",
    "kleine": "маленька",
    "wahr": "правда (nicht wahr - чи не так)",
    "bevor": "доки не / перш ніж",
    "zu": "занадто",
    "wird": "стане",
    "laterne": "ліхтар",
    "kerze": "свічка",
    "teppich": "килим / килимок",
    "willkommen": "ласкаво просимо",
    "wald": "ліс",
    "häschen": "зайченя",
    "weißes": "біле",
    "grünen": "зеленому",
    "karotten": "морква",
    "frische": "свіжі",
    "blumen": "квіти",
    "mondlicht": "місячне сяйво",
    "winter": "зима",
    "schenkte": "подарувала",
    "rote": "червона",
    "mütze": "шапочка",
    "tasse": "чашка",
    "tee": "чай",
    "schlaf": "спи",
    "gut": "добре / міцно",
    "kälte": "холод",
    "solange": "доки / поки",
    "geliebt": "коханий / любимий",
    "wirst": "будеш (wirst geliebt — тебе люблять)",
    "geburtstag": "день народження",
    "mögest": "нехай / бажаю",
    "lachen": "сміятися",
    "tanzen": "танцювати",
    "ewiger": "вічній",
    "liebe": "любов",
    "fleischmann": "м'ясник",
    "schwarzwald": "Шварцвальд (Чорний ліс)",
    "finsteren": "похмурому / темному",
    "böser": "злий",
    "mann": "чоловік",
    "schlachtermesser": "різницький ніж",
    "schlich": "прокрадався",
    "fenster": "вікно",
    "zimmer": "кімната",
    "schnitt": "відрізав",
    "lippen": "губи",
    "schreien": "кричати",
    "konnte": "міг",
    "riss": "здирав",
    "zarte": "ніжне",
    "knochen": "кістки",
    "kessel": "казан",
    "zwiebeln": "цибуля",
    "blut": "кров",
    "ofen": "піч",
    "sang": "співав",
    "lachend": "сміючись",
    "entkam": "утік / врятувався",
    "klinge": "лезо",
    "schnee": "сніг",
    "schneesturm": "снігова буря / завірюха",
    "schritte": "кроки",
    "verwehte": "замів",
    "bittere": "гіркий / гіркі",
    "spurlos": "безслідно",
    "mutter": "мати",
    "suchte": "шукала",
    "verzweifelt": "у розпачі",
    "tannen": "сосни / ялини",
    "fand": "знайшла",
    "haarband": "стрічка для волосся",
    "tränen": "сльози",
    "see": "озеро",
    "waldsee": "лісове озеро",
    "ufer": "берег",
    "lauscht": "прислухається",
    "antwortet": "відповідає",
    "könig": "король",
    "schloss": "замок / засув",
    "riegeln": "засувами",
    "menschen": "люди",
    "herz": "серце",
    "eis": "лід",
    "gefroren": "замерзлий",
    "krieger": "воїни",
    "äxten": "сокирами",
    "feuer": "вогонь",
    "gewalt": "сила / насильство",
    "öffnen": "відчиняти",
    "scheiterte": "зазнав невдачі",
    "verjagt": "прогнаний",
    "fremdes": "чужа",
    "schwert": "меч",
    "sanft": "лагідно",
    "wahrheit": "правда",
    "sprach": "говорила",
    "erinnerte": "нагадала",
    "schmolz": "розтанув",
    "tore": "ворота",
    "öffneten": "відчинилися",
    "hass": "ненависть",
    "zorn": "гнів",
    "besiegen": "перемагають",
    "dunkel": "темрява",
    "sanftmut": "лагідність",
    "schal": "шарф",
    "fleisch": "м'ясо",
    "müll": "сміття / мотлох",
    "kühlschrank": "холодильник",
    "regal": "полиця",
    "ab": "геть / від (відрізав)",
    "allen": "всіх",
    "als": "коли / як тільки",
    "alte": "стара",
    "alter": "старий",
    "am": "на / біля",
    "an": "до / на / про",
    "angst": "страх",
    "bis": "доки / аж до",
    "damit": "щоб / для того щоб",
    "daraus": "з цього / з них",
    "dass": "що / щоб",
    "dem": "артикль (чол./сер. рід давальний)",
    "den": "артикль (знахідний рід / давальний множини)",
    "denn": "бо / адже",
    "des": "артикль (родовий відмінок)",
    "dir": "тобі",
    "dunklen": "темних",
    "durch": "крізь / через",
    "ein": "один / неозначений артикль",
    "eine": "одна / неозначений артикль (жін.)",
    "einem": "одному (давальний)",
    "eisernen": "залізними / важкими",
    "eisigen": "крижаного / морозного",
    "entstand": "утворилося / виникло",
    "er": "він",
    "erst": "лише / тільки коли",
    "es": "воно",
    "frau": "жінка",
    "für": "для",
    "ganz": "зовсім / повністю",
    "gern": "охоче / з радістю",
    "ging": "пішла / пішов",
    "hatte": "мав / мало",
    "heute": "сьогодні",
    "ihm": "йому",
    "ihnen": "їм",
    "ihren": "її / свій",
    "jeder": "кожен",
    "junges": "юне / молоде",
    "kalte": "холодна",
    "kam": "прийшов / настала",
    "kamen": "прийшли",
    "keine": "жодного / жодної",
    "kinder": "діти",
    "kleinen": "маленькі",
    "kleines": "маленьке",
    "kochte": "варив",
    "küche": "кухня",
    "langen": "довгим",
    "lebte": "жив",
    "leise": "тихо / тихесенько",
    "liebte": "любило",
    "mit": "з / разом з",
    "mädchen": "дівчинка",
    "namen": "ім'я",
    "nichts": "нічого",
    "niemals": "ніколи",
    "nordwind": "північний вітер",
    "nur": "лише / тільки",
    "oder": "або",
    "rief": "кликала",
    "rotes": "червоне",
    "saftige": "соковиту",
    "sagte": "сказала",
    "schliefen": "спали",
    "schweren": "важкими",
    "sein": "його / бути",
    "seine": "його / свої",
    "seiner": "його / своїй",
    "selbst": "саме по собі",
    "sich": "себе / ся",
    "sitzt": "сидить",
    "so": "так / настільки",
    "sondern": "а / але (навпаки)",
    "stiller": "тихе / спокійне",
    "süße": "солодка",
    "tag": "день",
    "tanzte": "танцювало",
    "tief": "глибоко",
    "tiefen": "глибоких",
    "trug": "ніс / тримав",
    "tut": "робить / завдає (tut dir nichts - не скривдить тебе)",
    "um": "щоб / навколо",
    "und": "і / та",
    "verloren": "загубилася / втрачено",
    "verschloss": "замкнув",
    "viele": "багато",
    "von": "від / з",
    "vor": "перед",
    "wahre": "справжня / щира",
    "war": "був / була / було",
    "warme": "тепла",
    "weil": "тому що / бо",
    "weinte": "плакала",
    "wenn": "коли / якщо",
    "wind": "вітер",
    "winters": "зими",
    "wurde": "був / став"
};

const Dialog = {
    isActive: false,
    lines: [],
    currentLineIndex: 0,
    currentCharIndex: 0,
    isTyping: false,
    typingTimer: null,
    normalMusicVolume: 0.5,
    duckedMusicVolume: 0.1,

    init() {
        this.wrapper = document.getElementById('dialog-wrapper');
        this.box = document.getElementById('dialog-box');
        this.nameEl = document.getElementById('dialog-name');
        this.textEl = document.getElementById('dialog-text');
        this.portraitEl = document.getElementById('dialog-portrait');
        this.indicator = document.getElementById('dialog-indicator');
        this.choicesContainer = document.getElementById('dialog-choices');
        this.inputContainer = document.getElementById('dialog-input-container');
        this.nameInput = document.getElementById('playerNameInput');
        this.btnSubmit = document.getElementById('btn-submit-name');
        this.thoughtOverlay = document.getElementById('thought-overlay');
        this.dictTooltip = document.getElementById('dict-tooltip');
        
        window.addEventListener('keydown', (e) => {
            if (this.isActive && (e.code === 'Space' || e.code === 'Enter')) {
                const line = this.lines[this.currentLineIndex];
                
                // Якщо активне поле вводу і текст закінчив друкуватись
                if (line && line.type === 'input' && !this.isTyping) {
                    if (e.code === 'Enter') {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        this.btnSubmit.click();
                    }
                    return;
                }

                // Якщо показані кнопки вибору - не пропускаємо пробілом
                if (line && line.choices && !this.isTyping) return;

                e.preventDefault();
                e.stopImmediatePropagation();
                if (!e.repeat) this.advance();
            }
        });
        
        this.box.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
            // Якщо клікнули по слову для перекладу - не перегортати діалог!
            if (e.target.classList.contains('dict-word')) return;

            this.hideWordTooltip();
            const line = this.lines[this.currentLineIndex];
            if (this.isActive && (!line || (!line.choices && line.type !== 'input') || this.isTyping)) {
                this.advance();
            }
        });

        // Клік на кнопку відправки імені
        this.btnSubmit.addEventListener('click', () => {
            const val = this.nameInput.value.trim();
            const line = this.lines[this.currentLineIndex];
            this.inputContainer.classList.add('hidden');
            this.nameInput.value = '';
            
            this.close();
            if (line && typeof line.onConfirm === 'function') {
                line.onConfirm(val);
            }
        });
    },

    formatTextWithDict(rawText) {
        // Замінюємо німецькі слова на клікабельні інтерактивні теги з підказками
        return rawText.replace(/([a-zA-ZäöüÄÖÜß]+)/g, (match) => {
            const clean = match.toLowerCase();
            if (GermanDictionary[clean]) {
                const trans = GermanDictionary[clean];
                return `<span class="dict-word" data-word="${match}" data-trans="${trans}" title="${match} — ${trans}">${match}</span>`;
            }
            return match;
        });
    },

    showWordTooltip(span) {
        if (!this.dictTooltip) {
            this.dictTooltip = document.getElementById('dict-tooltip');
        }
        if (!this.dictTooltip || !span) return;

        const word = span.getAttribute('data-word');
        const trans = span.getAttribute('data-trans');
        if (!word || !trans) return;

        this.dictTooltip.innerHTML = `<span class="tooltip-orig">${word}</span> <span class="tooltip-trans">— ${trans}</span>`;
        
        // Перевіряємо чи це режим хоррору (кривава казка або напружена кульмінація)
        const isHorror = document.querySelector('.book-window.horror-mode') || (typeof Cutscenes !== 'undefined' && Cutscenes.omaClimaxActive);
        if (isHorror) {
            this.dictTooltip.classList.add('horror-tooltip');
        } else {
            this.dictTooltip.classList.remove('horror-tooltip');
        }

        const rect = span.getBoundingClientRect();
        const container = document.getElementById('game-container') || document.body;
        const containerRect = container.getBoundingClientRect();
        
        let left = rect.left - containerRect.left + (rect.width / 2);
        let top = rect.top - containerRect.top;
        
        // Якщо слово знаходиться занадто близько до верхнього краю, показуємо тултіп знизу
        if (top < 55) {
            this.dictTooltip.classList.add('tooltip-below');
            this.dictTooltip.style.top = `${Math.round(top + rect.height)}px`;
        } else {
            this.dictTooltip.classList.remove('tooltip-below');
            this.dictTooltip.style.top = `${Math.round(top)}px`;
        }

        // Обмежуємо по горизонталі
        left = Math.max(90, Math.min(containerRect.width - 90, left));
        this.dictTooltip.style.left = `${Math.round(left)}px`;
        this.dictTooltip.classList.remove('hidden');
    },

    hideWordTooltip() {
        if (!this.dictTooltip) {
            this.dictTooltip = document.getElementById('dict-tooltip');
        }
        if (this.dictTooltip) {
            this.dictTooltip.classList.add('hidden');
        }
    },

    start(dialogLines) {
        this.lines = dialogLines;
        this.currentLineIndex = 0;
        this.isActive = true;
        this.wrapper.classList.remove('hidden');
        Game.isPaused = true;
        this.choicesContainer.classList.add('hidden');
        this.inputContainer.classList.add('hidden');
        this.showLine();
    },

    showLine() {
        this.isTyping = true;
        this.currentCharIndex = 0;
        this.indicator.style.display = 'none';
        this.choicesContainer.classList.add('hidden');
        this.choicesContainer.innerHTML = '';
        this.inputContainer.classList.add('hidden');
        this.hideWordTooltip();
        
        const line = this.lines[this.currentLineIndex];
        this.nameEl.textContent = line.name;
        this.textEl.textContent = ''; 
        this.portraitEl.style.backgroundImage = `url('${line.portrait}')`;
        
        this.portraitEl.className = '';
        if (line.side === 'right') this.portraitEl.classList.add('right');
        else this.portraitEl.classList.add('left');

        // Ефект затемнення кімнати під час думок персонажа
        if (line.isThinking) {
            if (this.thoughtOverlay) this.thoughtOverlay.classList.add('active');
        } else {
            if (this.thoughtOverlay) this.thoughtOverlay.classList.remove('active');
        }
        
        if (Settings.music && Menu.ambientAudio) {
            Menu.ambientAudio.volume = this.duckedMusicVolume;
        }

        this.typeChar();
    },

    typeChar() {
        if (!this.isTyping) return;
        
        const line = this.lines[this.currentLineIndex];
        if (this.currentCharIndex < line.text.length) {
            this.textEl.textContent += line.text.charAt(this.currentCharIndex);
            this.currentCharIndex++;
            
            const char = line.text.charAt(this.currentCharIndex - 1);
            if (this.currentCharIndex % 2 === 0 && char !== ' ') {
                AudioEngine.playBlip();
            }
            
            this.typingTimer = setTimeout(() => this.typeChar(), 35);
        } else {
            this.finishTyping();
        }
    },

    finishTyping() {
        if (!this.isActive) return;
        this.isTyping = false;
        clearTimeout(this.typingTimer);
        const line = this.lines[this.currentLineIndex];

        // Додаємо інтерактивні посилання на переклад для німецьких слів
        this.textEl.innerHTML = this.formatTextWithDict(line.text);
        
        // Вішаємо обробники на кожне інтерактивне слово (підтримка як наведення, так і кліку)
        this.textEl.querySelectorAll('.dict-word').forEach(span => {
            span.addEventListener('mouseenter', () => this.showWordTooltip(span));
            span.addEventListener('mouseleave', () => this.hideWordTooltip());
            span.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showWordTooltip(span);
            });
        });
        
        if (line.type === 'input') {
            this.inputContainer.classList.remove('hidden');
            this.nameInput.focus();
        } else if (line.choices && line.choices.length > 0) {
            line.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = choice.text;
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.choicesContainer.classList.add('hidden');
                    this.close();
                    if (typeof choice.onSelect === 'function') choice.onSelect();
                });
                this.choicesContainer.appendChild(btn);
            });
            this.choicesContainer.classList.remove('hidden');
        } else {
            this.indicator.style.display = 'block';
        }
        
        if (Settings.music && Menu.ambientAudio) {
            Menu.ambientAudio.volume = this.normalMusicVolume;
        }
    },

    advance() {
        if (this.isTyping) {
            this.finishTyping();
        } else {
            const line = this.lines[this.currentLineIndex];
            if (line && (line.choices || line.type === 'input')) return;

            this.currentLineIndex++;
            if (this.currentLineIndex < this.lines.length) {
                this.showLine();
            } else {
                const currentLine = this.lines[this.currentLineIndex - 1];
                this.close();
                if (currentLine && typeof currentLine.onClose === 'function') {
                    currentLine.onClose();
                }
            }
        }
    },

    close() {
        this.isActive = false;
        this.wrapper.classList.add('hidden');
        Game.isPaused = false;
        this.hideWordTooltip();
        if (this.thoughtOverlay) {
            this.thoughtOverlay.classList.remove('active');
        }
        
        if (Settings.music && Menu.ambientAudio) {
            Menu.ambientAudio.volume = this.normalMusicVolume;
        }
    }
};
