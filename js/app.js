// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    this.x = x, //x position
    this.y = y, //y position
    this.speed = speed, //bugs speed
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if(this.x > 560){
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random()*520);
    }

    // check for collision of player and enemy
    if(player.x < this.x + 60 &&
        player.x + 45 > this.x &&
        player.y < this.y + 50 &&
        player.y + 50 > this.y ){
            console.log(`player x: ${player.x} y: ${player.y}
             enemy:: x: ${this.x} y: ${this.x}`)
            player.x = 200;
            player.y = 380;
        }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player =  function(x, y, speed){
    this.x =x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    if (this.x > 400) {
        this.x = 400;
    } 

    if(this.x < 0){
        this.x = 0;
    }

    if(this.y >  380) {
        this.y = 380;
    }
    
    // checking the player reaches the water(i.e. game is over then set 
    // player to his starting position)
    if(this.y < 0){
        alert("YOU REACHED THE WATER, CONGRATULATIONS!");
        document.location.reload();
        this.x = 200;
        this.y = 380
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress){
    switch(keyPress){
        case 'left':
        this.x -=  this.speed + 50;
        break;
        case 'right':
        this.x += this.speed + 50;
        break;
        case 'up':
        this.y -= this.speed + 40;
        break;
        case 'down':
        this.y += this.speed + 40;
        break;
    }
}

// check for collistion of enemy and player if it happens send player to his start point
// considering enemy(bug's 60x50) width 60 and height 50 based on this
// check the player position in x is in between the enemy's width or touching that
//1. check either the player.x < enemy.x + 60 and
// 2. check the player.x + 50 > enemy.y and
// check the player position in y is in between the enemy's height or touching that
// 3. check player.y < enemy.y + 50
// 4. check player.y + 40 > enemy.y

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [],
    positionOfEnemy = [60, 140, 220],
    player = new Player(200, 380, 50);

positionOfEnemy.forEach((posY)=>{
    allEnemies.push(new Enemy(0, posY, 100 + Math.floor(Math.random() * 512)))
})
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
