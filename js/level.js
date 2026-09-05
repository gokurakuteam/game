/**
 * Das Abendessen - Дані трьох кімнат, стіни, хітбокси та інтерактивні об'єкти
 */

const FairyTales = [
    {
        id: 'cute',
        title: 'Das kleine Häschen und der goldene Wald',
        category: 'Дитяча казка для Грети (1995)',
        isHorror: false,
        germanText: `Es war einmal ein kleines weißes Häschen im grünen Wald. Es liebte saftige Karotten, frische Blumen und tanzte gern im Mondlicht.\n\nAls der kalte Winter kam, hatte das Häschen keine Angst, denn seine liebe Oma schenkte ihm eine warme rote Mütze und eine süße Tasse Tee.\n\n«Schlaf gut, mein kleines Häschen», sagte die Oma leise, «die Kälte tut dir nichts, solange du geliebt wirst».`,
        translation: `Жило-було маленьке біле зайченя в зеленому лісі. Воно любило соковиту моркву, свіжі квіти та залюбки танцювало в місячному сяйві.\n\nКоли настала холодна зима, зайченя не боялося, бо його люба бабуся подарувала йому теплу червону шапочку і солодку чашку чаю.\n\n«Спи міцно, моє маленьке зайченя», — тихо сказала бабуся, — «холод тобі не зашкодить, доки тебе люблять».`,
        dedication: `«Für meine geliebte kleine Enkelin Greta zum 6. Geburtstag. Mögest du immer lachen und tanzen, mein kleines Häschen. In ewiger Liebe, deine Oma. Winter 1995.»`,
        annaNote: `На форзаці тремтячою рукою олівцем виведено присвяту. Ома називала онуку «mein kleines Häschen» (моє маленьке зайченя)! Це ключ до її затьмареного серця: якщо нагадати їй про це прізвисько та щиру любов до Грети під час розмови, вона може прийти до тями!`,
        journalEntry: {
            id: 'greta_fairytale',
            title: 'Казка про зайченя та присвята Греті',
            source: 'Шафа в спальні, книга казок',
            text: "У збірці казок знайдено дитячу історію 'Das kleine Häschen'. На форзаці зворушливий напис тремтячою рукою: «Für meine geliebte kleine Enkelin Greta... mein kleines Häschen. In ewiger Liebe, deine Oma. Winter 1995». Ома безмежно любила свою маленьку онуку Грету і називала її 'маленьким зайченям'. Це найважливіша зачіпка для порятунку!",
            words: ['Das Häschen — зайченя', 'Der Wald — ліс', 'Die Liebe — любов', 'Schlaf gut — спи міцно', 'Die Mütze — шапочка']
        }
    },
    {
        id: 'horror',
        title: 'Der Fleischmann in der Nacht',
        category: 'Старовинна кривава казка',
        isHorror: true,
        germanText: `Tief im finsteren Schwarzwald lebte ein böser Mann mit einem langen Schlachtermesser. Wenn die Kinder in der Nacht nicht schliefen, schlich er durch das Fenster in ihre Zimmer.\n\nEr schnitt ihnen die Lippen ab, damit niemand schreien konnte, und riss ihnen das zarte Fleisch von den Knochen. In seiner finsteren Küche kochte er das Fleisch in einem schweren Kessel mit Zwiebeln und Blut.\n\n«Knochen für den Ofen, Fleisch für den Tisch», sang er lachend. Niemand entkam seiner Klinge...`,
        translation: `Глибоко в похмурому Шварцвальді жив злий чоловік із довгим різницьким ножем. Коли діти вночі не спали, він прокрадався крізь вікно до їхніх кімнат.\n\nВін відрізав їм губи, щоб ніхто не міг кричати, і здирав ніжне м'ясо з кісток. У своїй похмурій кухні він варив м'ясо у важкому казані з цибулею та кров'ю.\n\n«Кістки для печі, м'ясо для столу», — співав він зі сміхом. Ніхто не врятувався від його леза...`,
        dedication: null,
        annaNote: `Господи, від цієї кривавої казки кров холоне в жилах! Сторінка заплямована і затерта до дір, наче її перечитували сотні разів... На кухні Оми стоїть такий самий чавунний казан, а в кулінарній книзі закладка на розділі 'Fleischgerichte'! Жахи фольклору химерно сплелися з її божевіллям.`,
        journalEntry: {
            id: 'horror_fairytale',
            title: 'Кривава казка про М\'ясника',
            source: 'Шафа в спальні, книга казок',
            text: "Жахлива німецька оповідка 'Der Fleischmann in der Nacht' про маніяка з різницьким ножем, який варив жертв у казані. Сторінка затерта до дір. Божевілля Оми виразно навіяне цими моторошними текстами...",
            words: ['Das Fleisch — м\'ясо', 'Die Nacht — ніч', 'Das Messer — ніж', 'Kochen — варити', 'Der Ofen — піч']
        }
    },
    {
        id: 'sad',
        title: 'Das Mädchen ohne Schatten',
        category: 'Сумна народна оповідка',
        isHorror: false,
        germanText: `Ein junges Mädchen ging im eisigen Schneesturm des Winters verloren. Seine kleinen Schritte verwehte der bittere Nordwind spurlos.\n\nDie Mutter suchte Tag und Nacht, rief verzweifelt ihren Namen in die dunklen Tannen, doch fand nur ein rotes Haarband im tiefen Schnee.\n\nDie Mutter weinte so viele bittere Tränen, dass daraus ein stiller Waldsee entstand. Bis heute sitzt eine alte Frau am Ufer und lauscht dem Wind, der niemals antwortet.`,
        translation: `Юна дівчинка загубилася в крижаній зимовій завірюсі. Її маленькі кроки безслідно замів гіркий північний вітер.\n\nМати шукала вдень і вночі, у розпачі кликала її ім'я в темні сосни, але знайшла лише червону стрічку для волосся в глибокому снігу.\n\nМати виплакала стільки гірких сліз, що з них утворилося тихе лісове озеро. Донині стара жінка сидить на березі й прислухається до вітру, який ніколи не відповідає.`,
        dedication: null,
        annaNote: `Сліди засохлих крапель на папері розмили чорнило... Ома плакала над цією сторінкою. Її онука Грета теж загубилася взимку в лісі. Вона не змогла змиритися зі смертю дитини й замкнулася від світу у своєму горі.`,
        journalEntry: {
            id: 'sad_fairytale',
            title: 'Казка про втрачену дівчинку',
            source: 'Шафа в спальні, книга казок',
            text: "Сумна народна казка про матір, чия донька зникла в сніговій бурі. Розмиті чорнила від сліз Оми свідчать про її невимовний біль від втрати Грети в зимовому лісі.",
            words: ['Der Schnee — сніг', 'Verloren — загублена', 'Die Tränen — сльози', 'Der Winter — зима']
        }
    },
    {
        id: 'parable',
        title: 'Die drei goldenen Äpfel der Wahrheit',
        category: 'Повчальна притча',
        isHorror: false,
        germanText: `Ein alter König verschloss sein Schloss mit schweren eisernen Riegeln vor allen Menschen, weil sein Herz vor Trauer ganz zu Eis gefroren war.\n\nViele Krieger kamen mit Äxten und Feuer, um die Tore mit Gewalt zu öffnen, doch jeder scheiterte und wurde verjagt.\n\nErst als ein fremdes Kind kam, kein Schwert trug, sondern sanft die Wahrheit sprach und den König an seine wahre Liebe erinnerte, schmolz das Eis. Die Tore öffneten sich von selbst. Nicht Hass oder Zorn besiegen das Dunkel, sondern Wahrheit und Sanftmut.`,
        translation: `Старий король замкнув свій замок важкими залізними засувами від усіх людей, бо його серце від скорботи повністю перетворилося на лід.\n\nБагато воїнів приходили з сокирами та вогнем, щоб силою відчинити ворота, але кожен зазнав поразки і був прогнаний.\n\nЛише коли прийшла чужа дитина, яка не мала меча, а лагідно сказала правду і нагадала королю про його справжнє кохання, лід розтанув. Ворота відчинилися самі. Не ненависть і не гнів перемагають темряву, а правда і лагідність.`,
        dedication: null,
        annaNote: `«Не ненависть і не гнів перемагають темряву, а правда і лагідність...» Це пряме моральне правило! Якщо я буду кричати на бабусю, ображати її чи погрожувати, це призведе лише до смерті. Єдиний спосіб врятуватися — співчуття та правда про Грету.`,
        journalEntry: {
            id: 'parable_fairytale',
            title: 'Притча про золоті яблука правди',
            source: 'Шафа в спальні, книга казок',
            text: "Повчальна історія про закритий замок короля. Агресія та погрози лише посилюють захист, тоді як щира правда, лагідність і повага до болю здатні відчинити будь-які замкнені двері.",
            words: ['Die Wahrheit — правда', 'Das Herz — серце', 'Die Trauer — скорбота', 'Das Schloss — замок']
        }
    }
];

