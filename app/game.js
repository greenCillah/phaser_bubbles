var game;


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function fnstart() {

    game = new Phaser.Game(config);

}

window.onload = function () {
    fnstart();
};

function preload() {}

function create() {}

function update() {}
