const Settings = {
    music: false,
    sound: false
};

const Quests = {
    playerName: "Анна",
    introFinished: false,
    currentRoom: "start_room",
    journal: [], // Список знайдених записів: { id, title, source, text, germanWords }
    door1Unlocked: false,
    omaLeftRoom1: false,
    omaKeyObtained: false,
    gameWon: false,

    hasEntry(id) {
        return this.journal.some(e => e.id === id);
    },

    reset() {
        this.currentRoom = "start_room";
        this.journal = [];
        this.door1Unlocked = false;
        this.omaLeftRoom1 = false;
        this.omaKeyObtained = false;
        this.gameWon = false;
    }
};
