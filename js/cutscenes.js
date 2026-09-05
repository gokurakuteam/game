/**
 * Das Abendessen - Сценаристика та катсцени
 * Сюжет: викрадення німецькою бабусею, героїня ледве розуміє мову (A1-A2), атмосфера трилеру/жахів.
 */

const Cutscenes = {
    wakeUp() {
        Game.isPaused = true;
        const fade = document.getElementById('fade-overlay');
        if (fade) {
            fade.style.opacity = '1';
            setTimeout(() => {
                fade.style.opacity = '0';
            }, 1000);
        }
        
        // Починаємо внутрішній монолог після відкриття очей (із затемненням кімнати)
        setTimeout(() => {
            Dialog.start([
                { 
                    name: '???', 
                    text: "Де я...?", 
                    portrait: '../characters/main_character_portrait_amazed.png', 
                    side: 'left',
                    isThinking: true 
                },
                { 
                    name: '???', 
                    text: "Як я тут опинилася? Голова розколюється...", 
                    portrait: '../characters/main_character_portrait_sad.png', 
                    side: 'left',
                    isThinking: true 
                },
                { 
                    name: '???', 
                    text: "Пам'ятаю лише темний нічний ліс... і силует старої жінки з мішком. Хто я взагалі така?", 
                    portrait: '../characters/main_character_portrait_sad.png', 
                    side: 'left',
                    isThinking: true 
                },
                { 
                    type: 'input',
                    name: '???',
                    text: "Здається, моє ім'я...",
                    portrait: '../characters/main_character_portrait_amazed.png',
                    side: 'left',
                    isThinking: true,
                    onConfirm: (name) => {
                        Quests.playerName = name || 'Дарина';
                        setTimeout(() => {
                            Dialog.start([
                                { 
                                    name: Quests.playerName, 
                                    text: `Так... Мене звуть ${Quests.playerName}.`, 
                                    portrait: '../characters/main_character_portrait_idle.png', 
                                    side: 'left',
                                    isThinking: true 
                                },
                                { 
                                    name: Quests.playerName, 
                                    text: "Але де я замкнена? Мені треба терміново звідси вибиратися!", 
                                    portrait: '../characters/main_character_portrait_amazed.png', 
                                    side: 'left',
                                    isThinking: true,
                                    onClose: () => {
                                        this.omaWalksIn();
                                    }
                                }
                            ]);
                        }, 300);
                    }
                }
            ]);
        }, 2800);
    },

    // Анімація: бабуся заходить через двері
    omaWalksIn() {
        const omaEl = document.getElementById('oma-npc');
        if (!omaEl) return;
        omaEl.style.display = 'block';
        let omaX = 337; // Точно по центру дверей (385px - 48px)
        let omaY = 210; // Біля дверей
        omaEl.style.left = omaX + 'px';
        omaEl.style.top = omaY + 'px';
        omaEl.style.zIndex = Math.floor(omaY + 72);
        
        let walkFrame = 0;
        const targetY = 320; // Зупиняється біля центру кімнати
        
        const walkInterval = setInterval(() => {
            omaY += 2;
            walkFrame = (walkFrame + 1) % 6;
            omaEl.style.left = omaX + 'px';
            omaEl.style.top = omaY + 'px';
            omaEl.style.zIndex = Math.floor(omaY + 72);
            
            // Row 1 = рух вниз
            const bgX = -(walkFrame * Game.spriteSize);
            const bgY = -(1 * Game.spriteSize);
            omaEl.style.backgroundPosition = `${bgX}px ${bgY}px`;
            
            if (omaY >= targetY) {
                clearInterval(walkInterval);
                // Зупинка: Row 0 (Idle)
                omaEl.style.backgroundPosition = `0px 0px`;
                setTimeout(() => {
                    this.askNameLoop();
                }, 600);
            }
        }, 45);
    },

    askNameLoop(errorMsg = null) {
        const lines = [];
        if (errorMsg) {
            lines.push({ name: '???', text: errorMsg, portrait: '../characters/oma_character_portrait_sad.png', side: 'right' });
        } else {
            lines.push({ 
                name: '???', 
                text: "Oh, Liebling, ich habe dich im Wald in der Nähe gefunden.", 
                portrait: '../characters/oma_character_portrait_happy.png', 
                side: 'right' 
            });
            lines.push({ 
                name: Quests.playerName, 
                text: "(Що вона говорить?! 'Liebling'? 'Wald' — це ж ліс? Я ледве знаю німецьку... Вона каже, що знайшла мене в лісі? Що їй від мене треба?!)", 
                portrait: '../characters/main_character_portrait_amazed.png', 
                side: 'left',
                isThinking: true 
            });
        }
        
        lines.push({ 
            name: '???', 
            text: "Wie heißt du?", 
            portrait: '../characters/oma_character_portrait_idle.png', 
            side: 'right',
            choices: [
                {
                    text: `Ich heiße ${Quests.playerName}. (Мене звати...)`,
                    onSelect: () => {
                        Dialog.start([
                            { 
                                name: Quests.playerName, 
                                text: `(Невпевнено) Ich... heiße ${Quests.playerName}...`, 
                                portrait: '../characters/main_character_portrait_idle.png', 
                                side: 'left' 
                            },
                            { 
                                name: '???', 
                                text: `Schöner Name, ${Quests.playerName}. Nenn mich einfach Oma!`, 
                                portrait: '../characters/oma_character_portrait_happy.png', 
                                side: 'right' 
                            },
                            { 
                                name: Quests.playerName, 
                                text: `(Про себе: 'Ома'?! Вона каже звати її бабусею... Але чому від її погляду холоне кров?)`, 
                                portrait: '../characters/main_character_portrait_sad.png', 
                                side: 'left',
                                isThinking: true 
                            },
                            { 
                                name: 'Oma', 
                                text: "Komm, ruh dich aus. Das Essen ist bald fertig!", 
                                portrait: '../characters/oma_character_portrait_happy.png', 
                                side: 'right' 
                            },
                            { 
                                name: Quests.playerName, 
                                text: `(Про себе: 'Das Essen ist bald fertig'... Вечеря скоро буде готова! Вона пішла на кухню і не зачинила двері! Це мій шанс оглянути будинок, дізнатися правду і знайти вихід!)`, 
                                portrait: '../characters/main_character_portrait_amazed.png', 
                                side: 'left',
                                isThinking: true,
                                onClose: () => {
                                    this.omaLeavesRoom1();
                                }
                            }
                        ]);
                    }
                },
                {
                    text: "Wo bin ich? (Де я?)",
                    onSelect: () => {
                        Dialog.start([
                            { 
                                name: Quests.playerName, 
                                text: "Wo bin ich?", 
                                portrait: '../characters/main_character_portrait_amazed.png', 
                                side: 'left',
                                onClose: () => this.askNameLoop("Du bist in Sicherheit, Liebling. Aber du hast meine Frage nicht beantwortet!")
                            }
                        ]);
                    }
                },
                {
                    text: "Lass mich in Ruhe! (Дайте мені спокій!)",
                    onSelect: () => {
                        Dialog.start([
                            { 
                                name: Quests.playerName, 
                                text: "Lass mich in Ruhe!", 
                                portrait: '../characters/main_character_portrait_sad.png', 
                                side: 'left',
                                onClose: () => this.askNameLoop("Sei nicht unhöflich, mein Kind! Ich frage noch einmal...")
                            }
                        ]);
                    }
                }
            ]
        });
        
        Dialog.start(lines);
    },

    omaLeavesRoom1() {
        const omaEl = document.getElementById('oma-npc');
        if (!omaEl) return;
        let omaX = 337; // Точно по центру дверей (385px - 48px)
        let omaY = 320;
        let walkFrame = 0;
        omaEl.style.left = omaX + 'px';
        
        const walkInterval = setInterval(() => {
            omaY -= 2;
            walkFrame = (walkFrame + 1) % 6;
            omaEl.style.left = omaX + 'px';
            omaEl.style.top = omaY + 'px';
            omaEl.style.zIndex = Math.floor(omaY + 72);
            
            // Row 2 = рух вгору (Up walk)
            const bgX = -(walkFrame * Game.spriteSize);
            const bgY = -(2 * Game.spriteSize);
            omaEl.style.backgroundPosition = `${bgX}px ${bgY}px`;

            if (omaY <= 200) {
                clearInterval(walkInterval);
                omaEl.style.display = 'none';
                Quests.door1Unlocked = true;
                Quests.omaLeftRoom1 = true;
                Quests.introFinished = true;
                Game.isPaused = false;
            }
        }, 40);
    },

    omaClimaxActive: false,

    omaClimax() {
        // У фінальній розмові з бабусею вмикаємо ambient horror
        Menu.playHorrorAmbient();
        this.omaClimaxActive = true;

        if (Quests.omaKeyObtained) {
            Dialog.start([
                {
                    name: 'Oma',
                    text: "Lauf, mein Kind... Vergib einer alten, einsamen Frau.",
                    portrait: '../characters/oma_character_portrait_sad.png',
                    side: 'right'
                },
                {
                    name: Quests.playerName,
                    text: "(Вона стоїть похиливши голову. Ключ уже в моїх руках — мені час бігти до вихідних дверей!)",
                    portrait: '../characters/main_character_portrait_idle.png',
                    side: 'left',
                    isThinking: true
                }
            ]);
            return;
        }

        const hasCuteTale = Quests.hasEntry('greta_fairytale');

        Dialog.start([
            {
                name: 'Oma',
                text: "Greta, Liebling! Wohin gehst du? Das Essen ist doch gleich fertig! Du darfst mich nicht wieder verlassen...",
                portrait: '../characters/oma_character_portrait_sad.png',
                side: 'right'
            },
            {
                name: Quests.playerName,
                text: "(Вона дивиться на мене крізь сльози... Її погляд застиг від жаху самотності. Мені треба знайти найпотаємніші спогади, щоб розвіяти її божевілля!)",
                portrait: '../characters/main_character_portrait_amazed.png',
                side: 'left',
                isThinking: true,
                choices: [
                    {
                        text: hasCuteTale 
                            ? "«Liebe Oma... Erinnern Sie sich an Ihr kleines Häschen?» (Згадати казку про зайченя)" 
                            : "[Потрібно прочитати казку в шафі спальні] Спробувати заговорити про її онуку",
                        onSelect: () => {
                            if (hasCuteTale) {
                                this.emotionalResolution();
                            } else {
                                Dialog.start([
                                    {
                                        name: Quests.playerName,
                                        text: "(Я бачу її біль, але мені не вистачає чогось особистого, щоб переконати її... Треба повернутися до спальні й ретельно оглянути велику шафу з казками!)",
                                        portrait: '../characters/main_character_portrait_sad.png',
                                        side: 'left',
                                        isThinking: true,
                                        onClose: () => {
                                            this.omaClimaxActive = false;
                                            Menu.playNormalAmbient();
                                        }
                                    }
                                ]);
                            }
                        }
                    },
                    {
                        text: "Lassen Sie mich durch, Sie verrückte Hexe! (Пропустіть, ви божевільна відьма!)",
                        onSelect: () => {
                            Dialog.start([
                                {
                                    name: Quests.playerName,
                                    text: "Lassen Sie mich durch, Sie verrückte Hexe! Ich will hier raus!",
                                    portrait: '../characters/main_character_portrait_sad.png',
                                    side: 'left'
                                },
                                {
                                    name: 'Oma',
                                    text: "Eine Hexe?! Greta würde so etwas nie sagen! Du bist ein Betrüger... Niemand verlässt dieses Haus!",
                                    portrait: '../characters/oma_character_portrait_sad.png',
                                    side: 'right',
                                    onClose: () => {
                                        this.triggerGameOver("Ома збожеволіла від люті. Вона накинулася на вас і замкнула в темному підвалі назавжди. Ви стали жертвою її божевілля.");
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        text: "Ja, ich bin Greta... Geben Sie mir den Schlüssel! (Так, я Грета... Дайте ключ!)",
                        onSelect: () => {
                            Dialog.start([
                                {
                                    name: Quests.playerName,
                                    text: "Ja, Oma, ich bin Greta... Gib mir bitte den Schlüssel.",
                                    portrait: '../characters/main_character_portrait_idle.png',
                                    side: 'left'
                                },
                                {
                                    name: 'Oma',
                                    text: "Du lügst! Meine Greta trug immer ihr gelbes Kleid... Du versuchst mich zu belügen! Du bleibst hier für immer!",
                                    portrait: '../characters/oma_character_portrait_sad.png',
                                    side: 'right',
                                    onClose: () => {
                                        this.triggerGameOver("Ома миттєво викрила вашу брехню. Вона замкнула всі двері будинку на засуви і більше ніколи не підпускала вас до виходу.");
                                    }
                                }
                            ]);
                        }
                    },
                    {
                        text: "(Відійти назад і оглянути інші кімнати)",
                        onSelect: () => {
                            Dialog.start([
                                {
                                    name: Quests.playerName,
                                    text: "(Поки вона в такому напруженому стані, краще не ризикувати. Мені треба знайти більше відповідей у будинку.)",
                                    portrait: '../characters/main_character_portrait_idle.png',
                                    side: 'left',
                                    isThinking: true,
                                    onClose: () => {
                                        this.omaClimaxActive = false;
                                        Menu.playNormalAmbient();
                                    }
                                }
                            ]);
                        }
                    }
                ]
            }
        ]);
    },

    emotionalResolution() {
        Dialog.start([
            {
                name: Quests.playerName,
                text: "«Für meine geliebte kleine Enkelin Greta... Mögest du immer lachen und tanzen, mein kleines Häschen. 1995».",
                portrait: '../characters/main_character_portrait_idle.png',
                side: 'left'
            },
            {
                name: Quests.playerName,
                text: "Я бачила вашу присвяту в книзі казок у спальні... Ви читали їй про маленьке біле зайченя і теплу шапочку, яку ви подарували їй на день народження. Вона любила вас понад усе.",
                portrait: '../characters/main_character_portrait_sad.png',
                side: 'left'
            },
            {
                name: Quests.playerName,
                text: "Але я — не вона. Я Дарина. Грета загинула в зимовому лісі багато років тому. Ви тримаєте мене тут, бо ваше серце розривається від самотності. Але насильством ви не повернете онуку. Дозвольте її пам'яті спочити з миром...",
                portrait: '../characters/main_character_portrait_sad.png',
                side: 'left'
            },
            {
                name: 'Oma',
                text: "Mein... mein kleines Häschen?! Gott im Himmel... Du hast das Buch für Greta gelesen? Sie liebte dieses Häschen so sehr...",
                portrait: '../characters/oma_character_portrait_sad.png',
                side: 'right'
            },
            {
                name: 'Oma',
                text: "Was habe ich nur getan? Ich war so blind vor Schmerz und Einsamkeit... Der Wald hat sie genommen, und ich... ich wollte die Zeit zurückdrehen. Es tut mir so leid, mein Kind!",
                portrait: '../characters/oma_character_portrait_sad.png',
                side: 'right'
            },
            {
                name: 'Oma',
                text: "Hier ist der Schlüssel. Lauf schnell fort... Geh nach Hause, bevor die Nacht noch kälter wird. Möge Gott mir vergeben...",
                portrait: '../characters/oma_character_portrait_sad.png',
                side: 'right'
            },
            {
                name: Quests.playerName,
                text: "(Ома тремтячими від сліз руками передала мені важкий залізний ключ від вихідних дверей. Вона нарешті визнала правду і відпустила свій біль. Тепер я можу відімкнути двері на волю!)",
                portrait: '../characters/main_character_portrait_amazed.png',
                side: 'left',
                isThinking: true,
                onClose: () => {
                    Quests.omaKeyObtained = true;
                    Game.addJournalEntry({
                        id: 'exit_key',
                        title: 'Ключ від вхідних дверей',
                        source: 'Отримано від Оми',
                        text: "Ома добровільно віддала ключ від важких дубових дверей після згадки про казку 'Das kleine Häschen'. Вона нарешті відпустила пам'ять про померлу онуку Грету і дарувала мені свободу.",
                        words: ['Der Schlüssel — ключ', 'Lauf — біжи', 'Vergib mir — пробач мені', 'Das Häschen — зайченя']
                    });
                }
            }
        ]);
    },

    triggerVictory() {
        Game.isPaused = true;
        Quests.gameWon = true;
        this.omaClimaxActive = false;
        Menu.playNormalAmbient();
        const vicScreen = document.getElementById('victory-screen');
        const vicText = document.getElementById('victory-text');
        if (vicText) {
            vicText.innerText = `Завдяки казці про маленьке зайченя та щирому співчуттю, ${Quests.playerName} змогла достукатися до затьмареного болем розуму Оми. Важкі дубові двері відчинено! Ви вибігли крізь засніжений ліс назустріч світанку і безпеці. Ви вільні!`;
        }
        if (vicScreen) {
            vicScreen.classList.remove('hidden');
        }
    },

    triggerGameOver(reason) {
        Game.isPaused = true;
        this.omaClimaxActive = false;
        const goScreen = document.getElementById('game-over-screen');
        const goText = document.getElementById('game-over-text');
        if (goText && reason) {
            goText.innerText = reason;
        }
        if (goScreen) {
            goScreen.classList.remove('hidden');
        }
    }
};