const LevelData = {
    showDebug: false,
    currentRoomId: 'start_room',

    rooms: {
        // --- КІМНАТА 1: СПАЛЬНЯ (Пробудження) ---
        start_room: {
            name: "Спальня",
            backgroundImages: "url('rooms/start_room/walls.png'), url('rooms/start_room/floor.png')",
            borderImage: "url('rooms/start_room/border.png')",
            walls: [
                { id: 'top_wall_left', x: 230, y: 140, w: 128, h: 148 },
                { id: 'door1_hitbox', x: 358, y: 140, w: 54, h: 148 },
                { id: 'top_wall_mid', x: 412, y: 140, w: 38, h: 148 },
                { id: 'wardrobe_wall', x: 450, y: 228, w: 156, h: 90 },
                { id: 'nightstand_wall', x: 616, y: 234, w: 50, h: 72 },
                { id: 'top_wall_right', x: 666, y: 140, w: 50, h: 148 },
                { id: 'left_wall', x: 200, y: 140, w: 56, h: 430 },
                { id: 'right_wall', x: 704, y: 140, w: 50, h: 430 },
                { id: 'bottom_wall', x: 230, y: 544, w: 500, h: 60 },
                { id: 'table_wall', x: 288, y: 432, w: 32, h: 36 },
                { id: 'sofa_wall', x: 592, y: 494, w: 98, h: 50 },
                { id: 'plant_wall', x: 550, y: 512, w: 20, h: 32 }
            ],
            items: [
                {
                    id: 'door',
                    name: 'Двері на кухню',
                    sprite: 'rooms/start_room/doors/door1.png',
                    bbox: [358, 196, 412, 288],
                    promptPos: { x: 385, y: 290 },
                    interactRange: 100,
                    zIndex: 288,
                    onInteract: () => {
                        if (Quests.door1Unlocked) {
                            Dialog.start([
                                {
                                    name: Quests.playerName,
                                    text: "(Обережно штовхаю відчинені двері й вислизаю в сусідню кімнату...)",
                                    portrait: '../characters/main_character_portrait_amazed.png',
                                    side: 'left',
                                    isThinking: true,
                                    onClose: () => {
                                        Game.switchRoom('room_next_to_starting_one', 448, 430);
                                    }
                                }
                            ]);
                        } else {
                            Dialog.start([
                                {
                                    name: Quests.playerName,
                                    text: "(Смикаю ручку... Зачинено наглухо. Зверху напис: 'Kein Ausweg'. Здається, бабуся замкнула мене тут.)",
                                    portrait: '../characters/main_character_portrait_amazed.png',
                                    side: 'left',
                                    isThinking: true
                                }
                            ]);
                        }
                    }
                },
                {
                    id: 'wardrobe',
                    name: 'Шафа з казками',
                    sprite: 'rooms/start_room/furniture/object3.png',
                    bbox: [450, 228, 606, 318],
                    promptPos: { x: 528, y: 325 },
                    interactRange: 130,
                    zIndex: 318,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Величезна стара дубова шафа. 'Kleidung' — одяг. Серед темних пальт і важкої мотузки на полиці лежить старовинна книга в потертому шкіряному окладі: «Deutsche Märchen für Kinder» — збірка німецьких казок!)",
                                portrait: '../characters/main_character_portrait_amazed.png',
                                side: 'left',
                                isThinking: true,
                                choices: [
                                    {
                                        text: "📖 Відкрити й почитати казки («Deutsche Märchen»)",
                                        onSelect: () => {
                                            Game.openBookModal();
                                        }
                                    },
                                    {
                                        text: "Оглянути темний одяг і мотузку",
                                        onSelect: () => {
                                            Dialog.start([
                                                {
                                                    name: Quests.playerName,
                                                    text: "(Серед пальт висить груба конопляна мотузка з вузлом та старий чорний фартух зі слідами... схожими на запечену кров. Від цього місця віє могильним холодом.)",
                                                    portrait: '../characters/main_character_portrait_sad.png',
                                                    side: 'left',
                                                    isThinking: true
                                                }
                                            ]);
                                        }
                                    },
                                    {
                                        text: "(Залишити шафу)",
                                        onSelect: () => {}
                                    }
                                ]
                            }
                        ]);
                    }
                },
                {
                    id: 'nightstand',
                    name: 'Тумбочка',
                    sprite: 'rooms/start_room/furniture/object2.png',
                    bbox: [616, 234, 666, 304],
                    promptPos: { x: 635, y: 315 },
                    interactRange: 120,
                    zIndex: 304,
                    onInteract: () => {
                        Game.addJournalEntry({
                            id: 'cookbook',
                            title: 'Кулінарна книга німецької кухні',
                            source: 'Спальня, тумбочка біля ліжка',
                            text: "На пожовклих сторінках кулінарної книги 'Deutsche Hausküche' описані м'ясні страви. Сторінка 'Fleischgerichte' густо покреслена олівцем: «Вечеря на двох... дитяче свіже м'ясо поверне мені тепло моєї дівчинки». Боже милий, вона вважає, що готує вечерю, яка поверне її онуку!",
                            words: ['Fleischgerichte — м\'ясні страви', 'Deutsche Hausküche — німецька кухня']
                        });
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Стара тумбочка. Зверху кулінарна книга німецькою: 'Deutsche Hausküche'. Розгорнута на розділі 'Fleischgerichte' — м'ясні страви... Поруч дивні олівцеві нотатки!)",
                                portrait: '../characters/main_character_portrait_amazed.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'lamp',
                    name: 'Лампа',
                    sprite: 'rooms/start_room/decor/object1.png',
                    bbox: [644, 202, 670, 248],
                    promptPos: { x: 655, y: 315 },
                    interactRange: 110,
                    zIndex: 350,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Тьмяна настільна лампа на тумбочці. 'Die Lampe'. Скло закопчене, тьмяне полум'я ледь розганяє моторошні тіні по кутках.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'table',
                    name: 'Стіл',
                    sprite: 'rooms/start_room/furniture/object4.png',
                    bbox: [288, 420, 320, 468],
                    promptPos: { x: 304, y: 418 },
                    interactRange: 75,
                    zIndex: 468,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Невеликий дерев'яний стіл. 'Der Tisch'. На стільниці помітні подряпини та старі плями... Схоже, тут хтось щось гарячково шукав або перевертав.)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'plant',
                    name: 'Вазон',
                    sprite: 'rooms/start_room/decor/object2.png',
                    bbox: [550, 496, 570, 542],
                    promptPos: { x: 560, y: 494 },
                    interactRange: 75,
                    zIndex: 542,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Зів'яла рослина в горщику. 'Die Blume'. Земля суха, мов попіл. Тут явно ніхто не піклується про живе.)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'sofa',
                    name: 'Диван',
                    sprite: 'rooms/start_room/furniture/object 1.png',
                    bbox: [592, 494, 690, 544],
                    promptPos: { x: 641, y: 490 },
                    interactRange: 90,
                    zIndex: 544,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Потертий диван, на якому я прокинулася. 'Das Sofa'. Оббивка стара й припорошена пилом...)",
                                portrait: '../characters/main_character_portrait_amazed.png',
                                side: 'left',
                                isThinking: true,
                                choices: [
                                    {
                                        text: "Помацати між подушками дивана",
                                        onSelect: () => {
                                            Game.addJournalEntry({
                                                id: 'wooden_rabbit',
                                                title: 'Дерев\'яний зайчик Грети',
                                                source: 'Спальня, щілина в дивані',
                                                text: "Між диванними подушками виявлено стару дитячу іграшку — виструганого з дерева зайчика з вицвілою фарбою. Ома вирізала його для своєї онуки точно як у казці 'Das kleine Häschen'.",
                                                words: ['Das Häschen — зайченя', 'Das Spielzeug — іграшка']
                                            });
                                            Dialog.start([
                                                {
                                                    name: Quests.playerName,
                                                    text: "(Ого! У щілині між подушками щось тверде... Це маленька вирізана з дерева фігурка зайчика! Вона вицвіла від часу. Наче з казки про зайченя, яку Ома читала Греті!)",
                                                    portrait: '../characters/main_character_portrait_amazed.png',
                                                    side: 'left',
                                                    isThinking: true
                                                }
                                            ]);
                                        }
                                    },
                                    {
                                        text: "(Відійти від дивана)",
                                        onSelect: () => {}
                                    }
                                ]
                            }
                        ]);
                    }
                }
            ]
        },

        // --- КІМНАТА 2: КУХНЯ / КОРИДОР ---
        room_next_to_starting_one: {
            name: "Кухня",
            backgroundImages: "url('rooms/room_next_to_starting_one/walls.png'), url('rooms/room_next_to_starting_one/floor.png')",
            borderImage: "url('rooms/room_next_to_starting_one/border.png')",
            walls: [
                { id: 'r2_door1_hitbox', x: 140, y: 160, w: 120, h: 60 },
                { id: 'r2_top_wall', x: 260, y: 140, w: 510, h: 148 },
                { id: 'r2_left_wall', x: 110, y: 140, w: 50, h: 430 },
                { id: 'r2_right_wall', x: 760, y: 140, w: 50, h: 430 },
                { id: 'r2_bottom_left', x: 152, y: 530, w: 290, h: 60 },
                { id: 'r2_door2_hitbox', x: 442, y: 530, w: 68, h: 60 },
                { id: 'r2_bottom_right', x: 510, y: 530, w: 270, h: 60 },
                { id: 'r2_counter', x: 544, y: 256, w: 224, h: 128 },
                { id: 'r2_cupboard', x: 460, y: 224, w: 88, h: 118 }
            ],
            items: [
                {
                    id: 'r2_door_back',
                    name: 'Двері до спальні',
                    sprite: 'rooms/room_next_to_starting_one/doors/door2.png',
                    bbox: [448, 448, 512, 544],
                    promptPos: { x: 480, y: 490 },
                    interactRange: 85,
                    zIndex: 540,
                    onInteract: () => {
                        Game.switchRoom('start_room', 337, 290);
                    }
                },
                {
                    id: 'r2_door_exit',
                    name: 'Сходи до передпокою',
                    sprite: 'rooms/room_next_to_starting_one/doors/door1.png',
                    bbox: [160, 192, 280, 352],
                    promptPos: { x: 200, y: 240 },
                    interactRange: 85,
                    zIndex: 290,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Піднімаюся сходами до дверей... Крізь щілини тягне морозним повітрям із передпокою!)",
                                portrait: '../characters/main_character_portrait_amazed.png',
                                side: 'left',
                                isThinking: true,
                                onClose: () => {
                                    Game.switchRoom('exit_room', 180, 400);
                                }
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_photo',
                    name: 'Поличка зі світлиною',
                    sprite: 'rooms/room_next_to_starting_one/decor/object2.png',
                    bbox: [646, 224, 698, 256],
                    promptPos: { x: 672, y: 390 },
                    interactRange: 105,
                    zIndex: 390,
                    onInteract: () => {
                        Game.addJournalEntry({
                            id: 'greta_photo',
                            title: 'Світлина Грети (1998)',
                            source: 'Кухня, поличка з ліками',
                            text: "На поличці серед баночок із заспокійливими краплями стоїть рамка. На світлині усміхнена білява дівчинка. Напис німецькою: «Meine liebe Enkelin Greta... Du bist für immer bei mir». Онука Оми загинула в лісі багато років тому. Ома переконала свій затьмарений розум, що я — це її Грета!",
                            words: ['Die Enkelin — онука', 'Traurig — сумна / сумно', 'Das Foto — фотографія']
                        });
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Серед ліків на поличці — фотографія дівчинки зі світлими кісками. Напис: 'Meine liebe Enkelin Greta'... У неї була онука Грета, яка померла! Бабуся бачить її в мені...)",
                                portrait: '../characters/main_character_portrait_amazed.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_diary',
                    name: 'Щоденник у буфеті',
                    sprite: 'rooms/room_next_to_starting_one/furniture/object2.png',
                    bbox: [460, 224, 548, 342],
                    promptPos: { x: 504, y: 350 },
                    interactRange: 100,
                    zIndex: 342,
                    onInteract: () => {
                        Game.addJournalEntry({
                            id: 'oma_diary',
                            title: 'Зіпсований щоденник Оми',
                            source: 'Кухня, старий буфет',
                            text: "У буфеті пошарпаний зошит. Останні рядки: «Я більше не витримую цієї самотності. Будинок пустий, мов могила. Але вчора в лісі я побачила її... Я знаю, це вона повернулася. Я зачинила двері, приготую вечерю. Вона більше ніколи мене не покине».",
                            words: ['Allein — самотня', 'Die Familie — сім\'я', 'Die Stille — тиша']
                        });
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(У буфеті щоденник... Останні записи: 'Ich bin so allein'... Вона божеволіє від самотності. Вона думає, що я — її онука, яка повернулася з лісу. Вона не відпустить мене добровільно.)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_counter',
                    name: 'Кухонний стіл',
                    sprite: 'rooms/room_next_to_starting_one/furniture/object1.png',
                    bbox: [544, 256, 768, 384],
                    promptPos: { x: 656, y: 390 },
                    interactRange: 110,
                    zIndex: 384,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Довгий кухонний стіл. 'Der Tisch'. Тут розставлено чистий посуд, нарізані свіжі овочі та лежить кухонний ніж. Ома ретельно готувала вечерю на двох, немов чекаючи на повернення своєї онуки...)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_clock',
                    name: 'Годинник на стіні',
                    sprite: 'rooms/room_next_to_starting_one/decor/object1.png',
                    bbox: [328, 198, 378, 254],
                    promptPos: { x: 353, y: 295 },
                    interactRange: 95,
                    zIndex: 255,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Настінний годинник цокає розмірено й гучно. 'Die Zeit' — час. Кожна секунда наближає момент, коли Ома повернеться...)",
                                portrait: '../characters/main_character_portrait_amazed.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_rug',
                    name: 'Килим',
                    sprite: 'rooms/room_next_to_starting_one/decor/object7.png',
                    bbox: [320, 416, 672, 480],
                    promptPos: { x: 496, y: 430 },
                    interactRange: 80,
                    zIndex: 165,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Старий плетений килим. На ньому видно сліди важких чобіт, які ведуть у бік передпокою.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_decor_utensils',
                    name: 'Кухонне начиння',
                    sprite: 'rooms/room_next_to_starting_one/decor/object3.png',
                    bbox: [736, 384, 768, 416],
                    promptPos: { x: 740, y: 400 },
                    interactRange: 85,
                    zIndex: 420,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(В коробці старі залізні миски та ополоники. Усе вимито до блиску, наче бабця щодня чекає на прихід гостей...)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_decor_sack',
                    name: 'Гладильна доска',
                    sprite: 'rooms/room_next_to_starting_one/decor/object4.png',
                    bbox: [166, 452, 216, 510],
                    promptPos: { x: 191, y: 460 },
                    interactRange: 85,
                    zIndex: 510,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Стара гладильна доска з якимось мішком... Той самий мішок який я бачила в нічному лісі перед тим, як знепритомніти.)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_decor_spices',
                    name: 'Баночки зі спеціями',
                    sprite: 'rooms/room_next_to_starting_one/decor/object5.png',
                    bbox: [706, 258, 760, 286],
                    promptPos: { x: 720, y: 390 },
                    interactRange: 95,
                    zIndex: 390,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Баночки з висушеними лісовими травами та корінням. Пахне чебрецем і сушеними грибами.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r2_decor_jar',
                    name: 'Глечик на буфеті',
                    sprite: 'rooms/room_next_to_starting_one/decor/object6.png',
                    bbox: [422, 272, 442, 318],
                    promptPos: { x: 432, y: 340 },
                    interactRange: 90,
                    zIndex: 350,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Глиняний глечик з трояндою. Всередині глечика щось червоне...)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                }
            ]
        },

        // --- КІМНАТА 3: ПЕРЕДПОКІЙ ТА ВИХІД (Кульмінація) ---
        exit_room: {
            name: "Передпокій",
            backgroundImages: "url('rooms/exit_room/walls.png'), url('rooms/exit_room/floor.png')",
            borderImage: "url('rooms/exit_room/border.png')",
            walls: [
                { id: 'r3_top_wall', x: 152, y: 140, w: 624, h: 148 },
                { id: 'r3_left_wall', x: 110, y: 140, w: 50, h: 430 },
                { id: 'r3_right_wall', x: 760, y: 140, w: 50, h: 430 },
                { id: 'r3_bottom_wall', x: 220, y: 530, w: 556, h: 60 },
                { id: 'r3_door2_bottom_limit', x: 152, y: 544, w: 70, h: 30 },
                { id: 'r3_fridge_wall', x: 164, y: 200, w: 54, h: 120 },
                { id: 'r3_stand_wall', x: 322, y: 268, w: 124, h: 50 },
                { id: 'r3_coatrack_wall', x: 516, y: 270, w: 26, h: 48 },
                { id: 'r3_bookcase_wall', x: 674, y: 228, w: 92, h: 90 },
                { id: 'r3_table_scarf_wall', x: 672, y: 480, w: 96, h: 60 }
            ],
            items: [
                {
                    id: 'r3_door_back',
                    name: 'Сходи на кухню',
                    sprite: 'rooms/exit_room/doors/door2.png',
                    bbox: [160, 416, 222, 544],
                    promptPos: { x: 190, y: 470 },
                    interactRange: 85,
                    zIndex: 50, // Спрайт гравця малюється поверх door2
                    onInteract: () => {
                        Game.switchRoom('room_next_to_starting_one', 190, 230);
                    }
                },
                {
                    id: 'r3_exit_door',
                    name: 'Вихідні двері на вулицю',
                    sprite: 'rooms/exit_room/doors/door1.png',
                    bbox: [454, 196, 506, 288],
                    promptPos: { x: 480, y: 295 },
                    interactRange: 100,
                    zIndex: 288,
                    onInteract: () => {
                        if (Quests.omaKeyObtained) {
                            Cutscenes.triggerVictory();
                        } else {
                            Dialog.start([
                                {
                                    name: Quests.playerName,
                                    text: "(Масивні дубові двері на волю замкнені важким засувом. Без ключа від Оми їх не відчинити...)",
                                    portrait: '../characters/main_character_portrait_amazed.png',
                                    side: 'left',
                                    isThinking: true,
                                    choices: [
                                        {
                                            text: "Зазирнути в замкову шпарину",
                                            onSelect: () => {
                                                Dialog.start([
                                                    {
                                                        name: Quests.playerName,
                                                        text: "(Припадаю оком до шпарини... Зовні темно, сніжинки кружляють у світлі місяця, а вдалині видно стежку, що веде до села! Воля так близько, але ключ у кишені Оми.)",
                                                        portrait: '../characters/main_character_portrait_amazed.png',
                                                        side: 'left',
                                                        isThinking: true
                                                    }
                                                ]);
                                            }
                                        },
                                        {
                                            text: "(Відійти від дверей)",
                                            onSelect: () => {}
                                        }
                                    ]
                                }
                            ]);
                        }
                    }
                },
                {
                    id: 'r3_furniture_bookcase',
                    name: 'Шафа з книгами в передпокої',
                    sprite: 'rooms/exit_room/furniture/object2.png',
                    bbox: [674, 228, 766, 318],
                    promptPos: { x: 700, y: 325 },
                    interactRange: 95,
                    zIndex: 318,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Масивна дерев'яна шафа з книгами та пожовклими підручниками німецькою мовою...)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true,
                                choices: [
                                    {
                                        text: "Оглянути дитячий зошит на полиці",
                                        onSelect: () => {
                                            Dialog.start([
                                                {
                                                    name: Quests.playerName,
                                                    text: "(Старий учнівський зошит у лінійку. На обкладинці дитячим почерком підписано: «Greta Meier, 3. Klasse». Всередині старанно написані вправи з німецької мови та дитячий малюнок бабусиної хатинки в лісі...)",
                                                    portrait: '../characters/main_character_portrait_sad.png',
                                                    side: 'left',
                                                    isThinking: true
                                                }
                                            ]);
                                        }
                                    },
                                    {
                                        text: "(Відійти від шафи)",
                                        onSelect: () => {}
                                    }
                                ]
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_coat_rack',
                    name: 'Вішалка з дитячим пальтом',
                    sprite: 'rooms/exit_room/furniture/object3.png',
                    bbox: [512, 230, 546, 318],
                    promptPos: { x: 530, y: 325 },
                    interactRange: 90,
                    zIndex: 320,
                    onInteract: () => {
                        Game.addJournalEntry({
                            id: 'child_coat',
                            title: 'Жовте пальто Грети',
                            source: 'Передпокій, вішалка біля дверей',
                            text: "На вішалці акуратно висить вицвіле жовте пальтечко. На кишені вишито «Greta». У кишенях лежать висохла соснова шишка та старий квиток на потяг до Мюнхена 1995 року. Ома роками чекала повернення онуки...",
                            words: ['Die Freiheit — свобода', 'Warten — чекати', 'Das Kind — дитя']
                        });
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(На високій вішалці акуратно розвішане маленьке дитяче пальтечко... На кишені вишито 'Greta'.)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true,
                                choices: [
                                    {
                                        text: "Перевірити кишені пальта",
                                        onSelect: () => {
                                            Dialog.start([
                                                {
                                                    name: Quests.playerName,
                                                    text: "(У кишені суха ялинова шишка, яку дитина збирала в лісі, і пожовклий квиток на приміський потяг за грудень 1995 року... Біль цієї жінки тягнеться вже майже три десятиліття.)",
                                                    portrait: '../characters/main_character_portrait_sad.png',
                                                    side: 'left',
                                                    isThinking: true
                                                }
                                            ]);
                                        }
                                    },
                                    {
                                        text: "(Не чіпати пальто)",
                                        onSelect: () => {}
                                    }
                                ]
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_decor_painting',
                    name: 'Картина',
                    sprite: 'rooms/exit_room/decor/object1.png',
                    bbox: [232, 198, 282, 254],
                    promptPos: { x: 257, y: 295 },
                    interactRange: 90,
                    zIndex: 254,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Старовинна картина в темній рамі. На ній зображено темний ліс — 'Der Wald'. Віти дерев наче чіпляються за небо.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_decor_lamp',
                    name: 'Настінний ліхтар',
                    sprite: 'rooms/exit_room/decor/object4.png',
                    bbox: [672, 196, 704, 248],
                    promptPos: { x: 688, y: 320 },
                    interactRange: 90,
                    zIndex: 350,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Старий мідний ліхтар на стіні над шафою з книгами. 'Die Laterne'. Тьмяно освітлює передпокій.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_decor_chest_items',
                    name: 'Свічка на столику біля шарфа',
                    sprite: 'rooms/exit_room/decor/object2.png',
                    bbox: [708, 486, 736, 510],
                    promptPos: { x: 710, y: 475 },
                    interactRange: 85,
                    zIndex: 550,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Невелика свічка у скляному підсвічнику на столику біля шарфа. 'Die Kerze'. Поруч застиглі краплі воску.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_decor_trash_boxes',
                    name: 'Коробки та сміття біля сходів',
                    sprite: 'rooms/exit_room/decor/object3.png',
                    bbox: [290, 486, 380, 544],
                    promptPos: { x: 335, y: 480 },
                    interactRange: 90,
                    zIndex: 120,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Старі картонні коробки та побутове сміття, складене під сходами. 'Der Müll' — сміття. Тут немає килима, тільки коробки, пожовклі газети та старі ганчірки.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_decor_doormat',
                    name: 'Килимок біля виходу',
                    sprite: 'rooms/exit_room/decor/object5.png',
                    bbox: [458, 292, 502, 316],
                    promptPos: { x: 480, y: 310 },
                    interactRange: 80,
                    zIndex: 150,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Килимок під вихідними дверима. На ньому виткано 'Willkommen' — ласкаво просимо... Яка жорстока іронія.)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_furniture_table_scarf',
                    name: 'Стіл із шарфом',
                    sprite: 'rooms/exit_room/furniture/object1.png',
                    bbox: [672, 480, 768, 540],
                    promptPos: { x: 680, y: 475 },
                    interactRange: 95,
                    zIndex: 540,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Низький дерев'яний стіл. На ньому дбайливо розкладений теплий вовняний шарф — 'Der Schal'. Поруч лежать теплі зимові рукавиці.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_furniture_table',
                    name: 'Підставка для взуття',
                    sprite: 'rooms/exit_room/furniture/object4.png',
                    bbox: [378, 262, 446, 318],
                    promptPos: { x: 412, y: 322 },
                    interactRange: 85,
                    zIndex: 318,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Підставка для чобіт. Поруч акуратно стоїть маленька пара дитячого зимового взуття... Цікаво чиї це, бо на Ому навряд налізуть.)",
                                portrait: '../characters/main_character_portrait_idle.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_furniture_stand',
                    name: 'Магнітофон',
                    sprite: 'rooms/exit_room/furniture/object5.png',
                    bbox: [322, 268, 382, 318],
                    promptPos: { x: 352, y: 322 },
                    interactRange: 85,
                    zIndex: 318,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Магнітофон з платівками... Не знаю як на нього ще подивитись, просто магнітофон з платівками...)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_furniture_fridge',
                    name: 'Відкритий холодильник біля сходів',
                    sprite: 'rooms/exit_room/furniture/object6.png',
                    bbox: [164, 200, 218, 320],
                    promptPos: { x: 190, y: 325 },
                    interactRange: 95,
                    zIndex: 320,
                    onInteract: () => {
                        Dialog.start([
                            {
                                name: Quests.playerName,
                                text: "(Старий відкритий холодильник біля сходів. Всередині морозне повітря і сильний металевий запах. На поличках видно свіже червоне сире м'ясо — 'Das Fleisch'...)",
                                portrait: '../characters/main_character_portrait_sad.png',
                                side: 'left',
                                isThinking: true,
                                choices: [
                                    {
                                        text: "Придивитися ближче до м'яса",
                                        onSelect: () => {
                                            Dialog.start([
                                                {
                                                    name: Quests.playerName,
                                                    text: "(Шматки свіжі, крижані, з них навіть не стекла вся кров... Звідки в лісовій хатині стільки свіжого м'яса серед глухої зими? Від цієї картини мороз іде поза шкірою.)",
                                                    portrait: '../characters/main_character_portrait_sad.png',
                                                    side: 'left',
                                                    isThinking: true
                                                }
                                            ]);
                                        }
                                    },
                                    {
                                        text: "(Швидко відійти)",
                                        onSelect: () => {}
                                    }
                                ]
                            }
                        ]);
                    }
                },
                {
                    id: 'r3_oma',
                    name: 'Бабуся (Ома)',
                    elementId: 'oma-npc',
                    promptPos: { x: 480, y: 340 },
                    interactRange: 95,
                    zIndex: 420,
                    onInteract: () => {
                        Cutscenes.omaClimax();
                    }
                }
            ]
        }
    },

    get walls() { 
        return this.rooms[this.currentRoomId] ? this.rooms[this.currentRoomId].walls : []; 
    },
    get items() { 
        return this.rooms[this.currentRoomId] ? this.rooms[this.currentRoomId].items : []; 
    }
};

